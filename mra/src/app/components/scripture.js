import styles from '../styles/scripture.module.css'

export default function Scripture({children}) {
    return (
        <div className={styles.box}>{children}</div>
    )
}