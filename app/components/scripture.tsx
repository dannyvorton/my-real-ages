import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    children:ReactNode
    href:string
    scriptureReference:string
}

export default function Scripture({ children, href, scriptureReference }:Props ) {
    return (
        <blockquote className="mb-2 text-justify">
            {children}
            <Link href={href} target="_blank">{scriptureReference}</Link>
        </blockquote>
    );
}