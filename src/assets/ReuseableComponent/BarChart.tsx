// import React from 'react';

import { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'May', Personalized: 25, Instant: 48 },
  { name: 'Jun', Personalized: 70, Instant: 90 },
  { name: 'July', Personalized: 9, Instant: 90 },
  { name: 'Aug', Personalized: 80, Instant: 60},
  { name: 'Sept', Personalized: 10, Instant: 30},
  { name: 'Oct', Personalized: 50, Instant: 85},
  { name: 'Nov', Personalized: 50, Instant: 79},
];




const renderLegend = (props:any) => {
    const { payload } = props;
    return (
      <div style={{ display: "flex", gap: "20px", 
      justifyContent: "center", //the for the etire element
      alignItems: "center",
      padding: "10px" }}>
        {payload.map((entry:any, index:any) => (
          <div key={`item-${index}`} style={{ display: "flex", alignItems: "center", gap: "5px"}}>
            <span
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: entry.color,
                borderRadius: "50%", //  Makes it rounded - for the color indicator
                display: "inline-block",
                
              }}
            />
            <span style={{ fontSize: "14px", color: "#808080" }}>{entry.value}</span>   {/* this span tag is for the text - */}
          </div>
        ))}
      </div>
    );
  };




const Chart = () => {
    const [barGap, setBarGap] = useState(18); // Default gap

    useEffect(() => {
      const updateBarGap = () => {
        if (window.innerWidth <= 640) {
          setBarGap(10); // Small screens (Mobile)
        } else if (window.innerWidth <= 1024) {
          setBarGap(18); // Medium screens (Tablets)
        } else {
          setBarGap(18); // Large screens (Desktop)
        }
      };
  
      updateBarGap(); // Set initial value
      window.addEventListener("resize", updateBarGap);
  
      return () => window.removeEventListener("resize", updateBarGap);
    }, []);


  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        barGap={18} 
        barCategoryGap={barGap}
      
      >
        <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" stroke="#667085"  axisLine={false} tickLine={false}/> {/*the stroke specify's colors for the a axis */}
        <YAxis stroke="#667085" domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} allowDataOverflow  axisLine={false} tickLine={false}/>
        <Tooltip />
        <Legend content={renderLegend} />
        <Bar dataKey="Personalized" stackId="a" fill="#014DAF" radius={[8, 8, 0, 0]} />
        <Bar dataKey="Instant" stackId="a" fill="#CCE2FF" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
