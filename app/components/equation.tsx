export default function Equation() {

  const earthDay: number = 1;
  const earthMonth: number = 1;
  const earthYear: number = 1;

  const heavenDaySeconds: number = ((60 * 60 * 24) * .001);
  const heavenMonthSeconds: number = heavenDaySeconds * 30.4166667;
  const heavenYearSeconds: number = heavenDaySeconds * 365;

  console.log(heavenDaySeconds);
  console.log(heavenMonthSeconds);
  console.log(heavenYearSeconds);

  return (

    <>

    <h3 className="text-3xl text-center p-3">Time Conversion</h3>

    <div className="grid grid-rows-2 gap-1">
      <output className="text-xl text-center">{earthDay} day on earth = {} hours, {} minute, {} seconds in heaven.</output>
      <output className="text-xl text-center">{earthMonth} month on earth = {} hours, {} minutes, {} seconds in heaven. </output>
      <output className="text-xl text-center">{earthYear} year on earth = {} hours, {} minutes, {} seconds in heaven.</output>
    </div>
    
    </>

  );
}