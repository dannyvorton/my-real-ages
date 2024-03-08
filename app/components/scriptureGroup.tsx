import Link from "next/link";
import Scripture from "./scripture";

export default function ScriptureGroup() {
    return (

        <div>
            <Scripture href="https://www.churchofjesuschrist.org/study/scriptures/ot/ps/90?lang=eng" scriptureReference="Psalm 90:4">
                For a thousand years in thy sight are but as yesterday when <br/>
                it is past, and as a watch in the night. <br/>
            </Scripture>

            <Scripture href="https://www.churchofjesuschrist.org/study/scriptures/nt/2-pet/3?lang=eng" scriptureReference="2 Peter 3:8">
                <p className="text-justify">But, beloved, be not ignorant of this thing, that one day</p>
                <p className="text-justify">is with the Lord as a thousand years, and a thousand years as</p>
                <p className="text-justify">one day.</p>
            </Scripture>

            <Scripture href="https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng" scriptureReference="Abraham 3:4">
                And the Lord said unto me, by the Urim and Thummim, <br/>
                that Kolob was after the manner of the Lord, according to its <br/>
                times and seasons in the revolutions thereof; that one revolu- <br/>
                tion was a day unto the Lord, after his manner of reckoning, <br/>
                it being one thousand years according to the time appointed <br/>
                unto that whereon thou standest. This is the reckoning of the <br/>
                Lord's time, according to the reckoning of Kolob. <br/>
            </Scripture>

        </div>

    );
}