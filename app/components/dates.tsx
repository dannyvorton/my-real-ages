"use client";

import { FormEvent, useState } from "react";
import {
  formatISO,
  parseISO,
  differenceInYears,
  addYears,
  differenceInMonths,
  addMonths,
  differenceInDays
} from "date-fns";

export default function Dates() {

  const today = formatISO(new Date(), {representation: "date"});
  const [birth, setBirth] = useState<string>(today);
  const [death, setDeath] = useState<string>(today);

  const handleBirth = (e: FormEvent<HTMLInputElement>) => {
    setBirth(e.currentTarget.value);
  };
  const handleDeath = (e: FormEvent<HTMLInputElement>) => {
    setDeath(e.currentTarget.value);
  };

  const earthAge = () => {
    const years = differenceInYears(death, birth);
    const adjustedYears =  addYears(birth, years);
    const months = differenceInMonths(death, adjustedYears);
    const adjustedMonths = addMonths(adjustedYears, months);
    const days = differenceInDays(death, adjustedMonths);
    return (
      <>
        <p>{ years } year(s)</p>
        <p>{ months } month(s)</p>
        <p>{ days } days(s)</p>
      </>
    );
  };

  const heavenAge = () => {
    const DAYS_IN_YEARS = 365.2425;
    const earthSeconds = (parseISO(death).getTime() - parseISO(birth).getTime()) / 1000;
    const seconds = earthSeconds / 1000 / DAYS_IN_YEARS;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return (
      <>
        <p>{ hours } hour(s)</p>
        <p>{ minutes } minute(s)</p>
        <p>{ Math.round(seconds % 60) } second(s)</p>
      </>
    );
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl text-center">Enter Dates For Your Real Ages</h2>
        <div className="grid grid-cols-2 gap-4 p-2">
        <p className="text-right">Birth date:</p>
        <span>
          <input
            className="text-black"
            type="date"
            value={ birth }
            onChange={ handleBirth }
          />
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-right">Current or death date:</p>
        <span>
          <input
            className="text-black"
            type="date"
            value={ death }
            onChange={ handleDeath }
          />
        </span>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-2xl text-center">My Real Ages Are</h2>
        <div className="grid grid-cols-2 gap-4 p-2">
          <p className="text-right">My earth age is:</p>
          <div className="text-left">{ earthAge() }</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-right">My heaven age is:</p>
          <div className="text-left">{ heavenAge() }</div>
        </div>
      </div>
    </>
  );
}
