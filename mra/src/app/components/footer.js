import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from '../styles/footer.module.css'

export default function Footer() {
    return (

        <footer className={styles.footer}>

        <div className={styles.gitHub}>
            <Link href="https://github.com/dannyvorton/my-real-age" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
        </div>

        <div className={styles.linkedIn}>
            <Link href="https://www.linkedin.com/in/orton" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
        </div>

        </footer>

    )
}
