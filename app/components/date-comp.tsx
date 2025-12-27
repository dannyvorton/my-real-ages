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

export default function DateComp() {

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
    const adjustedYears = addYears(birth, years);
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
      <div>
        <h2>Enter Dates For Your Real Ages</h2>
          <div>
            <p>Birth date:</p>
            <div>
              <input type="date" value={ birth } onChange={ handleBirth } />
            </div>
          </div>
          <div>
            <p>Current or death date:</p>
            <div>
              <input type="date" value={ death } onChange={ handleDeath } />
            </div>
          </div>
      </div>

      <div>
        <h2>My Real Ages Are</h2>
          <div>
            <p>My earth age is:</p>
            <div>
              { earthAge() }
            </div>
          </div>
          <div>
            <p>My heaven age is:</p>
            <div>
              { heavenAge() }
            </div>
          </div>
      </div>
    </>
  );
}
