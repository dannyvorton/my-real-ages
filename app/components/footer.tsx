import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {

    const currentYear: number = new Date().getFullYear();

    return (

        <>

            <hr/>

            <p>
                My Real Ages is not affiliated with any church or religious organization. <br/>
                Danny Orton &copy;{ currentYear } <br/>
                <Link href="https://github.com/dannyvorton/my-real-ages" target="_blank"><FaGithub/></Link>
                <Link href="https://www.linkedin.com/in/orton/" target="_blank"><FaLinkedin/></Link>
            </p>

        </>

    );
}