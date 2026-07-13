import { useRef } from 'react'
import { Calendar, Camera, TrendingUp } from 'lucide-react'
import { useScrollTrigger } from '../hooks/useScrollTrigger'

const phases = [
  {
    icon: Calendar,
    label: 'ДО ВЫСТАВКИ',
    title: 'больше целевых посетителей на стенд',
    text: 'Видео-анонсы, приглашения от руководителей, реклама в социальных сетях.',
  },
  {
    icon: Camera,
    label: 'ВО ВРЕМЯ ВЫСТАВКИ',
    title: 'живое доказательство для тех, кто ещё сомневается',
    text: 'Интервью с руководством и представителями, отзывы клиентов, демонстрация продукта в моменте.',
  },
  {
    icon: TrendingUp,
    label: 'ПОСЛЕ И ВНЕ ВЫСТАВКИ',
    title: 'лиды, имидж и напоминание о выставке',
    text: 'Кейсы с цифрами, бренд-фильмы, продуктовые ролики, вертикальный контент для соц.сетей',
  },
]

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useScrollTrigger([sectionRef], { y: 40, duration: 0.8 })
  useScrollTrigger([cardsRef], { y: 30, duration: 0.6, stagger: 0.2 })

  return (
    <section className="bg-dark-bg section-padding relative overflow-hidden">
      {/* Gray pulse pattern background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/pattern-of-circle-gray.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="content-max relative z-10">
        <div ref={sectionRef} className="text-center mb-12 md:mb-16">
          <span className="eyebrow mb-4 block">ПРОЦЕСС</span>
          <h2 className="heading-2 text-white max-w-[800px] mx-auto">
            Работаем на результат до, во время и после выставки
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-[1px] bg-white/10" />

          {phases.map((phase) => (
            <div key={phase.label} className="text-center md:text-left">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-green-brand/25 border border-green-brand/50 flex items-center justify-center mx-auto md:mx-0 mb-6 relative z-10">
                <phase.icon className="w-7 h-7 text-green-brand" />
              </div>

              {/* Label */}
              <span className="eyebrow text-[10px] mb-3 block">{phase.label}</span>

              {/* Title */}
              <h3 className="heading-3 text-white mb-3 text-lg md:text-xl">
                {phase.title}
              </h3>

              {/* Description */}
              <p className="body-text text-text-gray">{phase.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
