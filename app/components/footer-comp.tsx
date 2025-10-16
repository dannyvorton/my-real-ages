import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterComp() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center">
      <hr/>
      <div className="p-4">
        <p>
          My Real Ages is not affiliated with a church or religious organization. <br/>
          My Real Ages does not collect or store any personal data. <br/>
          All calculations are performed locally in your browser. <br/>
          Created by Danny Orton &copy;{ currentYear }
        </p>
        <div className="flex justify-center">
          <Link href="https://github.com/dannyvorton/my-real-ages" target="_blank"><FaGithub/></Link>
          <Link href="https://www.linkedin.com/in/orton/" target="_blank"><FaLinkedin/></Link>
          <Link href="https://x.com/DannyVOrton" target="_blank"><FaXTwitter/></Link>
        </div>
      </div>
    </footer>
  );
}
