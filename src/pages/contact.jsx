
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import MainLayout from '../components/MainLayout'

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      formRef.current.reset()
      setStatus('success')
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }

  return (
    <MainLayout>
      <section className="bg-[#F7F9FC] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3563E9]">
              Contact Serveazin
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#102A43] sm:text-5xl">
              Let's talk about
              <span className="text-[#3563E9]"> what's next.</span>
            </h1>

            <p className="mt-5 text-base leading-7 text-[#526477]">
              Have a project, need a technology solution, or want to explore
              one of our products? Tell us what you have in mind. Our team
              will get back to you.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-[#102A43]">
                Send us an enquiry
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#526477]">
                Share a few details and we'll take it from there.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#102A43]">
                      Your name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Full name"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#3563E9] focus:ring-2 focus:ring-[#3563E9]/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#102A43]">
                      Email address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#3563E9] focus:ring-2 focus:ring-[#3563E9]/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#102A43]">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#3563E9] focus:ring-2 focus:ring-[#3563E9]/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#102A43]">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#3563E9] focus:ring-2 focus:ring-[#3563E9]/10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-[#102A43]">
                    What can we help you with? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#526477] outline-none transition focus:border-[#3563E9] focus:ring-2 focus:ring-[#3563E9]/10"
                  >
                    <option value="" disabled>Select a service or product</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Software and SaaS">Software & SaaS</option>
                    <option value="IT Infrastructure and Networking">IT Infrastructure & Networking</option>
                    <option value="ServicesAtDoor">ServicesAtDoor</option>
                    <option value="WhatsApp Automation">WhatsApp Automation</option>
                    <option value="Employee Management System">Employee Management System</option>
                    <option value="In-Store Radio">In-Store Radio</option>
                    <option value="Other">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#102A43]">
                    Tell us about your requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Describe what you're looking for..."
                    className="w-full resize-y rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#3563E9] focus:ring-2 focus:ring-[#3563E9]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#3563E9] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#244FC7] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === 'sending' ? 'Sending enquiry...' : 'Send enquiry'}
                  {status !== 'sending' && <span className="ml-2">→</span>}
                </button>

                {status === 'success' && (
                  <p role="status" className="text-sm font-medium text-green-700">
                    Your enquiry has been sent successfully. We'll be in touch!
                  </p>
                )}

                {status === 'error' && (
                  <p role="alert" className="text-sm font-medium text-red-600">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-[#102A43] p-7 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200">
                  Get in touch
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                 <h2 className="mt-3 text-2xl font-bold leading-snug">
  Let's make something great happen.
</h2>
                </h2>

                <div className="mt-8 space-y-6 text-sm">
                  <div>
                    <p className="text-white/50">Email</p>
                    <a
                      href="mailto:contact@serveazin.com"
                      className="mt-1 inline-block font-medium transition hover:text-blue-200"
                    >
                      contact@serveazin.com
                    </a>
                  </div>

                  <div>
                    <p className="text-white/50">WhatsApp</p>
                    <a
                      href="https://wa.me/919149501021"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block font-medium transition hover:text-blue-200"
                    >
                      +91 9149501021
                    </a>
                    <p className="mt-1 text-xs text-white/45">
                      Temporary contact number
                    </p>
                  </div>

                  <div>
                    <p className="text-white/50">Office address</p>
                    <p className="mt-1 max-w-xs font-medium leading-6">
                      1, 7, Shakti Nagar, Bakshi Nagar,
                      Jammu, Jammu & Kashmir – 180001
                    </p>
                  </div>

                  <div>
                    <p className="text-white/50">Business hours</p>
                    <p className="mt-1 font-medium">
                      Monday – Friday
                    </p>
                    <p className="text-white/75">Until 7:00 PM IST</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/919149501021"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#102A43] transition hover:bg-blue-50"
                >
                  Chat on WhatsApp <span className="ml-2">↗</span>
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="p-5">
                  <h3 className="font-semibold text-[#102A43]">
                    Find our office
                  </h3>
                  <p className="mt-1 text-sm text-[#526477]">
                    Shakti Nagar, Bakshi Nagar, Jammu
                  </p>
                </div>

                <iframe
                  title="Serveazin office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50202.52221655174!2d74.83384026249225!3d32.74374228328367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e845898026c99%3A0x1017ae7aba5679a6!2s1%2C%207%2C%20Shakti%20Nagar%2C%20Bakshi%20Nagar%2C%20Jammu%2C%20180001!5e0!3m2!1sen!2sin!4v1793873899030!5m2!1sen!2sin"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Contact
