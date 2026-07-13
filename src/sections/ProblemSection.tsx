import { useRef } from 'react'
import { Archive, Clock } from 'lucide-react'
import { useScrollTrigger } from '../hooks/useScrollTrigger'

const problems = [
  {
    icon: Archive,
    title: 'Материал есть, но не работает на вас',
    text: 'Сотни фото и видео с площадки обычно оседают в архиве вместо того, чтобы приносить лиды ещё полгода-год.',
  },
  {
    icon: Clock,
    title: 'Внимание есть, пока идёт выставка',
    text: 'После закрытия выставки поток внимания и лидов резко падает, потому что нечем напомнить о себе.',
  },
]

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useScrollTrigger([sectionRef], { y: 40, duration: 0.8 })
  useScrollTrigger([cardsRef], { y: 30, duration: 0.6, stagger: 0.15 })

  return (
    <section id="approach" className="bg-dark-bg section-padding">
      <div className="content-max">
        <div ref={sectionRef} className="text-center mb-12 md:mb-16">
          <span className="eyebrow mb-4 block">ПРОБЛЕМА</span>
          <h2 className="heading-2 text-white max-w-[680px] mx-auto">
            Почему большинство компаний не получают максимум от участия в
            выставках?
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((item) => (
            <div
              key={item.title}
              className="card-surface flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-full bg-green-brand/25 border border-green-brand/40 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-green-brand" />
              </div>
              <h3 className="heading-3 text-white mb-4">{item.title}</h3>
              <p className="body-text text-text-gray">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
