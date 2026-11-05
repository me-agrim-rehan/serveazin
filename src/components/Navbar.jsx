
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { name: 'Cybersecurity', path: '/services/cybersecurity' },
  { name: 'Digital Marketing', path: '/services/digital-marketing' },
  { name: 'Software & SaaS', path: '/services/software-saas' },
  { name: 'IT Infrastructure & Networking', path: '/services/it-infrastructure' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeMenus = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenus}
          className="text-2xl font-bold tracking-wide text-[#002652]"
        >
          SERVEAZIN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium text-[#002652] md:flex">

          <Link to="/" className="transition hover:text-[#2563EB]">
            Home
          </Link>

          <Link to="/about" className="transition hover:text-[#2563EB]">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1 transition hover:text-[#2563EB]"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-10 w-64 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-3 transition hover:bg-blue-50 hover:text-[#2563EB]"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/products" className="transition hover:text-[#2563EB]">
            Products
          </Link>
        </div>

        {/* Contact CTA */}
        <Link
          to="/contact"
          className="hidden rounded-md bg-[#2563EB] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#002652] md:inline-flex"
        >
          Let's Talk Business
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-[#002652] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-gray-100 px-6 pb-6 pt-5 font-medium text-[#002652] md:hidden">

          <Link to="/" onClick={closeMenus}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenus}>
            About Us
          </Link>

          {/* Mobile Services */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
            className="flex items-center justify-between"
          >
            Services
            <ChevronDown
              size={16}
              className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {servicesOpen && (
            <div className="flex flex-col gap-4 border-l-2 border-[#2563EB] pl-4 text-sm text-gray-600">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  onClick={closeMenus}
                  className="transition hover:text-[#2563EB]"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}

          <Link to="/products" onClick={closeMenus}>
            Products
          </Link>

          <Link
            to="/contact"
            onClick={closeMenus}
            className="font-semibold text-[#2563EB]"
          >
            Let's Talk Business
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
