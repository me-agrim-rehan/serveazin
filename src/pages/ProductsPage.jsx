
import {
  ArrowUpRight,
  Search,
  Star,
  Users,
  CalendarCheck,
  BriefcaseBusiness,
  MessageCircle,
  Bot,
  Workflow,
  Inbox,
  ClipboardList,
  Radio,
  MapPin,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import MainLayout from '../components/MainLayout'

function ProductsPage() {
  return (
    <MainLayout>

      {/* Introduction */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            The Serveazin Product Ecosystem
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-[#002652] sm:text-6xl">
            Ideas transformed into{' '}
            <span className="text-[#2563EB]">products.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Digital products designed to solve practical problems,
            simplify everyday experiences and help businesses move forward.
          </p>
        </div>
      </section>

      {/* 01 - ServicesAtDoor: Main Product */}
      <section id="services-at-door" className="bg-[#F8FAFC] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#002550]">
                Our Flagship Product
              </p>
              <p className="mt-2 text-sm text-gray-500">
                A marketplace by Serveazin
              </p>
            </div>

            <span className="border border-[#FD5801]/40 bg-[#FD5801]/10 px-4 py-2 text-xs font-semibold tracking-wider text-[#FD5801]">
              COMING SOON
            </span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>
              <h2 className="text-5xl font-bold tracking-tight text-[#002550] sm:text-6xl">
                Services<span className="text-[#FD5801]">AtDoor</span>
              </h2>

              <h3 className="mt-5 text-2xl font-semibold text-[#002550]">
                The right professional.
                <br />
                Your choice.
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                A service marketplace connecting customers with
                independent professionals. Discover services,
                explore providers, compare rates and ratings,
                and choose the right person for the job.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                From everyday household needs to specialised services,
                ServicesAtDoor aims to make finding and booking
                professionals simpler.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 bg-[#002550] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#FD5801]"
              >
                Get Product Updates
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* Product Visual */}
            <div className="border border-gray-200 bg-white p-8 sm:p-10">

              <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                <span className="text-xl font-bold text-[#002550]">
                  Services<span className="text-[#FD5801]">AtDoor</span>
                </span>
                <span className="h-3 w-3 rounded-full bg-[#FD5801]" />
              </div>

              <p className="mt-8 text-sm font-medium text-gray-500">
                FIND THE RIGHT SERVICE
              </p>

              <div className="mt-4 flex items-center gap-3 border border-gray-200 p-4">
                <Search size={20} className="text-[#002550]" />
                <span className="text-sm text-gray-400">
                  What service do you need?
                </span>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: 'Professionals' },
                  { icon: Star, label: 'Ratings & reviews' },
                  { icon: BriefcaseBusiness, label: 'Compare rates' },
                  { icon: CalendarCheck, label: 'Book a service' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-[#FFF4ED] p-4">
                    <Icon size={21} className="shrink-0 text-[#FD5801]" />
                    <span className="text-sm font-medium text-[#002550]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-8 border-t border-gray-100 pt-6 text-xs tracking-widest text-[#002550]">
                DISCOVER · COMPARE · CHOOSE · BOOK
              </p>
            </div>

          </div>

          {/* How it works */}
          <div className="mt-24 border-t border-gray-200 pt-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FD5801]">
              Simple by design
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-bold text-[#002550] sm:text-4xl">
              Finding the right service should be simple.
            </h3>

            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: '01',
                  title: 'Choose a domain',
                  description: 'Explore service categories and find what you need.',
                },
                {
                  number: '02',
                  title: 'Explore professionals',
                  description: 'Discover independent professionals offering the service.',
                },
                {
                  number: '03',
                  title: 'Compare & decide',
                  description: 'Explore rates, ratings and reviews before choosing.',
                },
                {
                  number: '04',
                  title: 'Book your service',
                  description: 'Choose the professional you want to work with.',
                },
              ].map((step) => (
                <div key={step.number} className="border-t-2 border-[#FD5801] pt-6">
                  <span className="text-sm font-semibold text-[#FD5801]">
                    {step.number}
                  </span>
                  <h4 className="mt-5 text-xl font-semibold text-[#002550]">
                    {step.title}
                  </h4>
                  <p className="mt-3 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 02 - WhatsApp Automation */}
      <section id="whatsapp-automation" className="bg-[#002550] px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FD5801]">
              02 / Business Automation
            </p>

            <span className="border border-green-400/40 bg-green-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-300">
              Operational
            </span>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

            <div>
              <div className="flex items-center gap-3">
                <MessageCircle size={30} className="text-[#FD5801]" />
                <span className="text-sm font-semibold text-white/60">
                  WhatsApp Business Automation
                </span>
              </div>

              <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                Turn conversations into business opportunities.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                A fully managed WhatsApp automation and CRM solution
                that helps businesses automate customer conversations,
                capture leads and manage their teams from one dashboard.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  'AI-powered chatbots',
                  'Automated workflows',
                  'Bulk messaging',
                  'Shared team inbox',
                  'Customer management',
                  'Analytics',
                ].map((feature) => (
                  <span
                    key={feature}
                    className="border border-white/15 px-3 py-2 text-xs font-medium text-white/75"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                to="/services/software-saas"
                className="mt-9 inline-flex items-center gap-3 bg-[#FD5801] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#002550]"
              >
                Explore WhatsApp Automation
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* Compact feature overview */}
            <div className="border border-white/15 bg-white/5 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FD5801]">
                One connected platform
              </p>

              <div className="mt-7 space-y-5">
                {[
                  {
                    icon: Bot,
                    title: 'AI conversations',
                    description: 'Business-specific automated assistance.',
                  },
                  {
                    icon: Workflow,
                    title: 'Smart workflows',
                    description: 'Automate repetitive customer interactions.',
                  },
                  {
                    icon: Inbox,
                    title: 'Multi-agent CRM',
                    description: 'Shared inbox, assignment and team handoff.',
                  },
                ].map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-4">
                    <Icon size={23} className="mt-1 shrink-0 text-[#FD5801]" />
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/55">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/15 pt-5">
                <p className="text-sm text-white/65">
                  Dedicated deployment · Official Meta Cloud API · OpenAI integration
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 & 04 - Supporting Products */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            More From Serveazin
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold text-[#002652] sm:text-4xl">
            More solutions for modern businesses.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="border border-gray-200 bg-white p-7 transition hover:border-[#2563EB]">
              <div className="flex items-center justify-between">
                <ClipboardList size={27} className="text-[#2563EB]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  03
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#002652]">
                Employee Management System
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Manage employee attendance, leave requests, remote-work
                applications and workforce administration. Higher-tier
                plans also include facial recognition, QR attendance
                and a private internal chat system.
              </p>

              <Link
                to="/services/software-saas"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#FD5801]"
              >
                Explore EMS
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="border border-gray-200 bg-white p-7 transition hover:border-[#2563EB]">
              <div className="flex items-center justify-between">
                <Radio size={27} className="text-[#2563EB]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  04
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#002652]">
                In-Store Radio
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                In-store radio software, station setup, music curation
                and branded audio solutions designed to create a
                consistent sound experience for businesses.
              </p>

              <Link
                to="/services/software-saas"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#FD5801]"
              >
                Explore In-Store Radio
                <ArrowUpRight size={17} />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#002550] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FD5801]">
                Work With Serveazin
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
                Looking for the right technology solution?
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/70">
                Tell us what your business needs. Let's explore
                how our products and technology solutions can help.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#FD5801] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#002550]"
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

export default ProductsPage
