import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 150, suffix: '+', label: 'выставок в году' },
  { value: 100000, suffix: '+', label: 'посетителей' },
  { value: 50, suffix: '+', label: 'клиентов из ТОП-500' },
]

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const numberRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!numberRef.current) return

    const val = { value: 0 }
    const el = numberRef.current

    const ctx = gsap.context(() => {
      gsap.to(val, {
        value,
        duration: 1.5,
        ease: 'power2.out',
        snap: { value: value > 1000 ? 1000 : 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        onUpdate: () => {
          const formatted =
            value >= 1000
              ? Math.floor(val.value).toLocaleString('ru-RU')
              : Math.floor(val.value).toString()
          el.textContent = formatted + suffix
        },
      })
    })

    return () => ctx.revert()
  }, [value, suffix])

  return (
    <div className="text-center flex-1">
      <div
        ref={numberRef}
        className="stat-number-dark mb-2"
      >
        0{suffix}
      </div>
      <div className="body-text text-dark-bg/80 font-semibold">{label}</div>
    </div>
  )
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="cases" className="bg-light-gray section-padding">
      <div ref={sectionRef} className="content-max">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center w-full md:w-auto">
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
              {i < stats.length - 1 && (
                <div className="hidden md:block w-[1px] h-16 bg-dark-bg/20 ml-8 md:ml-12 lg:ml-16" />
              )}
            </div>
          ))}
        </div>

        {/* Placeholder for future cases */}
        <div className="mt-16 pt-12 border-t border-dark-bg/10">
          <p className="text-center text-text-gray body-text italic">
            Реальные кейсы и цифры результатов — скоро здесь
          </p>
        </div>
      </div>
    </section>
  )
}
