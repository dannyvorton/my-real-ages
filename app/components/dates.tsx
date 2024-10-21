"use client"

import { useState } from "react";

export default function Dates() {
  
  const current: any = new Date();
  const year: any = current.getFullYear();
  const month: any = String(current.getMonth() + 1).padStart(2, "0");
  const day: any = current.getDate();
  const today: any = year + "-" + month + "-" + day;
  const [now, getNow] = useState(today);
  const handleChange = () => {getNow};

  return (
    <div className="p-4">
      <h2 className="text-2xl text-center">Enter Dates For Your Real Ages</h2>
      <div className="grid grid-cols-2 gap-4 p-2">
        <p className="text-right">Enter birth date:</p>
        <span><input type="date" value={now} onChange={handleChange}/></span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-right">Enter death or current date:</p>
        <span><input type="date" value={now} onChange={handleChange}/></span>
      </div>
    </div>
  );
}
