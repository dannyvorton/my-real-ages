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

  let startDate = new Date(birth);
  let endDate = new Date(death);



  let earthDiff: number = Math.floor(endDate.getTime() - startDate.getTime());
  let diffDay: number = 1000 * 60 * 60 * 24;
  let diffDays: number = Math.floor(earthDiff / diffDay);
  let months: number = Math.floor(diffDays / 31);
  let years: number = Math.floor(months / 12);

  return (

    <>
      <h3 className="text-3xl text-center p-3">How Old Am I?</h3>

      <div className="grid grid-cols-2 gap-2">
        <div className="text-xl text-right">Birth Date:</div>
        <div className="text-xl text-left"><input type="date" defaultValue={birth}/></div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="text-xl text-right">Current or Death Date:</div>
        <div className="text-xl text-left"><input className="text-xl text-left" type="date" defaultValue={death}/></div>
      </div>

      <h3 className="text-3xl text-center p-3">My Real Ages Are:</h3>

      <div className="grid grid-cols-2 gap-2">
        <p className="text-xl text-right">Earth Age:</p>
        <output className="text-xl text-left">{years} yrs, {months} mos, {diffDays} dys</output>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <p className="text-xl text-right">Heaven Age:</p>
        <output className="text-xl text-left">hrs, min, sec</output>
      </div>
    </>

  );
}
