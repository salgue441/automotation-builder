import React from "react"

type Props = { children: React.ReactNode }

/**
 * Renders the layout for the auth segment application
 *
 * @param children: React.ReactNode - The children components
 * @returns React.FC - The layout component
 */
const Layout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      {children}
    </div>
  )
}

export default Layout
