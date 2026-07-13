import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Подход', href: '#approach' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Контакты', href: '#cta' },
]

const socialLinks = [
  {
    name: 'Telegram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.301.48-.428-.009-1.252-.242-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.099.154.232.17.325.015.093.034.305.019.471z" />
      </svg>
    ),
  },
  {
    name: 'VK',
    href: '#',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.136.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.994 4 8.604c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.864 2.49 2.304 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.862c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function FooterSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-bg border-t border-white/5">
      <div className="content-max py-12 md:py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <div>
            <img
              src="/assets/mirex.logo-white.png"
              alt="МИРЭКС"
              className="h-10 w-auto mb-2"
            />
            <p className="text-text-gray text-sm font-body">
              На связи! …и на низком старте!
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="label-text text-white/60 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white/50 hover:text-green-brand transition-colors duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 mb-10 py-6 border-y border-white/5">
          <a
            href="tel:+78000000000"
            className="flex items-center gap-2 text-text-gray hover:text-green-brand transition-colors body-text"
          >
            <Phone className="w-4 h-4" />
            +7 (800) 000-00-00
          </a>
          <a
            href="mailto:info@mirex.pro"
            className="flex items-center gap-2 text-text-gray hover:text-green-brand transition-colors body-text"
          >
            <Mail className="w-4 h-4" />
            info@mirex.pro
          </a>
          <span className="flex items-center gap-2 text-text-gray body-text">
            <MapPin className="w-4 h-4" />
            Москва, РФ
          </span>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="label-text text-text-gray text-[10px]">
            © 2025 MIREX.PROD
          </span>
          <a
            href="#"
            className="label-text text-text-gray text-[10px] hover:text-white transition-colors"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}
