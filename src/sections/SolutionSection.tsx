import { useRef } from 'react'
import {
  Presentation,
  Share2,
  Globe,
  Megaphone,
} from 'lucide-react'
import { useScrollTrigger } from '../hooks/useScrollTrigger'

const benefits = [
  {
    icon: Presentation,
    text: 'отдел продаж получает кейс и цифры для презентации клиентам',
  },
  {
    icon: Share2,
    text: 'маркетинг получает контент для соц.сетей',
  },
  {
    icon: Globe,
    text: 'сайт получает бренд-видео и отзывы клиентов',
  },
  {
    icon: Megaphone,
    text: 'реклама получает продуктовые ролики без отдельной съёмки',
  },
]

export default function SolutionSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useScrollTrigger([headingRef], { y: 40, duration: 0.8 })
  useScrollTrigger([leftRef, rightRef], { y: 30, duration: 0.6, stagger: 0.2 })

  return (
    <section id="services" className="bg-dark-bg section-padding">
      <div className="content-max">
        <div ref={headingRef} className="text-center mb-12 md:mb-16">
          <span className="eyebrow mb-4 block">РЕШЕНИЕ</span>
          <h2 className="heading-2 text-white mb-6">
            Одна съёмка — источник контента на месяцы вперёд
          </h2>
          <p className="body-large text-text-gray max-w-[720px] mx-auto">
            Мы не снимаем «ролик о выставке». Мы собираем комплект контента,
            который расходится по всем информационным и публичным каналам.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left */}
          <div ref={leftRef} className="card-surface">
            <h3 className="heading-3 text-white mb-4">
              За счёт чего это работает лучше, чем разовое видео с выставки?
            </h3>
            <p className="body-text text-text-gray leading-relaxed">
              Один съёмочный день закрывает 3–4 задачи бизнеса, а не просто
              показывает ваше присутствие на выставке. Каждый формат контента
              заточен под конкретный канал коммуникации и целевую аудиторию.
            </p>
          </div>

          {/* Right - Benefits list */}
          <div ref={rightRef} className="space-y-4">
            {benefits.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 p-4 rounded-xl border border-light-subtle hover:border-green-brand/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-green-brand/25 border border-green-brand/45 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-green-brand" />
                </div>
                <p className="body-text text-white/90 pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
