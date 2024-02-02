import styles from '../styles/verse.module.css'

export default function Verse({text}) {
    return (
        <p className={styles.box}>{text}</p>
    )
}