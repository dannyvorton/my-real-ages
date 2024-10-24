import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Foot() {

  const year = new Date();
  const getYear = year.getFullYear();

  return (
    <footer className="text-center">
      <hr/>
      <div className="p-4">
        <p>
          My Real Ages is not affiliated with any church or religious organization. <br/>
          Danny Orton &copy;{getYear}
        </p>
        <div className="flex justify-center">
          <Link href="https://github.com/dannyvorton/my-real-ages" target="_blank"><FaGithub/></Link>
          <Link href="https://www.linkedin.com/in/orton/" target="_blank"><FaLinkedin/></Link>
        </div>
      </div>
    </footer>
  );
}
