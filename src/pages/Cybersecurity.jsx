
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import {
  ShieldCheck,
  Search,
  Activity,
  Siren,
  Network,
  LockKeyhole,
  ArrowUpRight,
  Radar,
  Eye,
  Crosshair,
  Fingerprint,
  ChevronRight,
  CheckCircle2,
  Server,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    number: '01',
    code: 'VAPT',
    title: 'Vulnerability Assessment & Penetration Testing',
    description:
      'Identify security weaknesses across applications, networks and digital environments through structured assessments and controlled security testing.',
  },
  {
    icon: ShieldCheck,
    number: '02',
    code: 'AUDIT',
    title: 'Cybersecurity Audits & Assessments',
    description:
      'Evaluate existing security controls, identify gaps and understand how effectively your technology environment is protected.',
  },
  {
    icon: Activity,
    number: '03',
    code: 'MONITOR',
    title: 'Security Monitoring',
    description:
      'Improve visibility into your digital environment through security monitoring, threat identification and assessment of suspicious activity.',
  },
  {
    icon: Siren,
    number: '04',
    code: 'RESPONSE',
    title: 'Incident Response',
    description:
      'Approach security incidents through investigation, containment, recovery and practical steps to reduce the impact of future threats.',
  },
  {
    icon: Network,
    number: '05',
    code: 'RISK',
    title: 'Risk Management',
    description:
      'Identify and evaluate technology-related risks, understand potential business impact and prioritise practical security improvements.',
  },
  {
    icon: LockKeyhole,
    number: '06',
    code: 'GOVERN',
    title: 'Security Governance',
    description:
      'Strengthen security ownership, policies, processes and organisational oversight to establish a more structured approach to cybersecurity.',
  },
]

const approach = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Assess your environment, infrastructure and existing security practices.',
  },
  {
    number: '02',
    title: 'Identify',
    description:
      'Discover vulnerabilities, weaknesses and potential risk areas.',
  },
  {
    number: '03',
    title: 'Strengthen',
    description:
      'Prioritise risks and recommend practical security improvements.',
  },
  {
    number: '04',
    title: 'Improve',
    description:
      'Support a more informed and resilient approach to security.',
  },
]

