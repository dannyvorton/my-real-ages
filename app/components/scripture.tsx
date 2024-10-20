import Link from "next/link";

export default function Scripture() {
  return (
    <div className="grid justify-center p-4 gap-y-4">
      <article>
        For a thousand years in thy sight are but as yesterday when <br/>
        it is past, and as a watch in the night. <br/>
        <Link
          href="https://www.churchofjesuschrist.org/study/scriptures/ot/ps/90?lang=eng"
          target="_blank"
          className="hover:italic"
        >Psalm 90:4</Link>
      </article>
      <article>
        But, beloved, be not ignorant of this one thing, that one day <br/>
        is with the Lord as a thousand years, and a thousand years as <br/>
        one day. <br/>
        <Link
          href="https://www.churchofjesuschrist.org/study/scriptures/nt/2-pet/3?lang=eng"
          target="_blank"
          className="hover:italic"
        >2 Peter 3:8</Link>
      </article>
      <article>
        And the Lord said unto me, by the Urim and Thummim, <br/>
        that Kolob was after the manner of the Lord, according to its <br/>
        times and seasons in the revolutions thereof; that one <br/>
        revolution was a day unto the Lord, after his manner of <br/>
        reckoning, it being one thousand years according to the time <br/>
        appointed unto that whereon thou standest. This is the <br/>
        reckoning of the Lord&#39;s time, according to the reckoning of <br/>
        Kolob. <br/>
        <Link
          href="https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng"
          target="_blank"
          className="hover:italic"
        >Abraham 3:4</Link>
      </article>
    </div>
  );
}
