import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollTrigger } from '../hooks/useScrollTrigger'

const preStartQuestions = [
  {
    q: 'Чем вы отличаетесь от конкурентов и от съёмки своими силами?',
    a: 'Мы узкоспециализированы и благодаря многолетнему опыту прекрасно понимаем специфику выставок, поэтому не мешаем на стенде — ни вам общаться с клиентами, ни им — со стендом.',
  },
  {
    q: 'Сколько это стоит?',
    a: 'От 70 000 рублей за пакет, точная сумма зависит от объёма итоговых работ.',
  },
  {
    q: 'Почему вам можно доверять?',
    a: 'Работали с крупнейшими компаниями рынка, [X] лет в выставочной сфере. (TODO: вставить реальные имена клиентов и цифру лет)',
  },
  {
    q: 'Что мне нужно сделать, чтобы начать?',
    a: 'Оставить заявку с датой ближайшей выставки → 15-минутный созвон → контент-план и готовая смета в течение 3 дней. Никаких обязательств на этапе звонка.',
  },
  {
    q: 'Почему стоит решить уже сейчас, а не прямо перед выставкой?',
    a: 'Предвыставочный этап даёт максимальный эффект, если начать хотя бы за 4 недели до открытия — иначе есть риск утонуть в предвыставочной суете и упустить выгоду.',
  },
]

const faqQuestions = [
  {
    q: 'Помогаете ли с идеями и сценариями?',
    a: 'Ответ будет добавлен позже.',
  },
  {
    q: 'Что если у нас нет спикеров?',
    a: 'Ответ будет добавлен позже.',
  },
  {
    q: 'Можно ли выбрать только 1 пакет?',
    a: 'Ответ будет добавлен позже.',
  },
  {
    q: 'Через сколько мы получим готовый материал?',
    a: 'Ответ будет добавлен позже.',
  },
  {
    q: 'Как используется отснятый материал?',
    a: 'Ответ будет добавлен позже.',
  },
]

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-white/5">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className=" font-semibold text-white text-base md:text-lg pr-4 group-hover:text-green-brand transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-green-brand flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '300px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="body-text text-text-gray pb-5 md:pb-6">{answer}</p>
      </div>
    </div>
  )
}

function AccordionGroup({
  title,
  subtitle,
  questions,
}: {
  title: string
  subtitle: string
  questions: { q: string; a: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const groupRef = useRef<HTMLDivElement>(null)

  useScrollTrigger([groupRef], { y: 30, duration: 0.6 })

  return (
    <div ref={groupRef} className="mb-16 md:mb-20">
      <div className="mb-8">
        <span className="eyebrow mb-3 block">{subtitle}</span>
        <h2 className="heading-2 text-white">{title}</h2>
      </div>
      <div>
        {questions.map((item, i) => (
          <AccordionItem
            key={i}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section className="bg-dark-bg section-padding">
      <div className="content-max">
        <AccordionGroup
          subtitle="ВОПРОСЫ"
          title="Вопросы, которые чаще всего задают перед стартом"
          questions={preStartQuestions}
        />
        <AccordionGroup
          subtitle="FAQ"
          title="Часто задаваемые вопросы"
          questions={faqQuestions}
        />
      </div>
    </section>
  )
}
