export default function Equation() {

  const earthDay: number = 1;
  const earthMonth: number = 1;
  const earthYear: number = 1;

  const heavenDay: number = (60 * 60 * 24) * .001;
  const heavenDaySeconds: number = (heavenDay % 60);
  const heavenDayMinutes: number = Math.floor((heavenDay - heavenDaySeconds) / 60);
  const heavenDayHours: number = Math.floor((heavenDay - heavenDaySeconds - heavenDayMinutes) / 24);

  const heavenMonth: number = heavenDay * 30.4167;
  const heavenMonthSeconds: number = (heavenMonth % 60);
  const heavenMonthMinutes: number = Math.floor((heavenMonth / 60) * .001);
  const heavenDayMonth: number = Math.floor(heavenMonth / 24);

  const heavenYear: number = heavenDay * 365;
  const heavenYearSeconds: number = (heavenYear % 60);
  const heavenYearMinutes: number = Math.floor(heavenYear / 60);
  const heavenYearMonth: number = Math.floor(heavenYear / 24);

  return (

    <>

    <h3 className="text-3xl text-center p-3">Time Conversion</h3>

    <div className="grid grid-rows-2 gap-1">
      <output className="text-xl text-center">{earthDay} day on earth = {heavenDayHours} hours, {heavenDayMinutes} minute, {Math.round(heavenDaySeconds)} seconds in heaven.</output>
      <output className="text-xl text-center">{earthMonth} month on earth = {heavenDayMonth} hours, {heavenMonthMinutes} minutes, {Math.round(heavenMonthSeconds)} seconds in heaven. </output>
      <output className="text-xl text-center">{earthYear} year on earth = {heavenYearMonth} hours, {heavenYearMinutes} minutes, {Math.round(heavenYearSeconds)} seconds in heaven.</output>
    </div>
    
    </>

  );
}