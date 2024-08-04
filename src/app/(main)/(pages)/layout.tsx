import React from "react"

type Props = { children: React.ReactNode }

/**
 * Renders the layout component
 *
 * @param children: React.ReactNode - The children to render
 * @returns React.FC<Props> - The layout component
 */
export default function Layout({ children }: Props) {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll ">
      {children}
    </div>
  )
}
