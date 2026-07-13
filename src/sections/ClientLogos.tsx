import { useRef } from 'react'
import { useScrollTrigger } from '../hooks/useScrollTrigger'

const clients = [
  { name: 'Сбербанк', logo: '/assets/logo-sberbank.png' },
  { name: 'Яндекс', logo: '/assets/logo-yandex.png' },
  { name: 'Альфа-Банк', logo: '/assets/logo-third.png' },
]

export default function ClientLogos() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useScrollTrigger([sectionRef], { y: 20, duration: 0.6 })

  return (
    <section className="bg-dark-bg py-8 md:py-12 border-y border-white/5">
      <div ref={sectionRef} className="content-max">
        <p className="text-center text-xs text-text-gray mb-6 label-text">
          здесь и далее — компании, с кем работали
        </p>
        <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          {clients.map((client) => (
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              className="h-8 md:h-10 w-auto opacity-55 grayscale brightness-150 hover:opacity-90 hover:grayscale-0 transition-all duration-300"
            />
          ))}
          <div className="h-8 md:h-10 flex items-center">
            <span className="text-text-gray text-sm font-body italic">
              + другие ТОП-компании
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
