import { useRef } from 'react'

export default function HeroSection() {
  const scrollHintRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="hero"
      className="relative w-full bg-dark-bg overflow-hidden"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Background lens image */}
      <div
        className="absolute inset-0 pointer-events-none z-[0]"
        style={{
          backgroundImage: 'url(/assets/background-img.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(13, 8, 2, 0.60) 0%, rgba(13, 8, 2, 0.85) 60%, #0D0802 100%)',
        }}
      />

      {/* Hero Text Content */}
      <div className="relative z-[10] h-full flex flex-col justify-between pointer-events-none">
        {/* Top spacer for nav */}
        <div className="h-20 md:h-24" />

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center px-5 text-center">
          {/* Green brand accent line */}
          <div className="w-12 h-[2px] bg-green-brand mb-6 md:mb-8" />

          <h1 className="heading-1 text-white max-w-[900px] mb-6 drop-shadow-lg">
            Выжмите из выставки{' '}
            <span className="text-green-brand">максимум</span> — а не только
            3&nbsp;дня внимания
          </h1>
          <p className="body-large text-text-gray max-w-[600px] mb-10">
            Вы уже вложились в стенд, команду и логистику. Мы делаем так, чтобы
            это вложение работало на вас месяцами после закрытия выставки
          </p>
          <div className="flex flex-wrap gap-4 justify-center pointer-events-auto">
            <a
              href="#cta"
              className="pill-button-primary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Обсудить проект
            </a>
            <a
              href="#cases"
              className="pill-button-outline"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Смотреть кейсы
            </a>
          </div>
        </div>

        {/* Bottom: Scroll hint */}
        <div className="flex flex-col items-center pb-8">
          <div
            ref={scrollHintRef}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative w-[1px] h-12 bg-light-gray/30 overflow-hidden">
              <div className="scroll-hint-circle absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-light-gray" />
            </div>
            <span className="text-xs text-text-gray font-body">Листайте вниз</span>
          </div>
        </div>
      </div>
    </section>
  )
}
