"use client"

import React, { useRef, useCallback, useMemo, useState, useEffect } from "react"
import { useScroll, useTransform } from "framer-motion"
import { MOBILE_BREAKPOINT } from "@/utils"
import { Header } from "../generic/scroll-container/header"
import { Card } from "../generic/scroll-container/card"

type ContainerScrollProps = {
  children: React.ReactNode
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className="h-[80rem] flex items-center justify-center relative p-20"
      ref={containerRef}
    >
      <div
        className="py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} children={children} />
        <Card rotate={rotate} scale={scale} />
      </div>
    </div>
  )
}
