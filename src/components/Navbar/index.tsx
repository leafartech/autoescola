'use client'
import useScroll from "@/hooks/useScroll"
import MyLink from "./MyLink"
import { useState } from 'react'

interface NavbarProps {
    bg?: string
}

export default function Navbar({ bg }: NavbarProps) {
    const [navbar, setNavbar] = useState<boolean>(false)
    let { backgroundColor, letterColor } = useScroll()

    return (
        <nav id="navbar" className={`fixed sm:h-[100px] h-[52px] top-0 left-0 w-full flex items-center flex-col z-50 ${backgroundColor} ${bg}`}>
            <div className="w-full py-2 hidden sm:flex justify-center items-center h-10 sm:font-medium text-white bg-gradient-to-l from-my/60 to-my2">
                <p className="text-xs sm:text-sm">Utilizar como barra de anúncios para promoções e eventos.</p>
            </div>
            <img src="./images/logo.png" alt="" className="block sm:hidden absolute top-4 left-4 w-8 h-8" />
            <div className="absolute top-5 right-4 w-[24px] h-[24px] sm:hidden flex flex-col gap-3 z-50 cursor-pointer" onClick={() => setNavbar(!navbar)}>
                <span className="rounded-full absolute top-[0px] bg-white/80 sm:bg-white/60 w-full h-[1.5px]"></span>
                <span className="rounded-full absolute top-[6px] bg-white/80 sm:bg-white/60 w-full h-[2px]"></span>
                <span className="rounded-full absolute top-[13px] bg-white/80 sm:bg-white/60 w-full h-[1.5px]"></span>
            </div>
            <div className={`transition absolute top-0 sm:relative w-full h-screen sm:h-full bg-my/95 sm:bg-transparent sm:max-w-5xl flex flex-col sm:flex-row sm:items-center gap-6 px-4 sm:px-0 py-4 ${navbar ? 'translate-x-0 sm:translate-x-0' : 'translate-x-[100%] sm:translate-x-0'}`}>
                <img src="./images/logo.png" alt="" className="h-8 w-8 z-50" />
                <ul className="flex flex-col sm:flex-row gap-4">
                    <MyLink letterColor={letterColor} href="/">Início</MyLink>
                    <MyLink letterColor={letterColor} href="/servicos">Serviços</MyLink>
                    <MyLink letterColor={letterColor} href="/simulado">Simulado</MyLink>
                    <MyLink letterColor={letterColor} href="/novidades">Novidades</MyLink>
                    <MyLink letterColor={letterColor} href="/contato">Entrar em contato</MyLink>
                </ul>
            </div>
        </nav>
    )
}