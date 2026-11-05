
import {
  ArrowUpRight,
  Bot,
  Workflow,
  Inbox,
  Users,
  MessageCircle,
  BarChart3,
  CalendarDays,
  Clock3,
  ShieldCheck,
  Radio,
  Headphones,
  Code2,
  Cloud,
  Settings2,
  Check,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import MainLayout from '../components/MainLayout'

const whatsappPlans = [
  {
    name: 'Starter',
    price: '₹1,499',
    description: 'For small teams getting started with automation.',
    numbers: '1',
    members: '5',
    contacts: '10,000',
    conversations: '3,000',
    broadcasts: '5,000',
    workflows: '10',
    executions: '10,000',
    agents: '2',
    api: '10,000',
    analytics: 'Basic',
    support: 'Email',
  },
  {
    name: 'Growth',
    price: '₹2,999',
    description: 'For growing businesses managing more conversations.',
    numbers: '5',
    members: '10',
    contacts: '50,000',
    conversations: '15,000',
    broadcasts: '25,000',
    workflows: '50',
    executions: '50,000',
    agents: '10',
    api: '100,000',
    analytics: 'Advanced',
    support: 'Priority',
    popular: true,
  },
  {
    name: 'Business',
    price: '₹5,999',
    description: 'For larger teams with higher automation requirements.',
    numbers: '10',
    members: '20+',
    contacts: '200,000',
    conversations: '50,000',
    broadcasts: '100,000',
    workflows: '200',
    executions: '200,000',
    agents: '25',
    api: '500,000',
    analytics: 'Advanced',
    support: 'Priority',
  },
]

const whatsappFeatures = [
  {
    icon: Bot,
    title: 'AI-powered conversations',
    description:
      'Business-specific AI assistance, automated FAQs and contextual conversation handling.',
  },
  {
    icon: Workflow,
    title: 'Workflow automation',
    description:
      'Automate repetitive tasks, lead capture, qualification, appointments and support requests.',
  },
  {
    icon: Inbox,
    title: 'Shared team inbox',
    description:
      'Manage conversations, assign chats, add internal notes and hand customers between agents.',
  },
  {
    icon: Users,
    title: 'Customer management',
    description:
      'Access customer profiles, conversation history, tags and team activity in one place.',
  },
  {
    icon: BarChart3,
    title: 'Analytics and reporting',
    description:
      'Understand conversations, team activity and business communication performance.',
  },
  {
    icon: MessageCircle,
    title: 'Human-agent handoff',
    description:
      'Move conversations from automated assistance to the right team member when needed.',
  },
]

const emsPlans = [
  {
    name: 'Standard 1',
    price: '₹999',
    employees: 'Up to 30 employees',
    features: [
      'Location-based attendance',
      'Leave management',
      'Remote-work applications',
      'Standard analytics',
    ],
  },
  {
    name: 'Standard 2',
    price: '₹2,999',
    employees: 'Up to 100 employees',
    features: [
      'Everything in Standard 1',
      'Facial recognition attendance',
      'QR-code attendance',
      'Advanced analytics',
      'Private internal chat system',
    ],
    popular: true,
  },
]

function SoftwareSaaS() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-[#F7F9FC] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3563E9]">
            Software & SaaS
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-[#102A43] sm:text-6xl">
                Software that works around{' '}
                <span className="text-[#3563E9]">your business.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526477]">
                From custom software and web applications to business
                automation and SaaS products, Serveazin develops practical
                technology that helps organisations work smarter.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 bg-[#3563E9] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#102A43]"
              >
                Discuss Your Requirements
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Code2, title: 'Custom software', text: 'Built around your needs' },
                { icon: Cloud, title: 'Cloud solutions', text: 'Connected infrastructure' },
                { icon: Bot, title: 'AI & automation', text: 'Smarter workflows' },
                { icon: Settings2, title: 'SaaS products', text: 'Business-ready platforms' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="border border-[#E1E8F0] bg-white p-5">
                  <Icon size={23} className="text-[#3563E9]" />
                  <h2 className="mt-5 font-semibold text-[#102A43]">{title}</h2>
                  <p className="mt-1 text-sm text-[#526477]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service overview */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3563E9]">
                What We Do
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#102A43] sm:text-4xl">
                From an idea to a working solution.
              </h2>
            </div>

            <div>
              <p className="leading-8 text-[#526477]">
                We work with businesses to plan, develop and deploy software
                suited to their operations. Whether you need a custom platform,
                a web application, cloud-based tools or automation for everyday
                processes, we focus on building solutions that serve a clear purpose.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  'Custom software development',
                  'Web applications',
                  'SaaS development',
                  'AI integration',
                  'Business automation',
                  'Cloud & DevOps',
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-[#E1E8F0] bg-[#F7F9FC] px-3 py-2 text-sm text-[#526477]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-7 text-sm leading-7 text-[#526477]">
                Based in Jammu, Serveazin works with businesses locally and
                beyond to deliver software and technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Automation */}
      <section id="whatsapp-automation" className="scroll-mt-24 bg-[#102A43] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9DB8FF]">
              Business Product 01
            </p>
            <span className="border border-green-300/30 bg-green-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-green-300">
              Operational
            </span>
          </div>

          <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 text-[#9DB8FF]">
                <MessageCircle size={25} />
                <span className="text-sm font-semibold">
                  WhatsApp Business Automation
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                More than messaging. A complete conversation workflow.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                A managed WhatsApp automation and CRM solution built to help
                businesses handle customer conversations, automate processes,
                capture leads and coordinate teams from one dashboard.
              </p>
            </div>

            <div className="border border-white/15 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9DB8FF]">
                Managed by Serveazin
              </p>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Each customer receives a separately configured deployment.
                We handle setup, onboarding and deployment, so your team can
                focus on using the system rather than configuring it.
              </p>
              <p className="mt-4 text-xs leading-6 text-white/45">
                Built on the official Meta WhatsApp Business Cloud API.
                AI currently uses OpenAI and can be customised to requirements.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatsappFeatures.map(({ icon: Icon, title, description }) => (
              <div key={title} className="border border-white/10 bg-white/5 p-6">
                <Icon size={24} className="text-[#9DB8FF]" />
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/55">{description}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp pricing */}
          <div id="whatsapp-pricing" className="scroll-mt-24 mt-20">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9DB8FF]">
                  Subscription Plans
                </p>
                <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Choose your plan.
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Monthly Serveazin subscription. Deployment and onboarding
                  are handled by our team.
                </p>
              </div>
              <p className="text-xs text-white/40">
                All prices in INR, billed monthly.
              </p>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {whatsappPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col border p-6 ${
                    plan.popular
                      ? 'border-[#9DB8FF] bg-white'
                      : 'border-white/15 bg-white/5'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute right-5 top-5 bg-[#3563E9] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Popular
                    </span>
                  )}

                  <h4 className={`text-xl font-bold ${plan.popular ? 'text-[#102A43]' : 'text-white'}`}>
                    {plan.name}
                  </h4>

                  <p className={`mt-2 min-h-10 text-sm leading-5 ${plan.popular ? 'text-[#526477]' : 'text-white/50'}`}>
                    {plan.description}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-[#102A43]' : 'text-white'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-[#526477]' : 'text-white/45'}`}>
                      / month
                    </span>
                  </div>

                  <div className={`my-6 border-t ${plan.popular ? 'border-[#E1E8F0]' : 'border-white/15'}`} />

                  <p className={`mb-4 text-xs font-semibold uppercase tracking-wider ${plan.popular ? 'text-[#3563E9]' : 'text-[#9DB8FF]'}`}>
                    Plan limits
                  </p>

                  <div className="space-y-3">
                    {[
                      ['WhatsApp numbers', plan.numbers],
                      ['Team members', plan.members],
                      ['Contacts', plan.contacts],
                      ['Monthly conversations', plan.conversations],
                      ['Broadcast recipients / month', plan.broadcasts],
                      ['Automation workflows', plan.workflows],
                      ['Automation executions', plan.executions],
                      ['AI agents', plan.agents],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-3 text-sm">
                        <span className={plan.popular ? 'text-[#526477]' : 'text-white/55'}>
                          {label}
                        </span>
                        <span className={`shrink-0 font-semibold ${plan.popular ? 'text-[#102A43]' : 'text-white'}`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={`mt-6 border-t pt-5 ${plan.popular ? 'border-[#E1E8F0]' : 'border-white/15'}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${plan.popular ? 'text-[#3563E9]' : 'text-[#9DB8FF]'}`}>
                      Also included
                    </p>
                    <p className={`mt-3 text-sm leading-6 ${plan.popular ? 'text-[#526477]' : 'text-white/55'}`}>
                      {plan.api} API calls · {plan.analytics} analytics · {plan.support} support
                    </p>
                    <p className={`mt-2 text-xs ${plan.popular ? 'text-[#526477]' : 'text-white/45'}`}>
                      {plan.name === 'Starter' ? 'Basic webhooks' : 'Webhooks included'}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className={`mt-7 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition ${
                      plan.popular
                        ? 'bg-[#3563E9] text-white hover:bg-[#102A43]'
                        : 'bg-white text-[#102A43] hover:bg-[#9DB8FF]'
                    }`}
                  >
                    Enquire About This Plan
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-4 border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/55 md:grid-cols-2">
              <p>
                <strong className="text-white/80">Meta charges:</strong>{' '}
                WhatsApp template-message charges are billed separately
                according to applicable Meta pricing.
              </p>
              <p>
                <strong className="text-white/80">AI usage:</strong>{' '}
                OpenAI API usage is charged separately at actual cost.
                Customisations are quoted separately based on requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Management System */}
      <section id="ems" className="scroll-mt-24 bg-[#F7F9FC] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3563E9]">
            Business Product 02
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-bold leading-tight text-[#102A43] sm:text-5xl">
                Employee Management System
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#526477]">
                Simplify everyday workforce administration with tools for
                attendance, leave management, remote-work applications
                and employee communication.
              </p>
            </div>

            <div className="border border-[#E1E8F0] bg-white p-6">
              <div className="flex items-center gap-3">
                <CalendarDays size={24} className="text-[#3563E9]" />
                <h3 className="font-semibold text-[#102A43]">
                  Workforce management in one place
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#526477]">
                Higher-tier plans add facial recognition and QR-code
                attendance, advanced analytics and a private internal
                chat system. Chat access and permissions can be
                customised to an organisation's hierarchy and needs.
              </p>
            </div>
          </div>

          {/* EMS pricing */}
          <div id="ems-pricing" className="scroll-mt-24 mt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3563E9]">
                  Subscription Plans
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#102A43] sm:text-3xl">
                  Straightforward plans for your team.
                </h3>
              </div>
              <p className="text-xs text-[#526477]">Monthly pricing · INR</p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {emsPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`border bg-white p-7 ${
                    plan.popular ? 'border-[#3563E9]' : 'border-[#E1E8F0]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-xl font-bold text-[#102A43]">
                      {plan.name}
                    </h4>
                    {plan.popular && (
                      <span className="bg-[#EAF0FF] px-3 py-1 text-xs font-semibold text-[#3563E9]">
                        Extended plan
                      </span>
                    )}
                  </div>

                  <p className="mt-5 text-4xl font-bold text-[#102A43]">
                    {plan.price}
                    <span className="ml-1 text-sm font-normal text-[#526477]">
                      / month
                    </span>
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[#3563E9]">
                    {plan.employees}
                  </p>

                  <div className="my-6 border-t border-[#E1E8F0]" />

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[#526477]">
                        <Check size={17} className="mt-0.5 shrink-0 text-[#3563E9]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#3563E9] hover:text-[#102A43]"
                  >
                    Enquire About EMS
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* In-Store Radio */}
      <section id="in-store-radio" className="scroll-mt-24 bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="border border-[#E1E8F0] bg-[#F7F9FC] p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <Radio size={32} className="text-[#3563E9]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526477]">
                  Business Audio
                </span>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-[#3563E9] text-white">
                  <Headphones size={22} />
                </div>
                <div>
                  <p className="font-semibold text-[#102A43]">In-Store Radio</p>
                  <p className="mt-1 text-sm text-[#526477]">
                    Software, setup and audio branding
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                  <span
                    key={item}
                    className="h-8 flex-1 bg-[#3563E9]/20"
                    style={{ height: `${16 + ((item * 17) % 30)}px` }}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3563E9]">
                Business Product 03
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#102A43] sm:text-5xl">
                Give your space its own sound.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#526477]">
                Serveazin provides in-store radio software and setup
                solutions to help businesses create a consistent audio
                experience for their physical spaces.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  'In-store radio software',
                  'Station setup and configuration',
                  'Music curation',
                  'Branded audio solutions',
                  'Ongoing support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[#526477]">
                    <Check size={17} className="shrink-0 text-[#3563E9]" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 bg-[#102A43] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#3563E9]"
              >
                Discuss In-Store Radio
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Development approach */}
      <section className="bg-[#F7F9FC] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3563E9]">
            How We Work
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold text-[#102A43] sm:text-4xl">
            A clear process, from requirements to deployment.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                title: 'Understand',
                description: 'We learn about your business, requirements and challenges.',
              },
              {
                number: '02',
                title: 'Plan',
                description: 'We define the scope, approach and suitable technology.',
              },
              {
                number: '03',
                title: 'Develop & deploy',
                description: 'We build, configure, test and deploy the solution.',
              },
              {
                number: '04',
                title: 'Support',
                description: 'We help maintain and improve the solution as needs evolve.',
              },
            ].map((step) => (
              <div key={step.number} className="border-t-2 border-[#3563E9] pt-5">
                <span className="text-sm font-semibold text-[#3563E9]">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#102A43]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#526477]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#102A43] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9DB8FF]">
                Have a Project in Mind?
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
                Let's find the right solution for your business.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/60">
                Tell us what you're looking to build, automate or improve.
                We'll work with you to understand the requirements.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#3563E9] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#102A43]"
            >
              Talk to Our Team
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default SoftwareSaaS
