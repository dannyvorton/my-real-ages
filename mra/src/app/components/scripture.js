import styles from "./scripture.module.css"

export default function Scripture({children}) {
    return (
        <div className={styles.box}>{children}</div>
    )
}