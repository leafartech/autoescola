'use client'

import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { ReactNode, useState } from "react"

interface DropdownProps {
    title: string
    children: ReactNode
}

export default function Dropdown({ children, title }: DropdownProps) {
    const [ isDropdownActived, setIsDropdownActived ] = useState<boolean>(false)

    return (
        <div className="w-full">
            <p className="flex justify-between items-center text-black py-1 text-base sm:text-lg border-b border-zinc-200 cursor-pointer" onClick={e => setIsDropdownActived(!isDropdownActived)}>
                <span className="font-medium">{title}</span>
                <ChevronRightIcon className={`w-5 h-5 transition ${isDropdownActived && 'rotate-90'}`} />
            </p>
            <div className={`text-zinc-600 p-2 border-b border-zinc-200 ${isDropdownActived ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </div>
    )
}