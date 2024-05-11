"use client"

import { useState } from "react";

export default function Ages() {

  let date = new Date();
  let year: string = date.toLocaleString('default', {year: 'numeric'});
  let month: string = date.toLocaleString('default', {month: '2-digit'});
  let day: string = date.toLocaleString('default', {day: '2-digit'});
  let today: string = [year, month, day].join('-');

  let [birth, setBirth]: any = useState(today);
  let [death, setDeath]: any = useState(today);

  return (

    <>
      <h3 className="text-3xl text-center p-3">How Old Am I?</h3>

      <div className="grid grid-cols-2 gap-2">
        <div className="text-xl text-right">Enter Birth Date:</div>
        <div className="text-xl text-left"><input type="date" defaultValue={birth}/></div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="text-xl text-right">Enter Current Date or Death Date:</div>
        <div className="text-xl text-left"><input type="date" defaultValue={death}/></div>
      </div>
    </>

  );
}
