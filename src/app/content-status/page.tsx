import targets from "@content/targets.json";
import { CERTIFICATIONS } from "@content/certifications";
import { getQuestionCountsByDomain, getQuestionsForCert } from "@/lib/questions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TARGET = targets.questionsPerDomainTarget;

export default function ContentStatusPage() {
  const totalQuestions = CERTIFICATIONS.reduce(
    (sum, cert) => sum + getQuestionsForCert(cert.slug).length,
    0
  );
  const totalTarget = CERTIFICATIONS.reduce((sum, cert) => sum + cert.domains.length * TARGET, 0);

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 space-y-6 px-4 py-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Content status</h1>
        <p className="text-muted-foreground">
          Question bank progress per domain, per certification. Target is {TARGET} questions per
          domain for the first pass ({totalQuestions}/{totalTarget} overall). Content is generated
          in small, validated batches — see{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">npm run validate:content</code>.
        </p>
      </div>

      {CERTIFICATIONS.map((cert) => {
        const counts = getQuestionCountsByDomain(cert.slug);
        const certTotal = getQuestionsForCert(cert.slug).length;
        const certTarget = cert.domains.length * TARGET;
        return (
          <Card key={cert.slug}>
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base">{cert.name}</CardTitle>
              <Badge variant="secondary">
                {certTotal}/{certTarget}
              </Badge>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain</TableHead>
                    <TableHead className="text-right">Weight</TableHead>
                    <TableHead className="text-right">Questions</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cert.domains.map((domain) => {
                    const count = counts[domain.name] ?? 0;
                    const done = count >= TARGET;
                    return (
                      <TableRow key={domain.name}>
                        <TableCell className="font-medium">{domain.name}</TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {domain.weightPercent}%
                        </TableCell>
                        <TableCell className="text-right">
                          {count}/{TARGET}
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge variant={done ? "default" : "outline"}>
                            {done ? "Done" : "In progress"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        );
      })}
    </main>
  );
}
