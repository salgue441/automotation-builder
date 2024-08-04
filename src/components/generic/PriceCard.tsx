import React from "react"
import { CheckIcon } from "lucide-react"
import { CardContainer, CardBody, CardItem } from "@/components/global"

type PriceCardProps = {
  title: string
  price: number
  description: string
  features: string[]
  isHighlighted?: boolean
}

/**
 * Renders the price card component
 *
 * @param title: string - The title of the card
 * @param price: number - The price of the card
 * @param description: string - The description of the card
 * @param features: string[] - The features of the card
 * @param isHighlighted?: boolean - The highlight status of the card
 * @returns React.FC<PriceCardProps> - The price card component
 */
const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  description,
  features,
  isHighlighted = false,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border ${
          isHighlighted ? "dark:border-[#E2CBFF]" : "dark:border-white/[0.2]"
        }`}
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
          <h2 className="text-6xl">${price}</h2>
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
          <ul className="my-4 flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckIcon />
                {feature}
              </li>
            ))}
          </ul>
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Get Started Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default PriceCard
