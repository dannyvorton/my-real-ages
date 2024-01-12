import styles from "./line.module.css"

export default function Line({text}) {
    return (
        <p className={styles.box}>{text}</p>
    )
}