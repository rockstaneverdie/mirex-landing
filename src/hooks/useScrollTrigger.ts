import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollTriggerOptions {
  y?: number
  x?: number
  duration?: number
  delay?: number
  stagger?: number
  ease?: string
  start?: string
  rotateX?: number
}

export function useScrollTrigger(
  refs: RefObject<HTMLElement | HTMLElement[] | null>[],
  options: ScrollTriggerOptions = {}
) {
  useEffect(() => {
    const {
      y = 40,
      x = 0,
      duration = 0.8,
      delay = 0,
      stagger = 0.15,
      ease = 'power3.out',
      start = 'top 75%',
      rotateX = 0,
    } = options

    const ctx = gsap.context(() => {
      refs.forEach((ref) => {
        if (!ref.current) return

        const targets = Array.isArray(ref.current) ? ref.current : [ref.current]
        const validTargets = targets.filter(Boolean)

        if (validTargets.length === 0) return

        const fromVars: gsap.TweenVars = {
          opacity: 0,
          y,
          x,
          duration,
          delay,
          stagger,
          ease,
        }

        if (rotateX) {
          fromVars.rotateX = rotateX
          fromVars.transformPerspective = 1000
        }

        gsap.from(validTargets, {
          scrollTrigger: {
            trigger: validTargets[0],
            start,
            toggleActions: 'play none none none',
          },
          ...fromVars,
        })
      })
    })

    return () => ctx.revert()
  }, [])
}

export function useStaggerReveal(
  containerRef: RefObject<HTMLElement | null>,
  childSelector: string,
  options: ScrollTriggerOptions = {}
) {
  useEffect(() => {
    if (!containerRef.current) return

    const {
      y = 30,
      duration = 0.6,
      stagger = 0.15,
      ease = 'power2.out',
      start = 'top 70%',
    } = options

    const children = containerRef.current.querySelectorAll(childSelector)
    if (children.length === 0) return

    const ctx = gsap.context(() => {
      gsap.from(children, {
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y,
        duration,
        stagger,
        ease,
      })
    })

    return () => ctx.revert()
  }, [])
}
