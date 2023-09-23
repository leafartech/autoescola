'use client'

import { useEffect, useState } from "react"
import Navbar from "../Navbar"

interface HeaderProps {
    title: string
}

export default function Header({title}: HeaderProps) {
    const [ width, setWidth ] = useState<number>(0)

    useEffect(() => {
        if (typeof window !== 'undefined') setWidth(window.screen.width)
    }, [])
    
    return (
        <header className="h-[400px] back-img flex justify-center bg-zinc-50">
            <Navbar />
            <div className="h-full w-full max-w-5xl flex flex-col items-start justify-center px-4 sm:px-0">
                <h1 className={`text-3xl font-semibold ${width > 450 ? 'text-my' : 'text-white'}`}>Auto Escola Tropical </h1>
                <h4 className={`text-xl ${width > 450 ? 'text-black' : 'text-zinc-300'}`}>{title}</h4>
            </div>
        </header>
    )
}