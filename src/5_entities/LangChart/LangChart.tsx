import { PieChart, Pie, Cell } from "recharts";

interface TLangChart {
  data: {
    name: string;
    value: any;
  }[];
}

export default function LangChart({ data }: TLangChart) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={600} height={400}>
      <Pie
        data={data}
        cx={250}
        cy={150}
        labelLine={false}
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
