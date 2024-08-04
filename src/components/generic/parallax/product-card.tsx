import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MotionValue } from "framer-motion"

type ProductCardProps = {
  product: Product
  translate: MotionValue<number>
}

/**
 * Renders the product cards
 *
 * @param product: Product - The product data
 * @param translate: MotionValue<number> - The translation value
 * @returns React.FC<ProductCardProps> - The product card component
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  translate,
}) => (
  <motion.div
    style={{ x: translate }}
    whileHover={{ y: -20 }}
    className="group/product h-96 w-[30rem] relative flex-shrink-0"
  >
    <Link href={product.link} className="block group-hover/product:shadow-2xl">
      <Image
        src={product.thumbnail}
        height={600}
        width={600}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
    </Link>
    <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" />
    <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
      {product.title}
    </h2>
  </motion.div>
)
