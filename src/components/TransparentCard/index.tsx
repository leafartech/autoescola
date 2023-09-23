interface TransparentCardProps {
    title: string
    text: string
}

export default function TransparentCard({ text, title}: TransparentCardProps) {
    return (
        <div className="bg-[#622909]/60 py-6 sm:py-4 px-8 w-full sm:max-w-[240px] rounded text-center border border-white/20">
            <h4 className="text-white font-medium text-xl tracking-wider">{title}</h4>
            <p className="text-white/80 text-sm">{text}</p>
        </div>
    )
}