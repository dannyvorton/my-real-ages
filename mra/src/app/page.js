import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header'
import Scripture from './components/scripture'
import Footer from './components/footer'
import Age from './components/age'
import { Share } from 'next/font/google'

export default function Home() {
  return (
    <>

      <Header />
      <Scripture />
      <Age />
      <Footer />

    </>

  )
}
