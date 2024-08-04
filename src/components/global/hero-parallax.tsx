"use client"

import React, { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Header } from "../generic/parallax/header"
import { ProductCard } from "../generic/parallax/product-card"
import { useParallaxAnimations } from "@/utils"

type HeroParallaxProps = {
  products: Product[]
}

/**
 * Renders the hero parallax component
 *
 * @param products: Product[] - The product data
 * @returns React.FC<HeroParallaxProps> - The hero parallax component
 */
export const HeroParallax: React.FC<HeroParallaxProps> = ({ products }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const {
    translateX,
    translateXReverse,
    rotateX,
    opacity,
    rotateZ,
    translateY,
  } = useParallaxAnimations(scrollYProgress)

  const [firstRow, secondRow, thirdRow] = [
    products.slice(0, 5),
    products.slice(5, 10),
    products.slice(10, 15),
  ]

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        {[
          { products: firstRow, translate: translateX },
          { products: secondRow, translate: translateXReverse },
          { products: thirdRow, translate: translateX },
        ].map(({ products, translate }, index) => (
          <motion.div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row-reverse space-x-reverse" : "flex-row"
            } space-x-20 mb-20`}
          >
            {products.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={translate}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
