import styles from '../styles/scripture.module.css'

export default function Scripture() {
    return (

        <div className={styles.verse}>
        
            <blockquote className={styles.psalm}>
                For a thousand years in thy sight are but as yesterday when <br/>
                it is past, and as a watch in the night. <br/>
                <a href="https://www.churchofjesuschrist.org/study/scriptures/ot/ps/90?lang=eng#p4" target="_blank">Psalm 90:4</a>
            </blockquote>

            <blockquote className={styles.peter}>
                But, beloved, be not ignorant of this one thing, that one day <br/>
                is with the Lord as a thousand years, and a thousand years as <br/>
                one day. <br/>
                <a href="https://www.churchofjesuschrist.org/study/scriptures/nt/2-pet/3?lang=eng#p8" target="_blank">2 Peter 3:8</a>
            </blockquote>

            <blockquote className={styles.abraham}>
                And the Lord said unto me, by the Urim and Thummim, <br/>
                that Kolob was after the manner of the Lord, according to its <br/>
                times and seasons in the revolutions thereof; that one revolution <br/>
                was a day unto the Lord, after his manner of reckoning, <br/>
                it being one thousand years according to the time appointed <br/>
                unto that whereon thou standest. This is the reckoning of the <br/>
                Lord's time, according to the reckoning of Kolob. <br/>
                <a href="https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng#p4" target="_blank">Abaraham 3:4</a>
            </blockquote>

        </div>
    )
}