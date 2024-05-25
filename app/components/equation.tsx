export default function Equation() {
  const earthDay: number = 1;
  const earthMonth: number = 1;
  const earthYear: number = 1;

  const seconds: number = 60 * 60 * 24 * 0.001;
  const months: number = seconds * 30.4166667;
  const years: number = seconds * 365;

  let heavenDay: number = seconds;
  let heavenDayHours: number = Math.floor(heavenDay / 3600);
  heavenDayHours %= 3600;
  let heavenDayMinutes: number = Math.floor(heavenDay / 60);
  heavenDayMinutes %= 60;
  let heavenDaySeconds: number = heavenDay % 60;

  let heavenMonth: number = months;
  let heavenMonthHours: number = Math.floor(heavenMonth / 3600);
  heavenMonthHours %= 3600;
  let heavenMonthMinutes: number = Math.floor(heavenMonth / 60);
  heavenMonthMinutes %= 60;
  let heavenMonthSeconds: number = heavenMonth % 60;

  let heavenYear: number = years;
  let heavenYearHours: number = Math.floor(heavenYear / 3600);
  heavenYearHours %= 3600;
  let heavenYearMinutes: number = Math.floor(heavenYear / 60);
  heavenYearMinutes %= 60;
  let heavenYearSeconds: number = heavenYear % 60;

  return (
    <>
      <h3 className="text-3xl text-center p-3">Time Conversion</h3>

      <div className="grid grid-rows-2 gap-1">
        <output className="text-xl text-center">{earthDay} day on earth = {heavenDayHours} hours, {heavenDayMinutes} minutes, {Math.floor(heavenDaySeconds)} seconds in heaven.</output>
        <output className="text-xl text-center">{earthMonth} month on earth = {heavenMonthHours} hours, {heavenMonthMinutes} minutes, {Math.floor(heavenMonthSeconds)} seconds in heaven.</output>
        <output className="text-xl text-center">{earthYear} year on earth = {heavenYearHours} hours, {heavenYearMinutes} minutes, {Math.floor(heavenYearSeconds)} seconds in heaven.</output>
      </div>
    </>
  );
}
