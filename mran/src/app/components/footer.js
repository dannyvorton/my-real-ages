import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from '../styles/footer.module.css'

export default function Footer() {
    return (

        <footer>

        <hr/>

        <div className={styles.disclaimer}>
            My Real Age is not affiliated with any church or religious organization. <br/>
            Danny Orton &copy;{new Date().getFullYear()} <br/>
        </div>

        <div className={styles.socialMedia}>
            <Link className={styles.gitHub} href="https://github.com/dannyvorton/my-real-age" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
            <Link className={styles.linkedIn} href="https://www.linkedin.com/in/orton" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
        </div>

        </footer>

    )
}
