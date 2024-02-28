//import { useState } from "react";
import sytles from "@/app/styles/age.module.css";

export default function Age() {

    const currentDate = new Date().toISOString().split("T")[0];
    const deathDate = new Date().toISOString().split("T")[0];

    return (

        <div>

            <h2 className={sytles.ageH2}>Enter Dates To Learn Your Real Age</h2>

            <form className={sytles.ageForm}>
                <label>
                    Birth Date: <input type="date" id="datePicker" name="birthDate"/>
                    <br/>
                    <br/>
                    Death Date: <input type="date" id="datePicker" name="birthDate"/>
                </label>
            </form>

            <h2 className={sytles.ageH2}>Your Real Age Is</h2>

            <div className={sytles.ageOutput}>
                <output>
                    x hours x minutes x seconds
                </output>
            </div>

        </div>

    );
}