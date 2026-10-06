import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import Giftbox, { type GiftboxPalette, type GiftboxVariant } from "./Giftbox"
import "./GiftboxCluster.css"

export type ClusterCorner = "top-left" | "top-right"

export type GiftboxMessageKey =
  | "homepage.giftboxes.1"
  | "homepage.giftboxes.2"
  | "homepage.giftboxes.3"
  | "homepage.giftboxes.4"
  | "homepage.giftboxes.5"
  | "homepage.giftboxes.6"
  | "homepage.giftboxes.7"
  | "homepage.giftboxes.8"

export interface GiftboxClusterProps {
  /** 1-based article number, also used as the deterministic random seed */
  articleIndex: number
  /** Corner of the parent article the cluster is anchored to */
  corner: ClusterCorner
  /** i18next key holding the personal easter egg for this article */
  messageKey: GiftboxMessageKey
}

interface ClusterBox {
  size: number
  rotation: number
  offsetX: number
  offsetY: number
  zIndex: number
  palette: GiftboxPalette
  variant: GiftboxVariant
}

// Holiday palettes referencing the festive custom properties in App.css
const GIFTBOX_PALETTES: GiftboxPalette[] = [
  {
    body: "var(--holiday-red)",
    lid: "var(--holiday-red-deep)",
    ribbon: "var(--holiday-cream)",
    bow: "var(--holiday-gold)",
  },
  {
    body: "var(--holiday-green)",
    lid: "var(--holiday-green-deep)",
    ribbon: "var(--holiday-cream)",
    bow: "var(--holiday-gold)",
  },
  {
    body: "var(--holiday-gold)",
    lid: "var(--holiday-gold-deep)",
    ribbon: "var(--holiday-red)",
    bow: "var(--holiday-cream)",
  },
  {
    body: "var(--holiday-red-deep)",
    lid: "var(--holiday-red)",
    ribbon: "var(--holiday-silver)",
    bow: "var(--holiday-cream)",
  },
  {
    body: "var(--holiday-green-deep)",
    lid: "var(--holiday-green)",
    ribbon: "var(--holiday-gold)",
    bow: "var(--holiday-cream)",
  },
  {
    body: "var(--holiday-cream)",
    lid: "var(--holiday-gold)",
    ribbon: "var(--holiday-red)",
    bow: "var(--holiday-green)",
  },
]

const GIFTBOX_VARIANTS: GiftboxVariant[] = ["vertical", "cross", "plain"]

/**
 * Small deterministic PRNG (linear congruential generator) seeded from the
 * article index so every article keeps the exact same cluster layout across
 * re-renders and language changes.
 */
const createSeededRandom = (seed: number) => {
  let state = seed % 233280

  return () => {
    state = (state * 9301 + 49297) % 233280
    return state / 233280
  }
}

const createBoxes = (articleIndex: number): ClusterBox[] => {
  const random = createSeededRandom(articleIndex * 7919 + 104729)
  const count = 3 + Math.floor(random() * 3) // 3-5 boxes per cluster

  return Array.from({ length: count }, (_, index) => {
    const palette =
      GIFTBOX_PALETTES[Math.floor(random() * GIFTBOX_PALETTES.length)]
    const variant =
      GIFTBOX_VARIANTS[Math.floor(random() * GIFTBOX_VARIANTS.length)]

    return {
      size: 40 + random() * 40, // 40-80px on desktop
      rotation: (random() - 0.5) * 34, // -17deg - 17deg
      offsetX: (random() - 0.5) * 26,
      offsetY: (random() - 0.5) * 20,
      zIndex: count - index,
      palette,
      variant,
    }
  })
}

/**
 * Grouped cluster of 3-5 inline-SVG gift boxes anchored to a corner of an
 * article. Scrolling adds a smooth parallax drift plus a velocity-driven
 * spring wobble so the boxes feel like they bounce along with the page.
 * Clicking (or pressing Enter/Space on) the cluster toggles a small popover
 * with a personal developer easter egg. All motion is skipped for users who
 * prefer reduced motion.
 */
const GiftboxCluster = ({
  articleIndex,
  corner,
  messageKey,
}: GiftboxClusterProps) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  const clusterRef = useRef<HTMLDivElement>(null)
  const boxes = useMemo(() => createBoxes(articleIndex), [articleIndex])

  const { scrollY, scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const velocity = useVelocity(scrollY)
  const wobble = useTransform(velocity, [-5000, 5000], [-15, 15])
  const springWobble = useSpring(wobble, { stiffness: 300, damping: 20 })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Close the popover when clicking outside of the cluster or pressing Escape
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (
        clusterRef.current &&
        !clusterRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const toggleTooltip = () => setIsOpen((previous) => !previous)
  const buttonProps = {
    type: "button" as const,
    className: "giftbox-cluster__button",
    "aria-label": t("homepage.giftboxes.label"),
    "aria-expanded": isOpen,
    onClick: toggleTooltip,
  }

  const boxElements = boxes.map((box, index) => (
    <Giftbox key={index} {...box} />
  ))

  // Shared “Open me!” hint bubble, rendered once per cluster. It lives inside
  // the button so it rides along with the wobble animation, while CSS disables
  // pointer events so the button still receives every click and key press.
  const buttonChildren = (
    <>
      <span className="giftbox-cluster__boxes">{boxElements}</span>
      <span
        className={`giftbox-cluster__bubble${
          isOpen ? " giftbox-cluster__bubble--hidden" : ""
        }`}
        aria-hidden="true"
      >
        {t("homepage.giftboxes.hint")}
      </span>
    </>
  )

  const content = (
    <>
      {prefersReducedMotion ? (
        <button {...buttonProps}>{buttonChildren}</button>
      ) : (
        <motion.button {...buttonProps} style={{ rotate: springWobble }}>
          {buttonChildren}
        </motion.button>
      )}
      {isOpen && (
        <div
          className="giftbox-cluster__tooltip"
          role="dialog"
          aria-label={t("homepage.giftboxes.title")}
          aria-live="polite"
        >
          <span className="giftbox-cluster__tooltip-title">
            {t("homepage.giftboxes.title")}
          </span>
          <p>{t(messageKey)}</p>
        </div>
      )}
    </>
  )

  const className = `giftbox-cluster giftbox-cluster--${corner}`

  if (prefersReducedMotion) {
    return (
      <div ref={clusterRef} className={className}>
        {content}
      </div>
    )
  }

  return (
    <motion.div ref={clusterRef} className={className} style={{ y: parallaxY }}>
      {content}
    </motion.div>
  )
}

export default GiftboxCluster
