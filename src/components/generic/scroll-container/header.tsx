import { MotionValue, motion } from "framer-motion"
import React, { memo, useContext } from "react"

type HeaderProps = {
  children: React.ReactNode
  translate: MotionValue<number>
}

/**
 * Header component for the scroll container
 *
 * @param children - The children to display in the header
 * @param translate - The translation value for the header
 * @returns React.FC<HeaderProps> - The header component
 */
export const Header: React.FC<HeaderProps> = ({ translate, children }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {children}
    </motion.div>
  )
}

Header.displayName = "Header"
