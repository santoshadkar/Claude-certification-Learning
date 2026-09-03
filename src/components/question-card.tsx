"use client";

import type { Question } from "@content/schema/question";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export interface QuestionCardProps {
  question: Question;
  selectedOptionIds: string[];
  onChange: (ids: string[]) => void;
  disabled?: boolean;
  /** When true, correctness is revealed (practice mode, after submit). */
  showCorrectness?: boolean;
}

export function QuestionCard({
  question,
  selectedOptionIds,
  onChange,
  disabled = false,
  showCorrectness = false,
}: QuestionCardProps) {
  const isSingleSelect = question.selectCount === 1;

  function optionState(optionId: string): "correct" | "incorrect" | "missed" | "neutral" {
    if (!showCorrectness) return "neutral";
    const isCorrect = question.correctOptionIds.includes(optionId);
    const isSelected = selectedOptionIds.includes(optionId);
    if (isCorrect && isSelected) return "correct";
    if (isCorrect && !isSelected) return "missed";
    if (!isCorrect && isSelected) return "incorrect";
    return "neutral";
  }

  function toggleCheckbox(optionId: string, checked: boolean) {
    if (checked) onChange([...selectedOptionIds, optionId]);
    else onChange(selectedOptionIds.filter((id) => id !== optionId));
  }

  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{question.domain}</Badge>
          <Badge variant="secondary" className="capitalize">
            {question.difficulty}
          </Badge>
          <span className="text-xs text-muted-foreground">
            Select {question.selectCount} {question.selectCount === 1 ? "answer" : "answers"}
          </span>
        </div>
        {question.scenarioContext && (
          <p className="rounded-md bg-muted p-3 text-sm text-muted-foreground">
            {question.scenarioContext}
          </p>
        )}
        <p className="text-base font-medium leading-relaxed">{question.stem}</p>
      </CardHeader>
      <CardContent>
        {isSingleSelect ? (
          <RadioGroup
            value={selectedOptionIds[0] ?? ""}
            onValueChange={(value: string) => onChange([value])}
            disabled={disabled}
          >
            {question.options.map((option) => (
              <OptionRow key={option.id} state={optionState(option.id)}>
                <RadioGroupItem value={option.id} id={`opt-${question.id}-${option.id}`} />
                <span>{option.text}</span>
              </OptionRow>
            ))}
          </RadioGroup>
        ) : (
          <div className="grid w-full gap-2">
            {question.options.map((option) => (
              <OptionRow key={option.id} state={optionState(option.id)}>
                <Checkbox
                  checked={selectedOptionIds.includes(option.id)}
                  onCheckedChange={(checked: boolean) => toggleCheckbox(option.id, checked === true)}
                  disabled={disabled}
                  id={`opt-${question.id}-${option.id}`}
                />
                <span>{option.text}</span>
              </OptionRow>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function OptionRow({
  state,
  children,
}: {
  state: "correct" | "incorrect" | "missed" | "neutral";
  children: React.ReactNode;
}) {
  return (
    <label
      className={cn(
        "group/field-label flex cursor-pointer items-start gap-3 rounded-md border p-3 text-sm transition-colors",
        state === "neutral" && "border-border hover:bg-accent/50",
        state === "correct" && "border-green-600/40 bg-green-600/10",
        state === "incorrect" && "border-destructive/40 bg-destructive/10",
        state === "missed" && "border-amber-500/40 bg-amber-500/10"
      )}
    >
      {children}
    </label>
  );
}
