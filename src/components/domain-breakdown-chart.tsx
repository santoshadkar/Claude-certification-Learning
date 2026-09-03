"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface DomainBreakdownDatum {
  domain: string;
  percent: number;
  detail?: string;
}

function colorFor(percent: number): string {
  if (percent >= 80) return "var(--chart-1)";
  if (percent >= 50) return "var(--chart-3)";
  return "var(--destructive)";
}

function truncateLabel(label: string, max = 18): string {
  return label.length > max ? `${label.slice(0, max - 1)}…` : label;
}

export function DomainBreakdownChart({ data }: { data: DomainBreakdownDatum[] }) {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 48 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
          <XAxis
            dataKey="domain"
            tickFormatter={(v: string) => truncateLabel(v)}
            angle={-35}
            textAnchor="end"
            interval={0}
            height={70}
            tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          />
          <Tooltip
            formatter={(value, _name, item) => [
              `${value}%`,
              (item?.payload as DomainBreakdownDatum | undefined)?.detail ?? "Mastery",
            ]}
            contentStyle={{
              background: "var(--popover)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              color: "var(--popover-foreground)",
              fontSize: 12,
            }}
          />
          <Bar dataKey="percent" radius={[4, 4, 0, 0]}>
            {data.map((d) => (
              <Cell key={d.domain} fill={colorFor(d.percent)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
