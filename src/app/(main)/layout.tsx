import { InfoBar } from "@/components/layout"
import { Sidebar } from "@/components/layout"
import React from "react"

type Props = {
  children: React.ReactNode
}

/**
 * Renders the layout component
 *
 * @param children: React.ReactNode - The children to render
 * @returns React.FC<Props> - The layout component
 */
export default function Layout({ children }: Props) {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />

      <div className="w-full">
        <InfoBar />
        {children}
      </div>
    </div>
  )
}
