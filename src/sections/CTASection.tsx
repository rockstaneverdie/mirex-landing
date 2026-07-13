import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useScrollTrigger } from '../hooks/useScrollTrigger'

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useScrollTrigger([sectionRef], { y: 40, duration: 0.8 })
  useScrollTrigger([contentRef], { y: 30, duration: 0.7, stagger: 0.1 })

  return (
    <section
      id="cta"
      className="bg-dark-bg section-padding relative overflow-hidden"
      style={{ paddingTop: '160px', paddingBottom: '160px' }}
    >
      {/* Background lens image with parallax */}
      <div
        className="absolute inset-0 pointer-events-none z-[0] opacity-30"
        style={{
          backgroundImage: 'url(/assets/background-img.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'rgba(13, 8, 2, 0.82)',
        }}
      />

      <div className="content-max relative z-10">
        <div ref={sectionRef} className="text-center max-w-[800px] mx-auto">
          <h2 className="heading-2 text-white mb-6 max-w-[700px] mx-auto">
            Начните получать больше отдачи от каждой выставки
          </h2>
          <p className="body-large text-text-gray mb-10 max-w-[560px] mx-auto">
            Расскажите о ближайшем мероприятии — предложим пакет и смету за
            15-минутный звонок, без обязательств на этом этапе.
          </p>
          <div ref={contentRef} className="flex flex-col items-center gap-6">
            <button className="pill-button-primary text-sm md:text-base px-10 py-4 gap-3">
              <span>ОБСУДИТЬ ПРОЕКТ</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#"
              className="flex items-center gap-2 text-text-gray hover:text-green-brand transition-colors duration-200 body-text"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.301.48-.428-.009-1.252-.242-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.099.154.232.17.325.015.093.034.305.019.471z" />
              </svg>
              Или напишите нам в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
