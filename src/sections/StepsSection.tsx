import { useRef } from 'react'
import { Phone, MessageSquare, FileCheck, ThumbsUp } from 'lucide-react'
import { useScrollTrigger } from '../hooks/useScrollTrigger'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Оставьте заявку или позвоните нам',
    description: 'Заполните короткую форму или свяжитесь напрямую — мы на связи.',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Свяжемся с вами и обсудим выставку',
    description: 'За 15 минут разберём вашу задачу, сроки и ожидания от контента.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Предложим 1–2 варианта под ваш случай',
    description: 'Подготовим контент-план и смету, адаптированные под ваш бюджет.',
  },
  {
    number: '04',
    icon: ThumbsUp,
    title: 'Если не подойдёт — дадим рекомендации',
    description: 'Даже если мы не сработаемся, вы получите экспертные советы по съёмке.',
  },
]

export default function StepsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useScrollTrigger([sectionRef], { y: 40, duration: 0.8 })
  useScrollTrigger([stepsRef], { y: 30, duration: 0.6, stagger: 0.15 })

  return (
    <section className="bg-light-gray section-padding" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="content-max">
        <div ref={sectionRef} className="text-center mb-12 md:mb-16">
          <span className="eyebrow mb-4 block text-green-brand">ШАГИ</span>
          <h2 className="heading-2 text-dark-bg">Что делать дальше?</h2>
        </div>

        <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-brand flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-green-brand/20  font-bold text-4xl">
                  {step.number}
                </span>
              </div>
              <h3 className=" font-semibold text-dark-bg text-lg mb-2">
                {step.title}
              </h3>
              <p className="body-text text-dark-bg/60 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
