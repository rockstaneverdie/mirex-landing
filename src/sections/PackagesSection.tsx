import { useRef } from 'react'
import { Check, Star } from 'lucide-react'
import { useScrollTrigger } from '../hooks/useScrollTrigger'

const packages = [
  {
    name: 'Пакет 1',
    price: 'от 70 000 ₽',
    description: 'Для первого участия в выставке',
    features: [
      'Съёмка на площадке (1 день)',
      '1 отчётный ролик (до 3 мин)',
      'Фотоотчёт (до 50 кадров)',
      'Монтаж и цветокоррекция',
    ],
    highlighted: false,
  },
  {
    name: 'Пакет 2',
    price: 'от 100 000 ₽',
    description: 'Для среднего масштаба',
    features: [
      'Съёмка на площадке (1-2 дня)',
      '2 ролика: отчётный + продуктовый',
      'Вертикальные видео для Reels/Shorts',
      'Фотоотчёт (до 100 кадров)',
      'Моушн-графика и анимация',
    ],
    highlighted: true,
  },
  {
    name: 'Пакет 3',
    price: 'от 150 000 ₽',
    description: 'Полный цикл, все 3 этапа',
    features: [
      'Предвыставочный контент (анонсы)',
      'Съёмка на площадке (2-3 дня)',
      'Полный пакет роликов (4+)',
      'Интервью и отзывы клиентов',
      'Бренд-фильм и кейс с цифрами',
      'Адаптация под все каналы',
    ],
    highlighted: false,
  },
]

export default function PackagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useScrollTrigger([sectionRef], { y: 40, duration: 0.8 })
  useScrollTrigger([cardsRef], { y: 30, duration: 0.6, stagger: 0.15 })

  return (
    <section className="bg-dark-bg section-padding relative overflow-hidden">
      {/* Green pulse pattern */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/pattern-of-circle.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="content-max relative z-10">
        <div ref={sectionRef} className="text-center mb-12 md:mb-16">
          <span className="eyebrow mb-4 block">ПАКЕТЫ</span>
          <h2 className="heading-2 text-white mb-4">
            Три пакета — под разный масштаб участия
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 ${
                pkg.highlighted
                  ? 'bg-green-brand/10 border-2 border-green-brand/40 scale-[1.02] md:scale-[1.03]'
                  : 'card-surface'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-green-brand text-white text-[10px]  font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  <Star className="w-3 h-3" />
                  Рекомендуем
                </div>
              )}

              <div className="mb-6">
                <h3 className="heading-3 text-white text-xl mb-2">{pkg.name}</h3>
                <div className="text-green-brand  font-bold text-2xl md:text-3xl mb-2">
                  {pkg.price}
                </div>
                <p className="body-text text-text-gray text-sm">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <Check className="w-4 h-4 text-green-brand flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`pill-button w-full text-center ${
                  pkg.highlighted ? 'pill-button-primary' : 'pill-button-outline'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Выбрать пакет
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-text-gray body-text mt-8 md:mt-10 max-w-[600px] mx-auto">
          Точная стоимость зависит от масштаба выставки и вашего запроса —
          рассчитаем на созвоне за 15 минут
        </p>
      </div>
    </section>
  )
}
