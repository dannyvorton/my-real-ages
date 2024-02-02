import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


export default function Footer() {
    return (

        <>

            <Link href="https://github.com/dannyvorton/my-real-age" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
            <Link href="https://www.linkedin.com/in/orton" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>

        </>

    )
}
