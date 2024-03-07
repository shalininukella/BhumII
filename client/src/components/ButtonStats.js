import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Cell, Pie, PieChart, Tooltip, Legend } from "recharts";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Cell, Pie, PieChart, Tooltip, Legend } from "recharts";

const ButtonStats = () => {
  const [buttonClicks, setButtonClicks] = useState([]);

  useEffect(() => {
    const fetchButtonClicks = async () => {
      try {
        const buttonClicksSnapshot = await getDocs(
          collection(db, "button_clicks")
        );
        const buttonClicksData = buttonClicksSnapshot.docs.map((doc) => ({
          buttonName: doc.id,
          count: doc.data().count,
        }));
        setButtonClicks(buttonClicksData);
      } catch (error) {
        console.error("Error fetching button click data:", error);
      }
    };

    fetchButtonClicks();
  }, []);

  const COLORS = ["#6CB4EE", "#318CE7", "#6699CC", "#3457D5", "#13274F"];

  return (
    <div>
      <PieChart width={400} height={300}>
        <Pie
          data={buttonClicks}
          dataKey="count"
          nameKey="buttonName"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {buttonClicks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          align="center"
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
        />
        <Legend
          align="center"
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
        />
      </PieChart>
    </div>
  );
};

export default ButtonStats;
