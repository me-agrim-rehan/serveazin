
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import {
  Network,
  Server,
  Router,
  Wifi,
  ShieldCheck,
  Settings,
  Activity,
  Cable,
  ArrowUpRight,
  MonitorCog,
  Cloud,
  HardDrive,
} from 'lucide-react'

const services = [
  {
    icon: Network,
    title: 'Network Design & Architecture',
    description:
      'Thoughtfully designed network infrastructure that connects your teams, systems and locations with reliability and room to scale.',
  },
  {
    icon: Cable,
    title: 'LAN & WAN Solutions',
    description:
      'Secure and dependable wired and wide-area networking solutions for offices, businesses and distributed environments.',
  },
  {
    icon: Server,
    title: 'Server Infrastructure',
    description:
      'Server installation, configuration and infrastructure management to keep your business applications and operations running.',
  },
  {
    icon: Wifi,
    title: 'Wireless Connectivity',
    description:
      'Business-grade wireless networking designed for stable coverage, secure access and seamless connectivity.',
  },
  {
    icon: Settings,
    title: 'Infrastructure Management',
    description:
      'Proactive infrastructure management, maintenance and optimisation to support business continuity and performance.',
  },
  {
    icon: MonitorCog,
    title: 'Technical Support & Troubleshooting',
    description:
      'Practical technical assistance to identify network and infrastructure issues, minimise disruption and restore operations.',
  },
]

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn about your business, existing infrastructure, operational needs and technical challenges.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We develop an infrastructure approach that aligns with your requirements, environment and future growth.',
  },
  {
    number: '03',
    title: 'Implement',
    description:
      'Our team works on setup, configuration and deployment with attention to reliability and security.',
  },
  {
    number: '04',
    title: 'Support',
    description:
      'We help maintain and optimise your infrastructure as your business and technology needs evolve.',
  },
]

function ITInfrastructure() {
  useEffect(() => {
    document.title =
      'IT Infrastructure & Networking Solutions in India | Serveazin'

    const description =
      'Serveazin provides IT infrastructure and networking solutions across India, including Jammu and Jammu & Kashmir. Explore network design, LAN/WAN, server installation, business Wi-Fi, infrastructure management and technical support.'

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    )

    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }

    metaDescription.setAttribute('content', description)
  }, [])

  return (
    <MainLayout>
      <main className="bg-white text-[#102A43]">

        {/* Hero */}
        <section className="relative overflow-hidden bg-[#071B33] px-6 py-24 text-white md:py-32">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                IT Infrastructure & Networking
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                IT infrastructure built for everything connected.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                From network design and server infrastructure to secure
                connectivity and ongoing technical support, Serveazin helps
                businesses build, manage and scale reliable technology
                environments.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Headquartered in Jammu, India, Serveazin works with
                organisations across Jammu & Kashmir, throughout India
                and beyond, delivering infrastructure solutions that
                support modern business operations.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
                >
                  Discuss your requirements
                  <ArrowUpRight size={18} />
                </Link>

                <a
                  href="#infrastructure-services"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  Explore services
                </a>
              </div>
            </div>

            {/* Network visual */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-sm md:p-9">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Connected infrastructure
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      A unified business environment
                    </p>
                  </div>
                  <Activity className="text-blue-400" size={22} />
                </div>

                <div className="flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10">
                    <Cloud size={38} className="text-blue-300" />
                  </div>
                </div>

                <div className="mx-auto h-12 w-px bg-gradient-to-b from-blue-400 to-cyan-400" />

                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
                    <Router size={30} className="text-cyan-300" />
                  </div>
                </div>

                <div className="mx-auto h-10 w-px bg-cyan-400/70" />

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Server, label: 'Servers' },
                    { icon: Network, label: 'Networks' },
                    { icon: HardDrive, label: 'Systems' },
                  ].map((item) => {
                    const Icon = item.icon

                    return (
                      <div
                        key={item.label}
                        className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-5"
                      >
                        <Icon size={25} className="text-blue-300" />
                        <span className="text-xs text-slate-300">
                          {item.label}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck size={15} className="text-emerald-400" />
                  Built around reliability and connectivity
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                The foundation of your operations
              </p>
              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Technology works better when everything works together.
              </h2>
            </div>

            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                Reliable IT infrastructure is essential to keeping modern
                businesses connected, productive and prepared for change.
                Disconnected systems and unreliable networks can slow down
                even the most capable teams.
              </p>
              <p>
                Serveazin helps organisations establish and maintain the
                infrastructure behind their daily operations, combining
                practical implementation with a focus on long-term
                reliability and scalability.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="infrastructure-services"
          className="bg-[#F5F8FC] px-6 py-20 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                What we do
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Infrastructure solutions for modern business needs.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                From foundational network setups to ongoing infrastructure
                support, our services help businesses create dependable
                technology environments.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <div
                    key={service.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-semibold text-[#102A43]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Infrastructure value */}
        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Built for business
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Infrastructure that grows with your organisation.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Every organisation has different infrastructure requirements.
                We take the time to understand your environment and recommend
                solutions that fit your operations, technical requirements and
                future plans.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    title: 'Reliability',
                    text: 'Create stable environments that support everyday business operations.',
                  },
                  {
                    title: 'Scalability',
                    text: 'Plan infrastructure that can adapt as teams, systems and requirements grow.',
                  },
                  {
                    title: 'Security',
                    text: 'Apply sensible network and infrastructure practices to help protect business systems.',
                  },
                  {
                    title: 'Continuity',
                    text: 'Reduce disruption through structured implementation and ongoing support.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-[#071B33] p-8 text-white md:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <Network size={34} />
                </div>

                <h3 className="max-w-md text-3xl font-semibold leading-tight">
                  One connected foundation. Countless possibilities.
                </h3>

                <p className="mt-5 max-w-md leading-8 text-slate-300">
                  Whether you're establishing a new technology environment or
                  improving an existing one, the right infrastructure helps
                  your people and systems work better together.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                    <Network className="mb-3 text-blue-300" size={24} />
                    <p className="font-medium">Connected systems</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Designed around your operations
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                    <Activity className="mb-3 text-blue-300" size={24} />
                    <p className="font-medium">Reliable operations</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Focused on continuity and performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service coverage */}
        <section className="bg-[#F5F8FC] px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Where we work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Local expertise. A wider reach.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Headquartered in Jammu, Serveazin provides IT infrastructure
                and networking solutions to businesses in Jammu and across
                Jammu & Kashmir. We also work with organisations throughout
                India and explore opportunities to support businesses in
                international markets.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                How we work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                A considered approach from planning to support.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                We follow a structured approach to understand your needs,
                implement the right solutions and support your infrastructure
                as it evolves.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="border-t-2 border-blue-600 pt-6"
                >
                  <span className="text-sm font-semibold tracking-widest text-blue-600">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#071B33] px-6 py-20 text-white md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Let's get connected
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Have an infrastructure challenge?
                <span className="text-blue-300">
                  {' '}Let's work through it.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Tell us about your business, your existing setup or what
                you're looking to build. Let's explore the right solution
                together.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-medium text-white transition hover:bg-blue-500"
            >
              Talk to our team
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}

export default ITInfrastructure
