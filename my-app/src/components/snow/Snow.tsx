import { type CSSProperties, useEffect, useState } from "react"
import "./Snow.css"

const FLAKE_COUNT = 70

const randomValue = (min: number, max: number): number =>
  Math.random() * (max - min) + min

interface Snowflake {
  left: number
  size: number
  duration: number
  delay: number
  drift: number
  opacity: number
}

const createSnowflakes = (): Snowflake[] =>
  Array.from({ length: FLAKE_COUNT }, () => ({
    left: randomValue(0, 100),
    size: randomValue(6, 18),
    duration: randomValue(9, 22),
    delay: randomValue(0, 20),
    drift: randomValue(-60, 60),
    opacity: randomValue(0.4, 0.8),
  }))

/**
 * Fixed, full-viewport falling-snow overlay. Because it is fixed it keeps
 * snowing while the sticky articles scroll underneath. Snow is skipped
 * entirely for users who prefer reduced motion.
 */
const Snow = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  const [snowflakes] = useState<Snowflake[]>(createSnowflakes)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <div className="snow" aria-hidden="true">
      {snowflakes.map((flake, index) => (
        <span
          key={index}
          className="snowflake"
          style={
            {
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              animationDuration: `${flake.duration}s`,
              animationDelay: `-${flake.delay}s`,
              "--snow-drift": `${flake.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

export default Snow
