import { FC } from "react";

interface Stat {
  label: string;
  value: string;
}
const stats: Stat[] = [
  { value: "7,500+", label: "Vetted Experts" },
  { value: "$2.1 M", label: "payouts processed" },
  { value: "24 h", label: "avg. turnaround" },
  { value: "90 %", label: "insight approval" },
];

export const Stats: FC = () => (
  <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
    {stats.map(({ value, label }) => (
      <div key={label}>
        <p className="text-3xl font-semibold tracking-tight">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    ))}
  </div>
);
