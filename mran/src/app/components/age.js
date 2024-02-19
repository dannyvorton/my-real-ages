'use client'
import { useState } from 'react'
import styles from '../styles/age.module.css'

export default function Age() {

    const today = (() => {
        let yourDate = new Date()
        const offset = yourDate.getTimezoneOffset()
        yourDate = new Date(yourDate.getTime() - (offset*60*1000))
        return yourDate.toISOString().split('T')[0]
    })()

    const [birthDate, setBirthDate] = useState(today)
    const [deathDate, setDeathDate] = useState(today)
    const birth = new Date(birthDate)
    const death = new Date(deathDate)
    const DAYS_IN_YEAR = 365.242199
    const DAYS_IN_THOUSAND_YEARS = DAYS_IN_YEAR * 1000
    const dayDiff = (death.getTime() - birth.getTime()) / (24*60*60*1000) / DAYS_IN_THOUSAND_YEARS
    const secondDiff = dayDiff * 24 * 60 * 60
    console.log(birthDate, deathDate, dayDiff, secondDiff)

    return (

    <form className={styles.datePicker}>

        <h2 className={styles.headers}><label>Enter Birth Date</label></h2><br/>
        <input className={styles.birthDatePicker} type='date' defaultValue={today} onChange={e=>setBirthDate(e.target.value)} /><br/>

        <h2 className={styles.headers}><label>Enter Current Date or Death Date</label></h2><br/>
        <input className={styles.deathDatePicker} type='date' defaultValue={today} onChange={e=>setDeathDate(e.target.value)} />

        <h2 className={styles.headers}>My real age is</h2>
        <output className='time'>{dayDiff}</output> <br/>
        <output className='time'>{secondDiff}</output>

    </form>

    )
}