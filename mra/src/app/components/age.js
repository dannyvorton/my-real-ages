import styles from '../styles/age.module.css'

export default function Age() {
    return (

    <form className={styles.datePicker}>

        <h2 className={styles.headers}><label for='birthDate'>Enter Birth Date</label></h2><br/>
        <input className={styles.birthDatePicker} type='date' id='birthDate' name='birthDate' /><br/>

        <h2 className={styles.headers}><label for='deathDate'>Enter Current Date or Death Date</label></h2><br/>
        <input className={styles.deathDatePicker} type='date' id='deathDate' name='deathDate' />

        <h2 className={styles.headers}>My real age is</h2>
        <output />

    </form>

    )
}