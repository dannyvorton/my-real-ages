import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Scripture from "./components/scripture";

export default function Home() {
  return (

    <fragment>

      <Header/>
      <Scripture/>
      <Footer/>

    </fragment>
    
  );
}
