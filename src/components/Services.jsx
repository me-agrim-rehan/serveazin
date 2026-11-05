
import {
  ShieldCheck,
  TrendingUp,
  Code2,
  Network,
  ArrowUpRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Cybersecurity',
    description:
      'Strengthening businesses through security assessments, vulnerability testing and proactive protection.',
    icon: ShieldCheck,
    link: '/services/cybersecurity',
  },
  {
    number: '02',
    title: 'Digital Marketing',
    description:
      'Growing your digital presence through SEO, creative strategy and performance-driven marketing.',
    icon: TrendingUp,
    link: '/services/digital-marketing',
  },
  {
    number: '03',
    title: 'Software & SaaS',
    description:
      'Developing custom software, business applications and technology products built around real needs.',
    icon: Code2,
    link: '/services/software-saas',
  },
  {
    number: '04',
    title: 'IT Infrastructure & Networking',
    description:
      'Designing, installing and maintaining reliable networks and IT infrastructure for businesses.',
    icon: Network,
    link: '/services/it-infrastructure',
  },
]

function Services() {
  return (
    <section id="services" className="bg-[#F8FAFC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            What We Do
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#002652] sm:text-5xl">
            Technology expertise.
            <br />
            Four ways to move forward.
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            From cybersecurity and digital growth to software development
            and IT infrastructure, we bring different areas of technology
            together to help businesses move forward.
          </p>
        </div>

        <div className="grid gap-x-12 md:grid-cols-2">
          {services.map(({ number, title, description, icon: Icon, link }) => (
            <Link
              to={link}
              key={number}
              className="group flex gap-5 border-t border-gray-200 py-8 transition hover:border-[#2563EB]"
            >
              <span className="pt-1 text-sm font-medium text-gray-400">
                {number}
              </span>

              <div className="flex-1">
                <div className="mb-5 flex items-center justify-between">
                  <Icon
                    size={27}
                    strokeWidth={1.6}
                    className="text-[#2563EB]"
                  />

                  <ArrowUpRight
                    size={21}
                    className="text-gray-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#2563EB]"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#002652]">
                  {title}
                </h3>

                <p className="mt-3 max-w-md leading-7 text-gray-600">
                  {description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                  Explore service
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;