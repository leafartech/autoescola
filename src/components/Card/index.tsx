import { ElementType } from "react"

interface CardProps {
    Icon: ElementType
    title: string
    text: string
    bg?: string
}

export default function Card({ Icon, text, title, bg}: CardProps) {
    return (
        <div className={`flex flex-col shadow-xl rounded py-8 px-6 w-full ${bg ? 'bg' : 'bg-white'}`}>
            <Icon className={`mb-3 w-10 h-10 ${bg ? 'text-white' : 'text-my'}`} />
            <h3 className={`mb-2 text-2xl font-medium ${bg ? 'text-white' : 'text-my'}`}>{title}</h3>
            <p className={`mb-6 ${bg ? 'text-white/80' : 'text-zinc-600'}`}>{text}</p>
            <div className="relative w-full flex justify-start">
                <div className={`absolute w-1/2 h-[2px] ${bg ? 'bg-white' : 'bg-my'}`}></div>
            </div>
        </div>
    )
}