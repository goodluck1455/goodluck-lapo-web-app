
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Sample Data
const data = [
  { day: "Mon", income: 55 },
  { day: "Tue", income: 22 },
  { day: "Wed", income: 40 },
  { day: "Thu", income: 100 },
  { day: "Fri", income: 60 },
  { day: "Sat", income: 22 },
  { day: "Sun", income: 79 },
];

const CustomLineChart = () => {
  return (
    <div className="p-4 ">
      {/* Title */}
      {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">This Week’s Income</h2> */}

      {/* Chart Container */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" /> {/* Light Gray Grid */}
          <XAxis dataKey="day" tick={{ fill: "#667085", fontSize: 12 }} axisLine={false} tickLine={false}/>

          <YAxis domain={[0, 100]} tick={{ fill: "#667085", fontSize: 12 }} 
          ticks={[100, 80, 60, 40, 20, 0]} 
          allowDataOverflow={true}
          axisLine={false} tickLine={false} />
          <Tooltip />
    
          <Line type="basis" dataKey="income" stroke="#4DAF01" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
