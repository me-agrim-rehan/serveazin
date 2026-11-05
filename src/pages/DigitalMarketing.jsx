
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import {
  ArrowUpRight,
  Search,
  MousePointerClick,
  Megaphone,
  PenTool,
  Globe,
  TrendingUp,
  Target,
  BarChart3,
  ArrowRight,
  Lightbulb,
} from 'lucide-react'

const services = [
  {
    number: '01',
    id: 'seo',
    title: 'Search Engine Optimisation',
    description: 'Get discovered by the people already looking for what you offer.',
    icon: Search,
    tag: 'BE DISCOVERABLE',
  },
  {
    number: '02',
    id: 'paid-advertising',
    title: 'Paid Advertising',
    description: 'Put your brand in front of the right audience with focused campaigns.',
    icon: MousePointerClick,
    tag: 'MAKE EVERY CLICK COUNT',
  },
  {
    number: '03',
    id: 'social-media',
    title: 'Social Media',
    description: 'Build a social presence people actually want to follow.',
    icon: Megaphone,
    tag: 'START CONVERSATIONS',
  },
  {
    number: '04',
    id: 'content-strategy',
    title: 'Content Strategy',
    description: 'Give your brand a voice, a point of view and something worth saying.',
    icon: PenTool,
    tag: 'SAY SOMETHING',
  },
  {
    number: '05',
    id: 'website-development',
    title: 'Website Development',
    description: 'Create digital experiences that turn visitors into customers.',
    icon: Globe,
    tag: 'MAKE AN IMPRESSION',
  },
  {
    number: '06',
    id: 'analytics-growth',
    title: 'Analytics & Growth',
    description: 'Understand what works and use those insights to move forward.',
    icon: BarChart3,
    tag: 'GROW WITH PURPOSE',
  },
]

const serviceDetails = [
  {
    id: 'seo',
    number: '01',
    label: 'BE DISCOVERABLE',
    title: 'Search Engine Optimisation',
    intro:
      'Your next customer could already be searching for what you offer. We help make sure your business has a better chance of being found.',
    points: [
      {
        title: 'On-page SEO',
        description:
          'Improve page titles, headings, content structure and internal links to make your website easier for search engines and visitors to understand.',
      },
      {
        title: 'Technical SEO',
        description:
          'Work on website structure, crawlability, indexing, mobile usability and performance to build a stronger technical foundation.',
      },
      {
        title: 'Local SEO',
        description:
          'Improve local search visibility for businesses targeting customers in Jammu, Jammu & Kashmir and other relevant locations.',
      },
      {
        title: 'Keyword & Content Strategy',
        description:
          'Identify relevant search terms and develop useful content that aligns with what your potential customers are looking for.',
      },
    ],
  },
  {
    id: 'paid-advertising',
    number: '02',
    label: 'MAKE EVERY CLICK COUNT',
    title: 'Paid Advertising',
    intro:
      'Reach the right people with campaigns built around your business objectives, audience and budget.',
    points: [
      {
        title: 'Google Ads',
        description:
          'Reach people actively searching for your products and services through carefully planned search campaigns.',
      },
      {
        title: 'Meta Advertising',
        description:
          'Use Facebook and Instagram advertising to introduce your brand, promote offers and reach relevant audiences.',
      },
      {
        title: 'Campaign Strategy',
        description:
          'Define campaign objectives, audience targeting, budgets and creative direction before putting your campaigns live.',
      },
      {
        title: 'Performance Optimisation',
        description:
          'Monitor campaign performance and refine targeting, creatives and spending to improve results over time.',
      },
    ],
  },
  {
    id: 'social-media',
    number: '03',
    label: 'START CONVERSATIONS',
    title: 'Social Media Marketing',
    intro:
      'Your social presence should do more than fill a content calendar. We help businesses communicate consistently and build meaningful audience connections.',
    points: [
      {
        title: 'Social Media Strategy',
        description:
          'Choose suitable platforms, define your audience and establish a clear direction for your brand online.',
      },
      {
        title: 'Content Planning',
        description:
          'Develop content calendars that balance brand communication, audience engagement and business goals.',
      },
      {
        title: 'Creative & Publishing',
        description:
          'Create platform-appropriate content and maintain a consistent brand presence across relevant channels.',
      },
      {
        title: 'Audience Engagement',
        description:
          'Build stronger connections through relevant communication, community interaction and consistent messaging.',
      },
    ],
  },
  {
    id: 'content-strategy',
    number: '04',
    label: 'SAY SOMETHING',
    title: 'Content Strategy',
    intro:
      'People connect with brands that have something meaningful to say. We help shape your message and turn it into content worth paying attention to.',
    points: [
      {
        title: 'Brand Messaging',
        description:
          'Develop a consistent tone of voice and communicate what makes your business distinct.',
      },
      {
        title: 'Content Creation',
        description:
          'Create written and visual content suited to your brand, platforms and marketing objectives.',
      },
      {
        title: 'Content Marketing',
        description:
          'Plan useful content that informs audiences, builds credibility and supports your wider marketing strategy.',
      },
      {
        title: 'Content Distribution',
        description:
          'Identify suitable channels and opportunities to get your content in front of the right people.',
      },
    ],
  },
  {
    id: 'website-development',
    number: '05',
    label: 'MAKE AN IMPRESSION',
    title: 'Website Development',
    intro:
      'Your website is often the first serious interaction someone has with your business. We create digital experiences designed to look good, work well and support your goals.',
    points: [
      {
        title: 'Business Websites',
        description:
          'Develop professional websites that communicate your services, establish credibility and make it easy for visitors to take action.',
      },
      {
        title: 'Responsive Design',
        description:
          'Create experiences that adapt to mobile phones, tablets and desktop screens.',
      },
      {
        title: 'SEO Foundations',
        description:
          'Build with sensible page structures, metadata, performance considerations and search-friendly content organisation.',
      },
      {
        title: 'User Experience',
        description:
          'Organise information, navigation and calls to action so visitors can find what they need without unnecessary friction.',
      },
    ],
  },
  {
    id: 'analytics-growth',
    number: '06',
    label: 'GROW WITH PURPOSE',
    title: 'Analytics & Growth',
    intro:
      'Good marketing needs more than good instincts. Understand how people interact with your brand and use meaningful insights to make better decisions.',
    points: [
      {
        title: 'Performance Tracking',
        description:
          'Monitor relevant website and campaign metrics to understand how your digital presence is performing.',
      },
      {
        title: 'Audience Insights',
        description:
          'Understand audience behaviour, traffic sources and engagement patterns to identify opportunities.',
      },
      {
        title: 'Lead Generation',
        description:
          'Improve the journey from discovery to enquiry through better messaging, landing pages and conversion paths.',
      },
      {
        title: 'Continuous Improvement',
        description:
          'Use performance insights to refine campaigns, content and digital experiences over time.',
      },
    ],
  },
]

