'use client'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const useScroll = () => {
  const [ screenWidth, setScreenWidth ] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)

  if (typeof window !== 'undefined') {
    useEffect(() => {
      setScreenWidth(window.screen.width)
      const handleScroll = () => {
        setScrollPosition(window.scrollY)
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
      
    }, [])
  }

  const router = usePathname()

  if (typeof window !== 'undefined') {
    useEffect(() => {
      setScreenWidth(window.screen.width)
    }, [])
  }

  const threshold = 400
  let backgroundColor = ''
  let letterColor = 'text-white/80'
  if (screenWidth > 450) {
    if (router === '/') {
      letterColor = scrollPosition + 240 >= threshold ? "text-zinc-600" : "text-white"
    } else {
      letterColor = "text-zinc-600"
    }
    backgroundColor = scrollPosition + 240 >= threshold ? "bg-white border-b border-zinc-300" : "transparent"
  } else {
    backgroundColor = "bg-my border-b border-zinc-300"
  }
  return {
    backgroundColor,
    letterColor
  }
}

export default useScroll
