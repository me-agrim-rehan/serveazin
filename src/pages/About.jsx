
import MainLayout from '../components/MainLayout'

function About() {
  return (
    <MainLayout>

      {/* Company introduction */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            About Serveazin
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-[#002652] sm:text-6xl">
            Technology with purpose.
            <span className="text-[#2563EB]"> Expertise that moves businesses forward.</span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">

            <p className="text-lg leading-8 text-gray-600">
              Serveazin is a technology company focused on helping businesses
              navigate, adapt to, and grow in an increasingly connected world.
              We bring together expertise across cybersecurity, IT infrastructure,
              software development, and digital growth to address evolving business
              needs.
            </p>

            <p className="text-lg leading-8 text-gray-600">
              Our approach goes beyond delivering services. We aim to create
              practical solutions, build dependable digital systems, and develop
              products that solve real-world problems. Headquartered in Jammu,
              India, we work with a broader vision of serving businesses across
              India and beyond.
            </p>

          </div>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="bg-[#F8FAFC] px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            What Drives Us
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-[#002652] sm:text-5xl">
            Four areas of expertise. One connected vision.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: '01',
                title: 'Secure',
                description: 'Protecting digital environments through cybersecurity, risk management and security governance.',
              },
              {
                number: '02',
                title: 'Connect',
                description: 'Building reliable IT infrastructure, networks and cloud environments.',
              },
              {
                number: '03',
                title: 'Build',
                description: 'Creating software, digital platforms, SaaS products and intelligent automation.',
              },
              {
                number: '04',
                title: 'Grow',
                description: 'Helping businesses expand their digital presence through marketing and strategic growth.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-t-2 border-[#2563EB] pt-6"
              >
                <span className="text-sm font-semibold text-[#2563EB]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#002652]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            The People Behind Serveazin
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-bold leading-tight text-[#002652] sm:text-5xl">
              Leadership built on experience and ambition.
            </h2>

            <p className="max-w-sm text-sm leading-7 text-gray-500">
              A team bringing together technology, strategy and a shared vision
              for meaningful digital solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">

            {/* Mukesh Kumar */}
            <article className="border border-gray-200 bg-white">
              <div className="flex aspect-[5/4] items-center justify-center bg-[#F1F5F9]">
                <div className="flex flex-col items-center gap-3 text-[#94A3B8]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                    <span className="text-3xl font-semibold text-[#002652]">MK</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                  Chief Executive Officer
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#002652]">
                  Mukesh Kumar
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  With around 30 years of experience across IT and enterprise
                  technology, Mukesh brings leadership in cybersecurity,
                  infrastructure, networking and cloud security. His work
                  includes developing security frameworks, managing
                  multi-country IT environments and leading enterprise
                  cybersecurity assessments.
                </p>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Expertise
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      'Cybersecurity',
                      'GRC & IT Audit',
                      'Cloud Security',
                      'Network Infrastructure',
                    ].map((skill) => (
                      <span key={skill} className="bg-[#F1F5F9] px-3 py-2 text-xs text-[#334155]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Credentials
                  </p>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    CISA Certified  
                    <br />
                    AWS Solutions Architect – Associate 
                    <br />
                    Cisco CCNA
                    <br />
                    Aramco SACS-002 Assessor Experience
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/in/mukesh-kumar-3ba07444/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#002652]"
                >
                  LinkedIn <span>↗</span>
                </a>
              </div>
            </article>

            {/* Vansh Kumar */}
            <article className="border border-gray-200 bg-white">
              <div className="flex aspect-[5/4] items-center justify-center bg-[#F1F5F9]">
                <div className="flex flex-col items-center gap-3 text-[#94A3B8]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                    <span className="text-3xl font-semibold text-[#002652]">VK</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                  Chief Technology Officer
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#002652]">
                  Vansh Kumar
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Vansh combines digital marketing, technology and
                  performance-driven strategy. He works across SEO, paid
                  advertising, analytics and digital campaigns, bringing
                  creative thinking and data-led execution together to
                  help businesses strengthen their digital presence.
                </p>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Expertise
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      'SEO',
                      'Google & Meta Ads',
                      'Performance Marketing',
                      'Analytics',
                      'Content Strategy',
                    ].map((skill) => (
                      <span key={skill} className="bg-[#F1F5F9] px-3 py-2 text-xs text-[#334155]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Credentials & Highlights
                  </p>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Google Ads Search Certification
                    <br />
                    Microsoft Learn — Azure Cloud Concepts
                    <br />
                    Microsoft Learn — Power BI
                    <br />
                    Experience in SEO and paid campaigns
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/in/vansh-kumar-4b8248333/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#002652]"
                >
                  LinkedIn <span>↗</span>
                </a>
              </div>
            </article>

            {/* Renu Sharma */}
            <article className="border border-gray-200 bg-white">
              <div className="flex aspect-[5/4] items-center justify-center bg-[#F1F5F9]">
                <div className="flex flex-col items-center gap-3 text-[#94A3B8]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                    <span className="text-3xl font-semibold text-[#002652]">RS</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                  General Director
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#002652]">
                  Renu Sharma
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Renu Sharma is part of the leadership behind Serveazin,
                  contributing to the company's direction and overall
                  operations as it works towards its long-term vision.
                </p>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Leadership
                  </p>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Supporting the company's growth, coordination and
                    organisational direction.
                  </p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

    </MainLayout>
  )
}

export default About
