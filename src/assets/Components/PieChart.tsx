
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Active", value: 1500, color: "#00A99D" },
  { name: "Expired", value: 100, color: "#FFB400" },
  { name: "Inactive", value: 70, color: "#0057D9" },
  { name: "Blocked", value: 100, color: "#8624DB" },
  { name: "Lost", value: 80, color: "#FF4D4F" },
];

// Custom Legend Component
const renderLegend = (props:any) => {
  const { payload } = props;
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4 ">
      {payload.map((entry:any, index:any) => (
        <div key={index} className="inline-flex items-center gap-2">
          {/* Small Rounded Indicator */}
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          {/* Legend Text Colored */}
          <span className="text-sm font-medium text-[#808080] ">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const CustomPieChart = () => {
  return (
    <div className="flex flex-wrap items-center justify-center max-sm:flex-wrap mt-18">
      <div className="relative w-[200px] h-[200px]">
        {/* Pie Chart */}
        <PieChart width={400} height={230} style={{ marginLeft: "-6.2rem"}}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color}  className="max-sm:flex-wrap"/>
            ))}
          </Pie>
          <Tooltip />
          <Legend content={renderLegend} />
        </PieChart>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-gray-600 text-sm font-semibold">Total Cards</p>
          <p className="text-black text-2xl font-bold">2,450</p>
        </div>
      </div>
    </div>
  );
};

export default CustomPieChart;