function Cybersecurity() {
  useEffect(() => {
    document.title = 'Cybersecurity Services in India | Serveazin'

    const description =
      'Serveazin provides cybersecurity services across India, including vulnerability assessments, penetration testing, security audits, monitoring and risk management. Headquartered in Jammu, serving organisations across India.'

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }

    meta.content = description
  }, [])

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#10233D] px-6 py-20 text-white lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(147,197,253,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-blue-200">
            <span>Serveazin</span>
            <span className="text-white/30">/</span>
            <span>Cybersecurity</span>
            <span className="ml-auto rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1.5 text-emerald-200">
              Security-focused solutions
            </span>
          </div>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-xs font-medium text-blue-100">
                <ShieldCheck size={15} />
                Cybersecurity & Risk Management
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Every weakness is an opportunity to{' '}
                <span className="text-blue-300">strengthen.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-300">
                Understand your exposure before it becomes a problem. We help
                organisations identify vulnerabilities, assess security risks
                and strengthen their digital environments through practical
                cybersecurity expertise.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-sm bg-blue-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  Discuss Your Security Needs
                  <ArrowUpRight size={17} />
                </Link>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:border-blue-300 hover:text-blue-200"
                >
                  Explore Capabilities
                  <ChevronRight size={16} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7">
                {[
                  'Security Assessments',
                  'Threat Identification',
                  'Risk Management',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    <span className="text-xs text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lighter security visual */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-8 rounded-full bg-blue-400/10 blur-3xl" />

              <div className="relative rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <div className="flex items-center gap-3">
                    <Radar size={20} className="text-blue-300" />
                    <span className="text-xs font-semibold tracking-wider text-white">
                      SECURITY OVERVIEW
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-blue-200/70">
                    SRV / SEC-01
                  </span>
                </div>

                <div className="py-7 text-center">
                  <div className="relative mx-auto flex aspect-square max-w-[250px] items-center justify-center rounded-full border border-blue-200/25 bg-blue-300/[0.04]">
                    <div className="absolute h-[78%] w-[78%] rounded-full border border-blue-200/20" />
                    <div className="absolute h-[56%] w-[56%] rounded-full border border-blue-200/25" />
                    <div className="absolute h-[34%] w-[34%] rounded-full border border-blue-200/30" />

                    <div className="absolute left-1/2 top-0 h-full w-px bg-blue-200/15" />
                    <div className="absolute left-0 top-1/2 h-px w-full bg-blue-200/15" />

                    <span className="absolute left-[25%] top-[30%] h-2.5 w-2.5 rounded-full bg-red-300 shadow-[0_0_14px_#fca5a5]" />
                    <span className="absolute right-[24%] top-[38%] h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_14px_#93c5fd]" />
                    <span className="absolute bottom-[25%] left-[37%] h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_14px_#93c5fd]" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-blue-200/40 bg-blue-300/10">
                      <ShieldCheck size={37} className="text-blue-200" />
                    </div>
                  </div>

                  <p className="mt-6 text-lg font-semibold text-white">
                    Know your exposure.
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    Visibility is the first step towards stronger security.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: Eye, label: 'VISIBILITY' },
                    { icon: Crosshair, label: 'ASSESSMENT' },
                    { icon: Fingerprint, label: 'PROTECTION' },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.label}
                        className="rounded-lg border border-white/10 bg-white/[0.06] px-2 py-4 text-center"
                      >
                        <Icon size={19} className="mx-auto text-blue-200" />
                        <p className="mt-2 text-[9px] font-semibold tracking-wider text-slate-300">
                          {item.label}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview strip */}
      <section className="border-b border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
          {[
            {
              icon: Search,
              title: 'Discover',
              detail: 'Understand your attack surface.',
            },
            {
              icon: Crosshair,
              title: 'Evaluate',
              detail: 'Identify and prioritise risks.',
            },
            {
              icon: ShieldCheck,
              title: 'Strengthen',
              detail: 'Improve your security posture.',
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={21} />
                </div>
                <div>
                  <p className="font-semibold text-[#10233D]">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="bg-[#F5F8FC] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600">
                01 — Security Capabilities
              </p>
              <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-[#10233D] sm:text-5xl">
                A clearer picture of your security environment.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-600">
              Practical security capabilities to identify weaknesses,
              understand exposure and improve organisational resilience.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.number}
                  className="group rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={24} strokeWidth={1.7} />
                    </div>
                    <span className="font-mono text-xs text-slate-400">
                      {service.code} / {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold leading-snug text-[#10233D]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-medium text-blue-600">
                    <CheckCircle2 size={15} />
                    Security capability
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600">
                02 — Our Approach
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#10233D] sm:text-5xl">
                Understand the risk.
                <span className="text-blue-600"> Strengthen the defence.</span>
              </h2>
              <p className="mt-6 text-sm leading-8 text-slate-600">
                Effective cybersecurity requires more than isolated security
                tools. It requires an understanding of business operations,
                technology environments and the risks that connect them.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {approach.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-slate-200 bg-[#F8FAFD] p-7"
                >
                  <span className="font-mono text-sm font-semibold text-blue-600">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-[#10233D]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership and experience */}
      <section className="bg-[#F5F8FC] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600">
            03 — Experience
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-bold leading-tight text-[#10233D] sm:text-5xl">
                Experience built across real-world IT environments.
              </h2>
              <p className="mt-5 text-sm leading-8 text-slate-600">
                Our cybersecurity perspective is informed by decades of
                experience across enterprise IT, infrastructure, networking
                and security assessments.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600">
                    Leadership Perspective
                  </p>
                  <h3 className="mt-3 text-3xl font-bold text-[#10233D]">
                    Mukesh Kumar
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Chief Executive Officer
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ShieldCheck size={27} />
                </div>
              </div>

              <p className="mt-6 text-sm leading-8 text-slate-600">
                Bringing around 30 years of IT and enterprise technology
                experience, Mukesh's background spans cybersecurity,
                infrastructure, networking, cloud security and enterprise
                security assessments.
              </p>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  Credentials & Experience
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    'CISA Certified ',
                    'Cisco CCNA',
                    'AWS Solutions Architect – Associate ',
                    'Aramco SACS-002 Assessor Experience',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-200 bg-[#F8FAFD] px-3 py-2 text-xs text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/mukesh-kumar-3ba07444/"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
              >
                View LinkedIn Profile
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service reach */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-l-4 border-blue-500 bg-[#F5F8FC] px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <div>
            <p className="text-sm font-semibold text-[#10233D]">
              Cybersecurity expertise across India
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
              Headquartered in Jammu, Serveazin works with organisations across
              India to help assess, manage and strengthen their digital
              environments.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#10233D] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-300">
              Secure Your Environment
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Don't wait for a vulnerability to become an incident.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Start a conversation about your security requirements and
              explore practical ways to strengthen your digital environment.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 self-start rounded-sm bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400 md:self-center"
          >
            Discuss Your Security Needs
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}

export default Cybersecurity
