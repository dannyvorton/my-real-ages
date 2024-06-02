export default function Equation() {

  const earthDay: number = 1;
  const earthMonth: number = 1;
  const earthYear: number = 1;

  const heavenSeconds: number = 60 * 60 * 24 * 0.001;
  const heavenMonths: number = heavenSeconds * 30.4166667;
  const heavenYears: number = heavenSeconds * 365;

  let heavenDay: number = heavenSeconds;
  let heavenDayHours: number = Math.floor(heavenDay / 3600);
  heavenDayHours %= 3600;
  let heavenDayMinutes: number = Math.floor(heavenDay / 60);
  heavenDayMinutes %= 60;
  let heavenDaySeconds: number = heavenDay % 60;

  let heavenMonth: number = heavenMonths;
  let heavenMonthHours: number = Math.floor(heavenMonth / 3600);
  heavenMonthHours %= 3600;
  let heavenMonthMinutes: number = Math.floor(heavenMonth / 60);
  heavenMonthMinutes %= 60;
  let heavenMonthSeconds: number = heavenMonth % 60;

  let heavenYear: number = heavenYears;
  let heavenYearHours: number = Math.floor(heavenYear / 3600);
  heavenYearHours %= 3600;
  let heavenYearMinutes: number = Math.floor(heavenYear / 60);
  heavenYearMinutes %= 60;
  let heavenYearSeconds: number = heavenYear % 60;

  return (

    <>

      <h3 className="text-3xl text-center p-3">Time Conversion</h3>

      <div className="grid grid-rows-3 text-xl text-center">

        <div>
          <output>{earthDay} day on earth <strong>= </strong></output>
          <output>{heavenDayHours} hours, </output>
          <output>{heavenDayMinutes} minutes, </output>
          <output>{Math.floor(heavenDaySeconds)} seconds in heaven.</output>
        </div>

        <div>
          <output>{earthMonth} month on earth <strong>= </strong></output>
          <output>{heavenMonthHours} hours, </output>
          <output>{heavenMonthMinutes} minutes, </output>
          <output>{Math.floor(heavenMonthSeconds)} seconds in heaven.</output>
        </div>

        <div>
          <output>{earthYear} year on earth <strong>= </strong></output>
          <output>{heavenYearHours} hours, </output>
          <output>{heavenYearMinutes} minutes, </output>
          <output>{Math.floor(heavenYearSeconds)} seconds in heaven.</output>
        </div>

      </div>

    </>

  );
}
