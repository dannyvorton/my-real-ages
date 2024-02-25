import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "@/app/styles/footer.module.css";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (

        <footer className={styles.footer}>
            <hr/>
            My Real Age is not affiliated with any church or religious organization.
            <br/>
            Danny Orton &copy;{ currentYear }
            <br/>
            <Link href="https://github.com/dannyvorton/my-real-age" target="_blank"><FaGithub/></Link>
            <Link href="https://www.linkedin.com/in/orton/" target="_blank"><FaLinkedin/></Link>
        </footer>

    );
}