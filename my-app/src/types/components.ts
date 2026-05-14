import type { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

export interface ParticleProps {
  headerWidth: number
  headerHeight: number
}

export interface Dimensions {
  width: number
  height: number
}
