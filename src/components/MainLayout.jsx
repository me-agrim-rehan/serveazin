
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <footer className="bg-[#002652] px-6 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link to="/" className="text-2xl font-bold tracking-wide">
                SERVEAZIN
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-7 text-white/65">
                Technology, security and innovation — helping businesses
                navigate a connected digital world.
              </p>
              <p className="mt-4 text-sm text-white/65">
                Headquartered in Jammu, India. Serving businesses beyond
                boundaries.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Explore</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li><Link className="transition hover:text-white" to="/">Home</Link></li>
                <li><Link className="transition hover:text-white" to="/about">About us</Link></li>
                <li><Link className="transition hover:text-white" to="/products">Products</Link></li>
                <li><Link className="transition hover:text-white" to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Our services</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li><Link className="transition hover:text-white" to="/services/cybersecurity">Cybersecurity</Link></li>
                <li><Link className="transition hover:text-white" to="/services/digital-marketing">Digital Marketing</Link></li>
                <li><Link className="transition hover:text-white" to="/services/software-saas">Software & SaaS</Link></li>
                <li><Link className="transition hover:text-white" to="/services/it-infrastructure">IT Infrastructure & Networking</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Get in touch</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                <li>
                  <a className="transition hover:text-white" href="mailto:contact@serveazin.com">
                    contact@serveazin.com
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="https://wa.me/919149501021" target="_blank" rel="noreferrer">
                    +91 9149501021
                  </a>
                </li>
                <li>
                  1, 7, Shakti Nagar, Bakshi Nagar,
                  Jammu, Jammu & Kashmir – 180001
                </li>
                <li>Monday–Friday · Until 7:00 PM IST</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Serveazin. All rights reserved.</p>
            <Link to="/contact" className="transition hover:text-white">
              Let's talk business →
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MainLayout
