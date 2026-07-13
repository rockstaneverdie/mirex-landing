import { useRef } from 'react'
import { X, Check, Minus } from 'lucide-react'
import { useScrollTrigger } from '../hooks/useScrollTrigger'

const rows = [
  {
    criterion: 'Понимание специфики выставок',
    videographer: 'Снимет в своём стиле или «как скажете». Нестабильный результат',
    inhouse: 'Зависит от опыта сотрудника — тоже нестабильно',
    mirex: 'Полный цикл предпродакшна: подготовка, логистика, визуальная и маркетинговая концепция',
  },
  {
    criterion: 'Использование материала',
    videographer: 'Один отчётный ролик',
    inhouse: 'Материалы часто не разбираются',
    mirex: 'Пакет контента под разные задачи — продажи, маркетинг, реклама',
  },
  {
    criterion: 'Стоимость',
    videographer: 'Отдельная смета на каждый формат',
    inhouse: 'Кажется бесплатным, но съедает время команды',
    mirex: 'Понятная стоимость каждого пакета',
  },
  {
    criterion: 'Результат',
    videographer: 'Краткосрочный, заканчивается со сдачей ролика',
    inhouse: 'Ограничен временем и навыками сотрудника',
    mirex: 'Отслеживаемый и оцифрованный результат',
  },
]

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)

  useScrollTrigger([sectionRef], { y: 40, duration: 0.8 })
  useScrollTrigger([tableRef], { y: 30, duration: 0.6 })

  return (
    <section className="bg-dark-bg section-padding">
      <div className="content-max">
        <div ref={sectionRef} className="text-center mb-12 md:mb-16">
          <span className="eyebrow mb-4 block">СРАВНЕНИЕ</span>
          <h2 className="heading-2 text-white">Почему именно мы?</h2>
        </div>

        <div ref={tableRef} className="overflow-x-auto -mx-5 px-5">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="text-text-gray label-text py-3">Критерий</div>
              <div className="text-text-gray label-text py-3 text-center">
                Видеограф
              </div>
              <div className="text-text-gray label-text py-3 text-center">
                Своими силами
              </div>
              <div className="text-green-brand label-text py-3 text-center font-bold">
                МИРЭКС
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.criterion}
                className={`grid grid-cols-4 gap-4 py-5 ${
                  i < rows.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                <div className="text-white  font-semibold text-sm md:text-base flex items-center">
                  {row.criterion}
                </div>
                <div className="text-white/60 body-text text-sm flex items-start gap-2 py-1 px-3 rounded-lg bg-white/[0.02]">
                  <X className="w-4 h-4 text-red-400/60 flex-shrink-0 mt-0.5" />
                  {row.videographer}
                </div>
                <div className="text-white/60 body-text text-sm flex items-start gap-2 py-1 px-3 rounded-lg bg-white/[0.02]">
                  <Minus className="w-4 h-4 text-yellow-400/60 flex-shrink-0 mt-0.5" />
                  {row.inhouse}
                </div>
                <div className="text-white/90 body-text text-sm flex items-start gap-2 py-3 px-4 rounded-lg bg-green-brand/10 border border-green-brand/20">
                  <Check className="w-4 h-4 text-green-brand flex-shrink-0 mt-0.5" />
                  {row.mirex}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
