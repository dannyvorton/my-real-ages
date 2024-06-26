import Link from "next/link";

export default function Scripture() {
  return (

    <div className="grid place-content-center text-xl">

      <blockquote className="py-2">
        For a thousand years in thy sight are but as yesterday when <br/>
        it is past, and as a watch in the night. <br/>
        <Link href="https://www.churchofjesuschrist.org/study/scriptures/ot/ps/90?lang=eng" target="_blank" className="italic hover:not-italic">Psalm 90:4</Link>
      </blockquote>

      <blockquote className="py-2">
        But, beloved, be not ignorant of this one thing, that one day <br/>
        is with the Lord as a thousand years, and a thousand years as <br/>
        one day. <br/>
        <Link href="https://www.churchofjesuschrist.org/study/scriptures/nt/2-pet/3?lang=eng" target="_blank" className="italic hover:not-italic">2 Peter 3:8</Link>
      </blockquote>

      <blockquote className="py-2">
        And the Lord said unto me, by the Urim and Thummim, <br/>
        that Kolob was after the manner of the Lord, according to its <br/>
        times and seasons in the revolutions thereof; that one revolu- <br/>
        tion was a day unto the Lord, after this manner of reckoning, <br/>
        it being one thousand years according to the time appointed <br/>
        unto that whereon thou standest. This is the reckoning of the <br/>
        Lord's time, according to the reckoning of Kolob. <br/>
        <Link href="https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng" target="_blank" className="italic hover:not-italic">Abraham 3:4</Link>
      </blockquote>
    
    </div>

  );
}
