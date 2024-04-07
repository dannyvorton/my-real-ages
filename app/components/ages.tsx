import formatDate from "./date";

export default function Ages() {

  return (

    <>
      <h3 className="text-3xl text-center p-3">How Old Am I?</h3>
      <h1>currentDate</h1>
      <div className="text-xl text-center">Enter Birth Date: <input type="date"/></div>
      <div className="text-xl text-center">Enter Current Date or Death Date: <input type="date"/></div>
    </>

  );
}
