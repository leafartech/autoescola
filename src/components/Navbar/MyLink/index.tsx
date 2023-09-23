'use client'

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from 'next/navigation'

interface MyLinkProps {
    children: ReactNode
    href: string
    letterColor: string
}

export default function MyLink({children, href, letterColor}: MyLinkProps) {
    const pathname = usePathname()

    return (
        <li>
            <Link href={href} className={`relative py-2 ${pathname === href ? 'font-semibold text-white sm:text-my sm:font-medium bottom-line' : letterColor} hover:text-my`}>{children}</Link>
        </li>
    )
}