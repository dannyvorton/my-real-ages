"use client"

import { useState } from "react";
import currentDate from "./currentDate";

export default function Ages() {

    let [birth, death]: any = useState(currentDate);

  return (

    <>
      <h3 className="text-3xl text-center p-3">How Old Am I?</h3>
      <h3></h3>
      <div className="text-xl text-center">Enter Birth Date: <input type="date" value={birth}/></div>
      <div className="text-xl text-center">Enter Current Date or Death Date: <input type="date" value={death}/></div>
    </>

  );
}
