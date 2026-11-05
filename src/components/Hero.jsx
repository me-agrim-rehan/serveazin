
import { ArrowUpRight, ShieldCheck, Code2, Network, TrendingUp } from 'lucide-react'

const divisions = [
  { name: 'Cybersecurity', icon: ShieldCheck, position: 'node-one' },
  { name: 'Software & SaaS', icon: Code2, position: 'node-two' },
  { name: 'Infrastructure', icon: Network, position: 'node-three' },
  { name: 'Digital Growth', icon: TrendingUp, position: 'node-four' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
     <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        {/* Left: Hero content */}
        <div className="relative z-10">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Technology · Security · Innovation
          </p>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-[#002652] sm:text-6xl lg:text-[4.2rem]">
  Technology. Security.
  <br />
  <span className="text-[#2563EB]">
    Innovation.
  </span>{' '}
  Without boundaries.
</h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            We bring together technology, cybersecurity, infrastructure
            and digital expertise to help businesses navigate, build
            and grow in an evolving digital world.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-3 bg-[#002652] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
            >
              Explore Our Expertise
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-4 text-sm font-semibold text-[#002652] transition hover:text-[#2563EB]"
            >
              Let's Talk Business
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-14 flex items-center gap-3 text-sm text-gray-500">
            <span className="h-px w-10 bg-[#2563EB]" />
            Technology without limits. Solutions without boundaries.
          </div>
        </div>

        {/* Right: Animated technical network */}
        <div className="network-canvas relative mx-auto aspect-square w-full max-w-[440px]">

          <div className="network-grid absolute inset-0" />

          <div className="network-orbit orbit-one" />
          <div className="network-orbit orbit-two" />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 500 500"
            fill="none"
          >
            <path d="M250 250 L110 125" />
            <path d="M250 250 L390 125" />
            <path d="M250 250 L110 375" />
            <path d="M250 250 L390 375" />
          </svg>

          <div className="network-center">
            <span>S</span>
            <small>SERVEAZIN</small>
          </div>

          {divisions.map(({ name, icon: Icon, position }) => (
            <div key={name} className={`network-node ${position}`}>
              <div className="node-icon">
                <Icon size={23} strokeWidth={1.7} />
              </div>
              <span>{name}</span>
            </div>
          ))}

          <div className="network-caption">
            <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
            CONNECTING POSSIBILITIES
          </div>


          <div className="floating-status">
  <span className="status-dot" />
  <div>
    <strong>CONNECTED</strong>
    <small>Systems in sync</small>
  </div>
</div>
        
        </div>

      </div>
    </section>
  )
}

export default Hero
