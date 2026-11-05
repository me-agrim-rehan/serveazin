
import {
  ArrowUpRight,
  MapPin,
  Users,
  BriefcaseBusiness,
  MessageCircle,
  ClipboardList,
  Radio,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function Products() {
  const otherProducts = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Automation',
      description: 'Automated conversations and customer management.',
    },
    {
      icon: ClipboardList,
      title: 'Employee Management System',
      description: 'Simplified workforce and attendance management.',
    },
    {
      icon: Radio,
      title: 'In - Store Radio',
      description: 'Audio solutions for business environments.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#002550] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Featured Product */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#FD5801]">
              Our Flagship Product
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Services,
              <br />
              <span className="text-[#FD5801]">
                at your door.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-white/70">
              Discover and connect with independent professionals
              across a wide range of services. Compare providers,
              explore options and find the right people for the job.
            </p>

            <Link
              to="/products"
              className="mt-9 inline-flex items-center gap-3 bg-[#FD5801] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#002550]"
            >
              Explore Our Products
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* ServicesAtDoor Visual */}
          <div className="relative">
            <div className="relative border border-white/15 bg-white/5 p-8 sm:p-10">

              <div className="mb-10 flex items-center justify-between">
                <span className="text-xl font-bold tracking-tight text-white">
                  Services<span className="text-[#FD5801]">AtDoor</span>
                </span>

                <span className="bg-[#FD5801] px-3 py-1 text-xs font-semibold text-white">
                  COMING SOON
                </span>
              </div>

              <p className="mb-6 text-sm text-white/60">
                Whatever you need, find the right professional.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: 'Professionals' },
                  { icon: BriefcaseBusiness, label: 'Services' },
                  { icon: MapPin, label: 'Near you' },
                  { icon: ArrowUpRight, label: 'Easy discovery' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 border border-white/10 bg-white/5 p-4"
                  >
                    <Icon size={21} className="text-[#FD5801]" />
                    <span className="text-sm font-medium text-white">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-xs uppercase tracking-widest text-white/40">
                  Discover · Connect · Get things done
                </p>
              </div>

            </div>
          </div>
        </div>


{/* Other Products */}
<div className="mt-20 border-t border-white/15 pt-10">
  <div className="mb-8">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FD5801]">
      More From Serveazin
    </p>
    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
      Technology that works for your business.
    </h3>
  </div>

  {/* Second flagship product */}
  <div className="mb-5 border border-white/15 bg-white/5 p-7 sm:p-9">
    <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
      <div className="max-w-2xl">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FD5801]">
            Featured Business Solution
          </span>
          <span className="border border-green-400/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-300">
            Operational
          </span>
        </div>

        <h4 className="text-2xl font-bold text-white sm:text-3xl">
          WhatsApp Business Automation
        </h4>

        <p className="mt-4 max-w-xl leading-7 text-white/70">
          Turn WhatsApp into a complete customer communication and
          management system. Automate conversations, deploy AI-powered
          chatbots, manage customer interactions and coordinate your
          team through a shared inbox.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            'AI Chatbots',
            'Automated Workflows',
            'Bulk Messaging',
            'Shared Team Inbox',
            'Customer Management',
            'Analytics',
          ].map((feature) => (
            <span
              key={feature}
              className="border border-white/15 px-3 py-2 text-xs text-white/70"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
        <p className="text-sm text-white/50">
          Fully managed · Dedicated deployment
        </p>

        <Link
          to="/services/software-saas"
          className="inline-flex items-center gap-3 bg-[#FD5801] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#002550]"
        >
          Explore Automation
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  </div>

  {/* Supporting Products */}
  <div className="grid gap-4 md:grid-cols-2">
    <div className="border border-white/10 bg-white/5 p-6">
      <ClipboardList size={24} className="mb-5 text-[#FD5801]" />
      <h4 className="text-lg font-semibold text-white">
        Employee Management System
      </h4>
      <p className="mt-2 text-sm leading-6 text-white/60">
        Manage employee attendance, leave requests, workforce
        records and internal communication in one system.
      </p>
    </div>

    <div className="border border-white/10 bg-white/5 p-6">
      <Radio size={24} className="mb-5 text-[#FD5801]" />
      <h4 className="text-lg font-semibold text-white">
        In-Store Radio
      </h4>
      <p className="mt-2 text-sm leading-6 text-white/60">
        In-store audio software, setup and branded audio
        solutions designed for business environments.
      </p>
    </div>
  </div>

  <div className="mt-7 text-right">
    <Link
      to="/products"
      className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-[#FD5801]"
    >
      View all products
      <ArrowUpRight size={17} />
    </Link>
  </div>
</div>


      </div>
    </section>
  )
}

export default Products
