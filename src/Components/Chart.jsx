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
