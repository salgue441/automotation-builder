"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState, useRef, useMemo, useCallback } from "react"
import Image from "next/image"

type Direction = "left" | "right"
type Speed = "slow" | "medium" | "fast"

type InfiniteMovingCardProps = {
  items: { href: string }[]
  direction?: Direction
  speed?: Speed
  pauseOnHover?: boolean
  className?: string
}

const speedMap: Record<Speed, string> = {
  fast: "20s",
  medium: "40s",
  slow: "80s",
}

export const InfiniteMovingCard: React.FC<InfiniteMovingCardProps> = ({
  items,
  direction = "left",
  speed = "medium",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState<boolean>(false)

  const duplicateItems = useMemo(() => [...items, ...items], [items])
  const setContainerProperties = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      )
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed]
      )
    }
  }, [direction, speed])

  useEffect(() => {
    setContainerProperties()
    setStart(true)
  }, [setContainerProperties])

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicateItems.map((item, idx) => (
          <Image
            width={170}
            height={1}
            src={item.href}
            alt={`Image ${idx}`}
            className="relative rounded-2xl object-contain opacity-50"
            key={`${item.href}-${idx}`}
          />
        ))}
      </ul>
    </div>
  )
}
