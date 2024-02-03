import Image from 'next/image'
import styles from './page.module.css'
import Scripture from './components/scripture'
import Footer from './components/footer'
import { Share } from 'next/font/google'

export default function Home() {
  return (
    <>

      <Scripture />
      <Footer />

    </>

  )
}
