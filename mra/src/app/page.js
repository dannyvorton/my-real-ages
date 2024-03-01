import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Scripture from "./components/scripture";
import Age from "./components/age";
import Footer from "./components/footer";

export default function Home() {
  return (

    <fragment>

      <Header/>
      <Scripture/>
      <Age/>
      <Footer/>

    </fragment>
    
  );
}
