import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
];

const Chart = ({ratings}) => {
    console.log("chart")
    console.log(ratings)
    const data = [...ratings].reverse()
    const chartHeight = Math.max(300, data.length * 60);
  return (
    <div >
        <ResponsiveContainer width="100%" height={chartHeight}>
        <BarChart
            data={data}
            layout="vertical"
    
        >
            
            {/* VALUE axis (horizontal) */}
            <XAxis type="number" />

            {/* CATEGORY axis (vertical) */}
            <YAxis type="category" dataKey="name" axisLine={false} tickLine={false}  />

            <Tooltip />
            <Legend />

            <Bar dataKey="count" fill="#FF8811" barSize={25}/>
            \
        </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default Chart;
