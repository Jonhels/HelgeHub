import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import "./Header.css"
import type { Dimensions } from "../../types/components"

// Logo is served from the public folder root by Vite
const Jacke = "/Jacke.svg"

// Utility to generate random values
const randomValue = (min: number, max: number): number =>
  Math.random() * (max - min) + min

interface ParticleProps {
  headerWidth: number
  headerHeight: number
  index: number
  delay: number
}

interface BaublePalette {
  body: string
  accent: string
  metal: string
  glow: string
}

// Holiday palettes reference the festive custom properties in App.css
const BAUBLE_PALETTES: BaublePalette[] = [
  {
    body: "var(--holiday-red)",
    accent: "var(--holiday-gold)",
    metal: "var(--holiday-gold)",
    glow: "var(--holiday-red)",
  },
  {
    body: "var(--holiday-red-deep)",
    accent: "var(--holiday-cream)",
    metal: "var(--holiday-silver)",
    glow: "var(--holiday-red)",
  },
  {
    body: "var(--holiday-green)",
    accent: "var(--holiday-gold)",
    metal: "var(--holiday-gold)",
    glow: "var(--holiday-green)",
  },
  {
    body: "var(--holiday-green-deep)",
    accent: "var(--holiday-cream)",
    metal: "var(--holiday-silver)",
    glow: "var(--holiday-green)",
  },
  {
    body: "var(--holiday-gold)",
    accent: "var(--holiday-red)",
    metal: "var(--holiday-gold-deep)",
    glow: "var(--holiday-gold)",
  },
  {
    body: "var(--holiday-gold-deep)",
    accent: "var(--holiday-green)",
    metal: "var(--holiday-silver)",
    glow: "var(--holiday-gold)",
  },
]

type BaubleVariant = "stripes" | "dots" | "swirl" | "snowflake" | "plain"

const BAUBLE_VARIANTS: BaubleVariant[] = [
  "stripes",
  "dots",
  "swirl",
  "snowflake",
  "plain",
]

const pickRandom = <T,>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)]

interface BaubleParticleProps extends ParticleProps {
  index: number
}

/**
 * Detailed inline SVG Christmas bauble. Every instance gets its own size,
 * palette, pattern and slow floating animation so the particle field feels
 * varied without introducing any new dependencies.
 */
const BaubleParticle = ({
  headerWidth,
  headerHeight,
  index,
  delay,
}: BaubleParticleProps) => {
  const size = randomValue(22, 50)
  const palette = pickRandom(BAUBLE_PALETTES)
  const variant = pickRandom(BAUBLE_VARIANTS)
  const sway = randomValue(8, 22) * (Math.random() < 0.5 ? -1 : 1)
  const shineId = `bauble-shine-${index}`

  return (
    <motion.div
      className="particle bauble"
      style={{ width: size, height: size * 1.2 }}
      initial={{
        x: randomValue(0, headerWidth), // Initial x position spans the width
        y: randomValue(0, headerHeight), // Initial y position spans the height
        opacity: 0,
      }}
      animate={{
        x: randomValue(-headerWidth, headerWidth), // Float across the header
        y: randomValue(-headerHeight, headerHeight),
        opacity: [0, 0.95, 0.95, 0], // Fade in quickly, hold, then fade out
        rotate: [0, sway, 0], // Gentle pendulum sway
      }}
      transition={{
        duration: randomValue(25, 35), // Slower, calmer drift than the old dots
        repeat: Infinity,
        ease: "easeInOut",
        delay, // Stagger the initial reveal across the particle field
        times: [0, 0.03, 0.97, 1], // Reach full opacity within ~3% of the loop
      }}
    >
      <svg
        viewBox="0 0 100 120"
        width="100%"
        height="100%"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id={shineId} cx="32%" cy="28%" r="72%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft festive glow behind the ornament */}
        <circle
          cx="50"
          cy="68"
          r="45"
          style={{ fill: palette.glow }}
          opacity="0.16"
        />

        {/* Hanger, loop and cap */}
        <line
          x1="50"
          y1="2"
          x2="50"
          y2="9"
          style={{ stroke: palette.metal }}
          strokeWidth="2.5"
        />
        <circle
          cx="50"
          cy="14"
          r="6"
          fill="none"
          style={{ stroke: palette.metal }}
          strokeWidth="3"
        />
        <rect
          x="40"
          y="20"
          width="20"
          height="14"
          rx="3"
          style={{ fill: palette.metal }}
        />

        {/* Bauble body */}
        <circle cx="50" cy="68" r="40" style={{ fill: palette.body }} />

        {variant === "stripes" && (
          <g
            style={{ stroke: palette.accent }}
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.9"
          >
            <line x1="19" y1="48" x2="81" y2="48" />
            <line x1="13" y1="62" x2="87" y2="62" />
            <line x1="13" y1="76" x2="87" y2="76" />
            <line x1="20" y1="90" x2="80" y2="90" />
            <line x1="30" y1="101" x2="70" y2="101" />
          </g>
        )}

        {variant === "dots" && (
          <g style={{ fill: palette.accent }} opacity="0.9">
            <circle cx="36" cy="48" r="6" />
            <circle cx="63" cy="43" r="4.5" />
            <circle cx="50" cy="64" r="6.5" />
            <circle cx="32" cy="78" r="5" />
            <circle cx="66" cy="83" r="6" />
            <circle cx="50" cy="100" r="4.5" />
          </g>
        )}

        {variant === "swirl" && (
          <path
            d="M50 32 C70 40 76 60 64 74 C55 84 39 83 33 71 C28 61 37 51 47 54 C55 56 57 66 50 71"
            fill="none"
            style={{ stroke: palette.accent }}
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.9"
          />
        )}

        {variant === "snowflake" && (
          <g
            style={{ stroke: palette.accent }}
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.9"
          >
            <line x1="50" y1="42" x2="50" y2="94" />
            <line x1="27" y1="55" x2="73" y2="81" />
            <line x1="73" y1="55" x2="27" y2="81" />
            <circle cx="50" cy="68" r="5" style={{ fill: palette.accent }} />
          </g>
        )}

        {/* Glass shine */}
        <circle cx="50" cy="68" r="40" fill={`url(#${shineId})`} />
        <ellipse
          cx="34"
          cy="50"
          rx="9"
          ry="13"
          fill="#ffffff"
          opacity="0.25"
          transform="rotate(-28 34 50)"
        />
      </svg>
    </motion.div>
  )
}

