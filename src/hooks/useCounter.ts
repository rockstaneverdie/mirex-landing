import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CounterOptions {
  startVal?: number
  endVal: number
  duration?: number
  ease?: string
  onUpdate?: (value: number) => void
}

export function useCounter(
  counterRef: RefObject<HTMLElement | null>,
  options: CounterOptions
) {
  useEffect(() => {
    if (!counterRef.current) return

    const counter = counterRef.current
    const startVal = options.startVal || 0
    const endVal = options.endVal
    const duration = options.duration || 1
    const ease = options.ease || 'none'
    const onUpdate = options.onUpdate

    const val = { value: startVal }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: counter,
          start: 'top 85%',
        },
      })

      tl.to(val, {
        value: endVal,
        duration,
        ease,
        snap: { value: 1 },
        onUpdate: () => {
          if (onUpdate) {
            onUpdate(Math.floor(val.value))
          }

          const formatted = Math.floor(val.value).toLocaleString('ru-RU')
          const zeros =
            formatted.length >= 6
              ? formatted
              : '<span class="num-dimmed">0</span>' + formatted

          counter.innerHTML = `<span class="num-wrap">${zeros}</span><span class="num-suffix">+</span>`
        },
      })
    })

    return () => ctx.revert()
  }, [])
}
