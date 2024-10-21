import Head from "./components/head";
import Scripture from "./components/scripture";
import Dates from "./components/dates";
//import Ages from "./components/ages";
import Foot from "./components/foot";

export default function Home() {
  return (
    <>
      <Head />
      <Scripture />
      <Dates />
      <Foot />
    </>
  );
}
