import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (

    <footer className="border-t border-black p-5 text-center text-base">

      <p>Danny Orton, &copy;{currentYear}</p>

      <div className="flex space-x-1 justify-center p-1">
        <Link href="https://github.com/dannyvorton/my-real-ages" target="_blank"><FaGithub className="size-5"/></Link>
        <Link href="https://www.linkedin.com/in/orton/" target="_blank"><FaLinkedin className="size-5"/></Link>
      </div>

    </footer>

  );
}
