import Image from "next/image";
import Header from "./components/header";
import ScriptureGroup from "./components/scripture";
import Ages from "./components/ages";
import Footer from "./components/footer";

export default function Home() {
  return (

    <>
      <Header/>
      <ScriptureGroup/>
      <Ages/>
      <Footer/>
    </>

  );
}
