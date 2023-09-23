interface TextProps {
    topTitle: string
    title: string
}

export default function Text({ title, topTitle }: TextProps) {
    return (
        <div className="flex items-start flex-col">
            <h5 className="text-my sm:text-sm">{topTitle}</h5>
            <h3 className="font-semibold text-2xl sm:text-4xl pb-2 tracking-wider">{title}</h3>
            <div className="h-1 w-1/4 border-b-[3px] border-my border-dashed"></div>
        </div>
    )
}