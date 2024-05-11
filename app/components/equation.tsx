export default function Equation() {

  const heavenHours: number = 24;
  const hH: string = heavenHours.toLocaleString();
  const heavenMinutes: number = heavenHours * 60;
  const hM: string = heavenMinutes.toLocaleString();
  const heavenSeconds: number = heavenMinutes * 60;
  const hS: string = heavenSeconds.toLocaleString();

  const earthHours: number = heavenHours * 365 * 1000;
  const eH: string = earthHours.toLocaleString();
  const earthMinutes: number = heavenMinutes * 365 * 1000;
  const eM: string = earthMinutes.toLocaleString();
  const earthSeconds: number = heavenSeconds * 365 * 1000;
  const eS: string = earthSeconds.toLocaleString();

  return (

    <>

    <h3 className="text-3xl text-center p-3">Time Conversion</h3>

    <div className="grid grid-rows-2 gap-2">
        <output className="text-xl text-center"><strong>Heaven:</strong> hrs {hH}, min {hM}, sec {hS}</output>
        <output className="text-xl text-center"><strong>Earth:</strong> hrs {eH}, min {eM}, sec {eS}</output>
    </div>
    
    </>

  );
}