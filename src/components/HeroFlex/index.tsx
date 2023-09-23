import { ReactNode } from "react"
import Text from "../Text"

interface HeroFlexProps {
    topTitle: string
    mainTitle: string
    children: ReactNode
    imagePath: string
    reverse?: boolean
}

export default function HeroFlex({ children, mainTitle, topTitle, imagePath, reverse }: HeroFlexProps) {
    if (reverse) {
        return (
            <div className={`px-4 sm:px-0 w-full flex sm:grid sm:grid-cols-2 sm:gap-12 ${reverse && 'sm:flex-row-reverse flex-col-reverse'}`}>
                <div className="flex justify-start">
                    <img src={`./images/hero/${imagePath}.png`} alt="" className="w-full sm:w-[488px] sm:h-[392px]" />
                </div>
                <div className="flex flex-col mb-4 sm:mb-0">
                    <Text
                        title={mainTitle}
                        topTitle={topTitle}
                    />
                    <div className="mt-4">
                        {children}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`px-4 sm:px-0 w-full flex flex-col sm:grid sm:grid-cols-2 sm:gap-12 ${reverse && 'flex-row-reverse'}`}>
            <div className="flex flex-col">
                <Text
                    title={mainTitle}
                    topTitle={topTitle}
                />
                <div className="mt-4 text-gray-300">
                    {children}
                </div>
            </div>
            <div className="flex justify-end mt-4 sm:mt-0">
                <img src={`./images/hero/${imagePath}.png`} alt="" className="w-full sm:w-[488px] sm:h-[392px]" />
            </div>
        </div>
    )
}