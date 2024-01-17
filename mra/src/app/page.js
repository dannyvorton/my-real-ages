import Image from 'next/image'
import styles from './page.module.css'
import Verse from './components/verse'
import Scripture from './components/scripture'
import Footer from './components/footer'
import { Share } from 'next/font/google'

export default function Home() {
  return (
    <>
      <div>
          
        <Scripture>
          <Verse text="For a thousand years in thy sight are but as yesterday when"/>
          <Verse text="it is past, and as a watch in the night."/>
          <a href="https://www.churchofjesuschrist.org/study/scriptures/ot/ps/90?lang=eng#p4" target="_blank">Psalm 90:4</a>
        </Scripture>

        <Scripture>
          <Verse text="But, beloved, be not ignorant of this one thing, that one day"/>
          <Verse text="is with the Lord as a thousand years, and a thousand years as"/>
          <Verse text="one day."/>
          <a href="https://www.churchofjesuschrist.org/study/scriptures/nt/2-pet/3?lang=eng#p8" target="_blank">2 Peter 3:8</a>
        </Scripture>

        <Scripture>
          <Verse text="And the Lord said unto me, by the Urim and Thummim,"/>
          <Verse text="that Kolob was after the manner of the Lord, according to its"/>
          <Verse text="times and seasons in the revolutions thereof; that one revolution"/>
          <Verse text="was a day unto the Lord, after his manner of reckoning,"/>
          <Verse text="it being one thousand years according to the time appointed"/>
          <Verse text="unto that whereon thou standest. This is the reckoning of the"/>
          <Verse text="Lord's time, according to the reckoning of Kolob."/>
          <a href="https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng#p4" target="_blank">Abaraham 3:4</a>
        </Scripture>

      </div>

      <div>

        <hr />
        <Footer />

      </div>

    </>

  )
}
