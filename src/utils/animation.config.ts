import { useTransform, useSpring, MotionValue } from "framer-motion"

/**
 * Spring configuration for the parallax animations
 */
export const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

/**
 * Parallax animations for the scroll container
 *
 * @param scrollYProgress: MotionValue<number> - The scroll progress value
 * @returns Object - The parallax animations
 */
export const useParallaxAnimations = (scrollYProgress: MotionValue<number>) => {
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  )

  return {
    translateX,
    translateXReverse,
    rotateX,
    opacity,
    rotateZ,
    translateY,
  }
}