const process = [
  {
    number: '01',
    title: 'Get to know you.',
    description:
      'We learn about your business, audience, competition and ambitions.',
  },
  {
    number: '02',
    title: 'Find your angle.',
    description:
      'We develop a strategy, creative direction and the right channels.',
  },
  {
    number: '03',
    title: 'Make some noise.',
    description:
      'We create and launch campaigns that put your brand out there.',
  },
  {
    number: '04',
    title: 'Make it better.',
    description:
      'We measure results, learn from performance and keep improving.',
  },
]

function DigitalMarketing() {
  useEffect(() => {
    document.title =
      'Digital Marketing Agency in Jammu & India | Serveazin'

    const description =
      'Serveazin helps businesses across India grow through SEO, Google Ads, social media marketing, website development and content strategy. Based in Jammu, serving businesses across Jammu & Kashmir and beyond.'

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
      <main className="overflow-hidden bg-[#F5F3EA] text-[#10233D]">

        {/* HERO */}
        <section className="px-6 pb-20 pt-12 sm:pb-28 sm:pt-16">
          <div className="mx-auto max-w-7xl">

            <div className="flex items-center justify-between border-b border-[#10233D]/20 pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Serveazin / Creative & Growth
              </p>
              <p className="hidden text-xs font-semibold uppercase tracking-widest text-[#10233D]/50 sm:block">
                Digital Marketing Studio
              </p>
            </div>

            <div className="grid items-center gap-12 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pt-16">

              <div className="relative z-10">
                <div className="mb-8 inline-flex items-center gap-2 border border-[#10233D]/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                  <span className="h-2 w-2 rounded-full bg-[#2458F5]" />
                  Good ideas deserve attention
                </div>

                <h1 className="max-w-3xl text-[3.7rem] font-black leading-[0.91] tracking-[-0.075em] sm:text-7xl lg:text-[6.4rem]">
                  Make
                  <br />
                  <span className="text-[#2458F5]">some noise.</span>
                  <br />
                  Get results.
                </h1>

                <div className="mt-9 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                  <p className="max-w-md text-base leading-8 text-[#526176]">
                    Great marketing isn't about being everywhere.
                    It's about showing up in the right places, saying
                    the right things and giving people a reason to care.
                  </p>

                  <a
                    href="#services"
                    className="inline-flex w-fit items-center gap-3 border-b-2 border-[#2458F5] pb-2 text-sm font-bold transition hover:text-[#2458F5]"
                  >
                    Explore what we do
                    <ArrowDownIcon />
                  </a>
                </div>
              </div>

              {/* TYPOGRAPHIC CAMPAIGN COMPOSITION */}
              <div className="relative mx-auto w-full max-w-[520px]">
                <div className="relative rotate-[-2deg] bg-[#2458F5] px-7 py-8 text-white shadow-[12px_12px_0px_#10233D] sm:px-10 sm:py-10">

                  <div className="flex items-center justify-between border-b border-white/30 pb-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                      The attention project
                    </span>
                    <Lightbulb size={19} />
                  </div>

                  <div className="relative py-12 sm:py-16">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#F4D35E]">
                      Your brand has something to say.
                    </p>

                    <h2 className="text-[4.5rem] font-black uppercase leading-[0.78] tracking-[-0.09em] sm:text-[6rem]">
                      Be
                      <br />
                      <span className="text-[#F4D35E]">the</span>
                      <br />
                      story.
                    </h2>

                    <div className="absolute -right-1 top-10 flex h-20 w-20 rotate-12 items-center justify-center rounded-full bg-[#F4D35E] text-center text-[10px] font-black uppercase leading-tight text-[#10233D] sm:-right-3 sm:h-24 sm:w-24">
                      Less
                      <br />
                      ordinary.
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/30 pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      Creative meets strategy
                    </span>
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="absolute -bottom-9 -left-4 z-10 hidden -rotate-6 bg-[#F4D35E] px-5 py-4 text-[#10233D] shadow-md sm:block">
                  <p className="text-xs font-black uppercase tracking-wider">
                    Scroll less.
                    <br />
                    Remember more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRAND STATEMENT */}
        <section className="bg-[#F4D35E] px-6 py-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.05em] sm:text-4xl">
              Attention is earned.
              <span className="text-[#2458F5]"> Not borrowed.</span>
            </h2>
            <p className="max-w-xs text-sm leading-6 text-[#40502A]">
              Creative thinking, clear strategy and marketing that
              has a reason to exist.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2458F5]">
                A little about our approach
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-black leading-[1.04] tracking-[-0.06em] sm:text-6xl">
                Marketing should feel like
                <span className="text-[#2458F5]"> you.</span>
              </h2>
            </div>

            <div className="lg:pt-12">
              <p className="max-w-xl text-lg leading-9 text-[#526176]">
                Your business isn't a template. Your marketing shouldn't
                be one either. We combine creative ideas with practical
                digital strategy to help businesses build their identity,
                connect with audiences and grow their online presence.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#647084]">
                Headquartered in Jammu, Serveazin works with businesses
                across Jammu & Kashmir and throughout India, helping brands
                strengthen their digital presence and reach the audiences
                that matter to them.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {['Strategy', 'Creativity', 'Digital presence', 'Performance'].map((item) => (
                  <span
                    key={item}
                    className="border border-[#10233D]/20 px-4 py-2 text-xs font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-[#10233D] px-6 py-24 text-white sm:py-28">
          <div className="mx-auto max-w-7xl">

            <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4D35E]">
                  What we bring to the table
                </p>
                <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-[-0.055em] sm:text-6xl">
                  Different skills.
                  <br />
                  One bigger picture.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-white/60">
                From the first search to the final conversion,
                we help bring the pieces of your digital presence together.
                Choose a service to explore what goes into it.
              </p>
            </div>

            <div className="grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <a
                    key={service.number}
                    href={`#${service.id}`}
                    className="group flex min-h-[280px] flex-col border-b border-r border-white/20 p-7 transition-colors duration-300 hover:bg-[#1B3556] sm:p-9"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#F4D35E]">
                        {service.number}
                      </span>
                      <Icon
                        size={23}
                        strokeWidth={1.5}
                        className="text-white/60 transition group-hover:text-[#F4D35E]"
                      />
                    </div>

                    <div className="mt-16">
                      <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F4D35E]">
                        {service.tag}
                      </p>
                      <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-auto flex justify-end pt-7">
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-white/60 transition group-hover:text-[#F4D35E]">
                        Explore service
                        <ArrowUpRight
                          size={19}
                          className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* CREATIVE PHILOSOPHY */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E85B3C]">
                  Our philosophy
                </p>

                <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-6xl">
                  Good ideas.
                  <br />
                  <span className="text-[#2458F5]">Better execution.</span>
                </h2>

                <p className="mt-7 max-w-md text-base leading-8 text-[#526176]">
                  We don't believe in throwing content at a wall and
                  hoping something sticks. Every campaign needs a
                  purpose, a clear audience and a way to understand
                  whether it is working.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-5">

                <div className="flex min-h-[210px] flex-col justify-between bg-[#E85B3C] p-6 text-white sm:min-h-[250px] sm:p-8">
                  <Target size={26} />
                  <div>
                    <p className="text-3xl font-black tracking-tight sm:text-4xl">
                      Right
                      <br />
                      audience.
                    </p>
                    <p className="mt-3 text-xs text-white/75">
                      Reach the people who matter.
                    </p>
                  </div>
                </div>

                <div className="mt-9 flex min-h-[210px] flex-col justify-between bg-[#F4D35E] p-6 text-[#10233D] sm:mt-12 sm:min-h-[250px] sm:p-8">
                  <Lightbulb size={26} />
                  <div>
                    <p className="text-3xl font-black tracking-tight sm:text-4xl">
                      Fresh
                      <br />
                      thinking.
                    </p>
                    <p className="mt-3 text-xs text-[#526176]">
                      Make your brand recognisable.
                    </p>
                  </div>
                </div>

                <div className="flex min-h-[210px] flex-col justify-between bg-[#2458F5] p-6 text-white sm:min-h-[250px] sm:p-8">
                  <TrendingUp size={26} />
                  <div>
                    <p className="text-3xl font-black tracking-tight sm:text-4xl">
                      Real
                      <br />
                      progress.
                    </p>
                    <p className="mt-3 text-xs text-white/75">
                      Keep learning and improving.
                    </p>
                  </div>
                </div>

                <div className="mt-9 flex min-h-[210px] flex-col justify-between border border-[#10233D]/20 p-6 sm:mt-12 sm:min-h-[250px] sm:p-8">
                  <Megaphone size={26} />
                  <div>
                    <p className="text-3xl font-black tracking-tight sm:text-4xl">
                      Clear
                      <br />
                      messaging.
                    </p>
                    <p className="mt-3 text-xs text-[#526176]">
                      Give people a reason to care.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* DETAILED SERVICE SECTIONS */}
        <section className="bg-white px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl">

            <div className="mb-16 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2458F5]">
                A closer look
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-6xl">
                The thinking behind the work.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#647084]">
                Every service plays a different role in your digital
                presence. Explore how each one can contribute to your
                business goals.
              </p>
            </div>

            <div className="space-y-5">
              {serviceDetails.map((service, index) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24 border border-[#10233D]/15 p-7 sm:p-10 lg:p-12"
                >
                  <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

                    <div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-black text-[#2458F5]">
                          {service.number}
                        </span>
                        <span className="h-px w-10 bg-[#2458F5]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#647084]">
                          {service.label}
                        </span>
                      </div>

                      <h3 className="mt-7 text-3xl font-black leading-tight tracking-[-0.05em] sm:text-4xl">
                        {service.title}
                      </h3>

                      <p className="mt-5 max-w-md text-sm leading-8 text-[#647084]">
                        {service.intro}
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <div
                          key={point.title}
                          className="border-t border-[#10233D]/15 pt-5"
                        >
                          <h4 className="font-bold text-[#10233D]">
                            {point.title}
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-[#647084]">
                            {point.description}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className="mt-8 flex justify-end">
                    <a
                      href="#services"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#2458F5] transition hover:gap-3"
                    >
                      Back to services
                      <ArrowRight size={15} className="-rotate-90" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE COVERAGE */}
        <section className="bg-[#F4D35E] px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2458F5]">
                Rooted in India. Open to the world.
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.05em] sm:text-4xl">
                Wherever your audience is, let's reach them.
              </h2>
            </div>

            <p className="text-sm leading-8 text-[#40502A]">
              Headquartered in Jammu, Serveazin supports businesses looking
              for digital marketing services in Jammu and across Jammu &
              Kashmir, while working with organisations throughout India.
              Our digital strategies are shaped around each business and
              the audiences it wants to reach, not limited by location.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#E9E7DD] px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl">

            <div className="mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2458F5]">
                How we work
              </p>
              <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-[-0.055em] sm:text-6xl">
                A good process makes great work possible.
              </h2>
            </div>

            <div className="grid border-l border-t border-[#10233D]/20 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="border-b border-r border-[#10233D]/20 p-7 sm:p-8"
                >
                  <p className="text-sm font-black text-[#2458F5]">
                    {step.number}
                  </p>
                  <h3 className="mt-14 text-2xl font-black tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#647084]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl bg-[#2458F5] px-7 py-14 text-white sm:px-14 sm:py-20">

            <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4D35E]">
                  Your move
                </p>

                <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                  Let's make something people remember.
                </h2>

                <p className="mt-7 max-w-lg text-sm leading-7 text-white/75">
                  Have a business to grow or an idea to put out into
                  the world? We'd love to hear about it.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex w-fit items-center gap-4 bg-[#F4D35E] px-6 py-5 text-sm font-black text-[#10233D] transition hover:bg-white"
              >
                Let's talk
                <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </MainLayout>
  )
}

function ArrowDownIcon() {
  return <ArrowRight size={16} className="rotate-90" />
}

export default DigitalMarketing;