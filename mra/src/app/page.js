import Image from 'next/image'
import styles from './page.module.css'
import Footer from './components/footer'
import Line from './components/line'
import Scripture from './components/scripture'

export default function Home() {
  return (
    <>
      <div>
          
        <Scripture>
          <Line text="For a thousand years in thy sight are but as yesterday when"/>
          <Line text="it is past, and as a watch in the night."/>
          <a href="https://www.churchofjesuschrist.org/study/scriptures/ot/ps/90?lang=eng#p4" target="_blank">Psalm 90:4</a>
        </Scripture>

        <Scripture>
          <Line text="But, beloved, be not ignorant of this one thing, that one day"/>
          <Line text="is with the Lord as a thousand years, and a thousand years as"/>
          <Line text="one day."/>
          <a href="https://www.churchofjesuschrist.org/study/scriptures/nt/2-pet/3?lang=eng#p8" target="_blank">2 Peter 3:8</a>
        </Scripture>

        <Scripture>
          <Line text="And the Lord said unto me, by the Urim and Thummim,"/>
          <Line text="that Kolob was after the manner of the Lord, according to its"/>
          <Line text="times and seasons in the revolutions thereof; that one revolution"/>
          <Line text="was a day unto the Lord, after his manner of reckoning,"/>
          <Line text="it being one thousand years according to the time appointed"/>
          <Line text="unto that whereon thou standest. This is the reckoning of the"/>
          <Line text="Lord's time, according to the reckoning of Kolob."/>
          <a href="https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng#p4" target="_blank">Abaraham 3:4</a>
        </Scripture>
      
      </div>

      <Footer></Footer>
    </>

  )
}
