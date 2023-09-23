import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface TemplateProps {
    title: string
    children: ReactNode
}

export default function Template({ title, children }: TemplateProps) {
    return (
        <div>
            <Header title={title} />
            <main className="bg-zinc-50">
                {children}
            </main>
            <Footer />
        </div>
    )
}