const Particle = ({
  headerWidth,
  headerHeight,
  index,
  delay,
}: ParticleProps) => {
  const isLogo = Math.random() < 0.05 // 5% chance of being a logo particle

  if (!isLogo) {
    return (
      <BaubleParticle
        headerWidth={headerWidth}
        headerHeight={headerHeight}
        index={index}
        delay={delay}
      />
    )
  }

  const size = randomValue(5, 15) // Random size

  return (
    <motion.img
      src={Jacke}
      alt="Logo Particle"
      className="particle"
      style={{
        width: size * 3, // Slightly larger for visibility
        height: size * 3,
        borderRadius: "50%",
      }}
      initial={{
        x: randomValue(0, headerWidth), // Initial x position spans the width
        y: randomValue(0, headerHeight), // Initial y position spans the height
        opacity: 0,
      }}
      animate={{
        x: randomValue(-headerWidth, headerWidth), // Move particles randomly in width
        y: randomValue(-headerHeight, headerHeight), // Move particles randomly in height
        opacity: [0, 1, 1, 0], // Fade in quickly, hold, then fade out
      }}
      transition={{
        duration: randomValue(25, 35), // Random animation duration
        repeat: Infinity, // Infinite loop
        ease: "easeInOut",
        delay, // Stagger the initial reveal across the particle field
        times: [0, 0.03, 0.97, 1], // Reach full opacity within ~3% of the loop
      }}
    />
  )
}

const Header = () => {
  const { t } = useTranslation()
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [particleKey, setParticleKey] = useState<number>(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      setParticleKey((prevKey) => prevKey + 1)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="header">
      {!prefersReducedMotion && (
        <div className="headerParticles" key={particleKey}>
          {Array.from({ length: 100 }).map((_, index) => (
            <Particle
              key={index}
              index={index}
              headerWidth={dimensions.width}
              headerHeight={dimensions.height}
              delay={index * 0.015} // Stagger the field over ~1.5s
            />
          ))}
        </div>
      )}
      <div className="headerInformation">
        <h1 className="headerInformation__title">
          {t("header.title")}
        </h1>
        <p className="headerInformation__subtitle">
          {t("header.subtitle")}
        </p>
      </div>
      <div className="headerContactWrapper">
        <div className="headerContact">
          <p className="headerContact__text">
            {t("header.description")}
          </p>
          <a
            className="headerContact__link"
            href="mailto:jon.helge@skjaerstein.com"
          >
            {t("header.contactCta")}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
