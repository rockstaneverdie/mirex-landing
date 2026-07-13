import { useRef } from 'react'
import { Play, ArrowUpRight } from 'lucide-react'
import { useScrollTrigger } from '../hooks/useScrollTrigger'

const cases = [
  {
    client: 'Сбербанк',
    event: 'Крупный отраслевой форум',
    tag: 'Финансы',
  },
  {
    client: 'Яндекс',
    event: 'Технологическая конференция',
    tag: 'Технологии',
  },
  {
    client: 'Альфа-Банк',
    event: 'Корпоративное мероприятие',
    tag: 'Банкинг',
  },
]

export default function CasesSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useScrollTrigger([headingRef], { y: 40, duration: 0.8 })
  useScrollTrigger([cardsRef], { y: 30, duration: 0.6, stagger: 0.15 })

  return (
    <section className="bg-dark-bg section-padding relative overflow-hidden">
      {/* Lens background image */}
      <div
        className="absolute inset-0 pointer-events-none z-[0] opacity-35"
        style={{
          backgroundImage: 'url(/assets/background-img.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'rgba(13, 8, 2, 0.80)',
        }}
      />

      <div className="content-max relative z-10">
        {/* Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <span className="eyebrow mb-4 block">КЕЙСЫ</span>
            <h2 className="heading-2 text-white">Наши проекты</h2>
          </div>
          <p className="body-text text-text-gray max-w-[440px]">
            Примеры работ с крупнейшими компаниями — скоро здесь.
          </p>
        </div>

        {/* Case cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((item) => (
            <div
              key={item.client}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: 'rgba(26, 26, 26, 0.7)',
                border: '1px solid rgba(230, 232, 236, 0.08)',
              }}
            >
              {/* Top: video placeholder */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                  style={{
                    backgroundImage: 'url(/assets/background-img.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,8,2,0.3) 0%, rgba(13,8,2,0.85) 100%)' }} />

                {/* Tag */}
                <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-green-brand/20 text-green-brand border border-green-brand/30"
                  style={{ fontFamily: "'Affect', 'Montserrat', sans-serif" }}>
                  {item.tag}
                </span>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-green-brand flex items-center justify-center shadow-lg shadow-green-brand/30">
                    <Play className="w-5 h-5 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Client logo area */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "'Affect', 'Montserrat', sans-serif" }}>
                    {item.client}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Bottom: info */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-base mb-1" style={{ fontFamily: "'Affect', 'Montserrat', sans-serif" }}>
                  {item.event}
                </h3>
                <p className="text-text-gray text-xs mt-2" style={{ fontFamily: "'Century Gothic', 'Josefin Sans', sans-serif" }}>
                  Подробности проекта — скоро
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#cta"
            className="pill-button-outline"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Обсудить ваш проект
          </a>
        </div>
      </div>
    </section>
  )
}
