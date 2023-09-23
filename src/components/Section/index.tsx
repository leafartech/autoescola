import { ReactNode } from "react"

interface SectionProps {
    children: ReactNode
    className?: string
}

export default function Section({ children, className }: SectionProps) {
    return (
        <section className={`w-full flex items-center justify-center ${className}`}>
            <div className="w-full max-w-6xl flex flex-col items-center justify-center">
                {children}
            </div>
        </section>
    )
}