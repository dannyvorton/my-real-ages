import Image from "next/image";
import Header from "./components/header";
import Ages from "./components/ages";
import Footer from "./components/footer";
import Center from "./components/center";
import ScriptureGroup from "./components/scriptureGroup";

export default function Home() {
  return (

    <Center>
      <Header/>
      <ScriptureGroup/>
      <Ages/>
      <Footer/>
    </Center>

  );
}
