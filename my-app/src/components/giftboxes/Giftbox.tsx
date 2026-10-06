import type { CSSProperties } from "react"

export type GiftboxVariant = "vertical" | "cross" | "plain"

export interface GiftboxPalette {
  body: string
  lid: string
  ribbon: string
  bow: string
}

export interface GiftboxProps {
  /** Festive colors referenced from App.css custom properties */
  palette: GiftboxPalette
  /** Ribbon layout: vertical band, crossed bands, or bow only */
  variant: GiftboxVariant
  /** Rendered width in pixels; height follows the 100x110 viewBox ratio */
  size: number
  /** Rotation in degrees around the bottom center of the box */
  rotation?: number
  /** Small horizontal offset used to scatter boxes inside a cluster */
  offsetX?: number
  /** Small vertical offset used to scatter boxes inside a cluster */
  offsetY?: number
  /** Stacking order inside the overlapping cluster heap */
  zIndex?: number
  style?: CSSProperties
}

/**
 * Presentational inline-SVG gift box. All colors come from the holiday
 * palette so the boxes match the baubles in the header. The shared “Open me!”
 * hint bubble lives on the surrounding cluster, not on individual boxes.
 */
const Giftbox = ({
  palette,
  variant,
  size,
  rotation = 0,
  offsetX = 0,
  offsetY = 0,
  zIndex = 1,
  style,
}: GiftboxProps) => {
  return (
    <span
      className="giftbox"
      style={
        {
          width: size,
          height: size * 1.1,
          transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)`,
          "--giftbox-z": zIndex,
          ...style,
        } as CSSProperties
      }
    >
      <svg
        viewBox="0 0 100 110"
        width="100%"
        height="100%"
        aria-hidden="true"
        focusable="false"
      >
        {/* Ground shadow keeps the boxes grounded */}
        <ellipse
          cx="50"
          cy="104"
          rx="33"
          ry="5.5"
          fill="rgba(19, 19, 22, 0.16)"
        />

        {/* Box body and lid */}
        <rect x="16" y="44" width="68" height="58" rx="4" fill={palette.body} />
        <rect x="10" y="30" width="80" height="17" rx="3" fill={palette.lid} />

        {/* Ribbon bands */}
        {variant !== "plain" && (
          <rect
            x="43"
            y="30"
            width="14"
            height="72"
            rx="2"
            fill={palette.ribbon}
          />
        )}
        {variant === "cross" && (
          <rect
            x="16"
            y="70"
            width="68"
            height="12"
            rx="2"
            fill={palette.ribbon}
          />
        )}

        {/* Bow */}
        <path
          d="M43 31 C33 15 19 18 21 29 C23 39 35 42 43 35 Z"
          fill={palette.ribbon}
        />
        <path
          d="M57 31 C67 15 81 18 79 29 C77 39 65 42 57 35 Z"
          fill={palette.ribbon}
        />
        <circle cx="50" cy="31" r="6" fill={palette.bow} />

        {/* Soft highlight for a wrapped-paper feel */}
        <path d="M22 48 L34 48 L22 70 Z" fill="#ffffff" opacity="0.14" />
      </svg>
    </span>
  )
}

export default Giftbox
