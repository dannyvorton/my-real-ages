//import { useState } from "react";
import sytles from "@/app/styles/age.module.css";

export default function Age() {

    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    });

    return (

        <div>

            <h2 className={sytles.ageH2}>Enter Dates To Learn Your Real Ages</h2>

            <form className={sytles.ageForm}>
                <label>
                    Birth Date: <input type="date" name="birthDate"/>
                    <br/>
                    <br/>
                    Death Date: <input type="date" name="deathDate"/>
                </label>
            </form>

            <h2 className={sytles.ageH2}>Your Real Ages Are</h2>

            <div className={sytles.ageOutput}>
                <output>
                    Earth Age: x years x months x days
                    <br/>
                    <br/>
                    Heaven Age: x minutes x seconds
                </output>
            </div>

        </div>

    );
}