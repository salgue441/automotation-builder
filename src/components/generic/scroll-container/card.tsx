import { memo } from "react"
import { motion, MotionValue } from "framer-motion"
import Image from "next/image"

type CardProps = {
  rotate: MotionValue<number>
  scale: MotionValue<number>
}

/**
 * Card component for the scroll container
 *
 * @param rotate: MotionValue<number> - The rotation value for the card
 * @param scale: MotionValue<number> - The scale value for the card
 * @returns React.FC - The card component
 */
export const Card: React.FC<CardProps> = memo(({ rotate, scale }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl gap-4 overflow-hidden p-4 transition-all">
        <Image
          src="/temp-banner.png"
          fill
          alt="Banner"
          className="object-cover border-8 rounded-2xl"
          priority
        />
      </div>
    </motion.div>
  )
})

Card.displayName = "Card"
