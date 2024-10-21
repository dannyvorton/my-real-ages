"use client"

import { useState } from "react";

export default function Dates() {
  
  const current: any = new Date();
  const year: any = current.getFullYear();
  const month: any = String(current.getMonth() + 1).padStart(2, "0");
  const day: any = current.getDate();
  const today: any = year + "-" + month + "-" + day;

  const [birth, getBirth] = useState(today);
  const handleBirth = () => {getBirth};

  const [death, getDeath] = useState(today);
  const handleDeath = () => {getDeath};

  return (
    <div className="p-4">
      <h2 className="text-2xl text-center">Enter Dates For Your Real Ages</h2>
      <div className="grid grid-cols-2 gap-4 p-2">
        <p className="text-right">Enter birth date:</p>
        <span><input type="date" value={birth} onChange={handleBirth}/></span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-right">Enter death or current date:</p>
        <span><input type="date" value={death} onChange={handleDeath}/></span>
      </div>
    </div>
  );
}
