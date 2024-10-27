"use client";

import { FormEvent, useState } from "react";
import { formatISO, parseISO, format } from "date-fns";

export default function Dates() {

  const today = formatISO(new Date());
  const initDate = format(parseISO(today), "yyyy-MM-dd");
  const DAYS_IN_YEARS = 365.2422;

  const [birth, setBirth] = useState<string>(initDate);
  const [death, setDeath] = useState<string>(initDate);

  const earthSeconds = (parseISO(death).getTime() - parseISO(birth).getTime()) / 1000;
  const earthDays = earthSeconds / 60 / 60 / 24;

  const earthAge = () => {
    const years = Math.floor(earthDays / DAYS_IN_YEARS);
    return `${years} year(s),
            ${Math.floor(earthDays % DAYS_IN_YEARS)} day(s)`;
  };

  const heavenAge = () => {
    const seconds = earthSeconds / 1000 / DAYS_IN_YEARS;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hour(s),
            ${minutes} minutes(s),
            ${Math.round(seconds % 60)} seconds(s)`;
  };

  const handleBirth = (e: FormEvent<HTMLInputElement>) => {
    //-<NOTE: type for evenr
    setBirth(e.currentTarget.value);
  };

  const handleDeath = (e: FormEvent<HTMLInputElement>) => {
    setDeath(e.currentTarget.value);
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
              value={birth}
              onChange={handleBirth}
            />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-right">Current or death date:</p>
          <span>
            <input
              className="text-black"
              type="date"
              value={death}
              onChange={handleDeath}
            />
          </span>
        </div>
      </div>
      {/**
       * Combined dates and ages into one component because birth and death need to be used on
       * both. A parent component can be created and birth and death can be passed down.
       */}
      <div className="p-4">
        <h2 className="text-2xl text-center">My Real Ages Are</h2>
        <div className="grid grid-cols-2 gap-4 p-2">
          <p className="text-right">My earth age is:</p>
          <p className="text-left">{earthAge()}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-right">My heaven age is:</p>
          <p className="text-left">{heavenAge()}</p>
        </div>
      </div>
    </>
  );
}
