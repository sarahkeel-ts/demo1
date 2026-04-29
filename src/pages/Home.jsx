import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';

const services = [
  { title: 'Calendar & Schedule Coordination', desc: 'stay organized and on track' },
  { title: 'Inbox & Email Management', desc: 'streamlined communication, zero overwhelm' },
  { title: 'Data Entry & Reporting', desc: 'accurate, organized, and easy to access' },
  { title: 'Social Media Management', desc: 'content, scheduling, and strategy' },
  { title: 'Administrative Support', desc: 'reliable behind-the-scenes assistance' },
  { title: 'Social Media Engagement', desc: 'meaningful interaction that builds community' },
  { title: 'Project & Task Management', desc: 'keeping deadlines and priorities aligned' },
  { title: 'Transaction Coordination (Realtor Support)', desc: 'from contract to close' },
  { title: 'Business Planning & Operational Support', desc: 'structure for sustainable growth' },
  { title: 'Marketing Support', desc: 'execution that supports your brand goals' },
  { title: 'Recruiting & Onboarding Assistance', desc: 'finding and organizing the right talent' },
  { title: 'Event Planning & Logistics', desc: 'seamless coordination from start to finish' },
  { title: 'Vendor & Service Provider Research', desc: 'trusted resources, vetted for you' },
  { title: 'Market & Project Research', desc: 'insights that support smart decisions' },
  { title: 'Bookkeeping & Invoicing', desc: 'organized finances, simplified processes' },
  { title: 'And More', desc: 'customized support tailored to your business needs' },
];

const team = [
  {
    name: 'Gi’Anna Killian',
    role: 'CEO, Founder',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    bio: 'Born in Florida and recently relocated to North Carolina, she is a mom of three and the CEO behind the brand. With a Bachelor’s degree in Organizational Management and a specialization in Event Planning, she thrives on organization, people, and purposeful leadership. Many describe her as the glue that holds the business together—balancing strategy, passion, and care in everything she does.',
  },
  {
    name: 'Lindzey Jones',
    role: 'Virtual Support Specialist',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80',
    bio: 'Born in North Carolina and now based in Florida, mom of three with a medical background and a passion for social media management and content creation. Detail-oriented, creative, and reliable, she brings organization and strategy together to help brands grow their online presence. A valuable addition to the company, she’s dedicated to helping businesses stay visible and thrive.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Who we are */}
      <section id="about" className="bg-neutral-surface" aria-labelledby="about-heading">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center py-20 md:py-28">
          <Reveal>
            <h2
              id="about-heading"
              className="font-display text-5xl md:text-6xl text-primary-dark leading-tight"
            >
              Who we are
            </h2>
            <div className="mt-8 space-y-5 text-primary-dark/85 leading-relaxed text-base md:text-lg">
              <p>
                At Busy Bee Solutions, we are dedicated to helping businesses and
                entrepreneurs stay organized, efficient, and focused on what
                matters most&mdash;growth.
              </p>
              <p>
                Our team provides reliable virtual assistant services tailored to
                meet the unique needs of each client. From administrative support
                to client communication and project management, we handle the
                details so you can focus on the big picture.
              </p>
              <p>
                We pride ourselves on professionalism, responsiveness, and
                delivering results that make a real difference.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80"
                alt="A pen resting on a notebook, symbolizing thoughtful planning"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Services Include */}
      <section className="bg-neutral-surface" aria-labelledby="services-heading">
        <div className="container-page pb-20 md:pb-28">
          <Reveal>
            <h2
              id="services-heading"
              className="font-display text-5xl md:text-6xl text-primary-dark leading-tight"
            >
              Our Services Include:
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-10 grid gap-3 md:grid-cols-2 text-primary-dark/90 text-base md:text-lg">
              {services.map((s) => (
                <li key={s.title} className="flex gap-2">
                  <span aria-hidden="true">&bull;</span>
                  <span>
                    <span className="font-semibold">{s.title}</span>{' '}
                    <span className="text-primary-dark/75">&ndash; {s.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="bg-neutral-bg" aria-labelledby="team-heading">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <h2
              id="team-heading"
              className="font-display text-5xl md:text-6xl text-primary-dark leading-tight"
            >
              Meet The Team
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 120}>
                <div>
                  <div className="aspect-[3/4] overflow-hidden rounded-md">
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-3xl md:text-4xl text-primary-dark">
                    {member.name}
                  </h3>
                  <p className="mt-2 font-display text-lg text-primary-dark/80">
                    {member.role}
                  </p>
                  <p className="mt-5 text-primary-dark/85 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-surface"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <span className="font-display italic text-[18vw] leading-none text-primary/5 whitespace-nowrap">
          Busy Bee
        </span>
      </div>

      <div className="relative container-page py-20 md:py-28 grid gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2
              id="contact-heading"
              className="font-display text-5xl md:text-6xl text-primary-dark leading-tight"
            >
              Contact Us
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-md text-primary-dark/85 leading-relaxed">
              Interested in working smarter? Tired of the overload of admin tasks?
              You are in the right place. Submit a request for our team to contact
              you within 48 hours or email directly.
            </p>
            <a
              href="mailto:admin@busybeesolutionscorp.com"
              className="mt-4 inline-block font-display text-lg text-primary-dark hover:underline underline-offset-4"
            >
              admin@busybeesolutionscorp.com
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6"
            action="/?contact=success"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <fieldset className="space-y-3">
              <legend className="font-display text-lg text-primary-dark">Name</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm text-primary-dark/80">
                    First Name <span className="italic">(required)</span>
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="mt-1 w-full rounded-full border border-primary/25 bg-transparent px-5 py-3 text-primary-dark placeholder:text-primary-dark/40 focus:border-primary focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-primary-dark/80">
                    Last Name <span className="italic">(required)</span>
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="mt-1 w-full rounded-full border border-primary/25 bg-transparent px-5 py-3 text-primary-dark placeholder:text-primary-dark/40 focus:border-primary focus:outline-none"
                  />
                </label>
              </div>
            </fieldset>

            <label className="block">
              <span className="text-sm text-primary-dark/80">
                Email <span className="italic">(required)</span>
              </span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-full border border-primary/25 bg-transparent px-5 py-3 text-primary-dark placeholder:text-primary-dark/40 focus:border-primary focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="font-display text-lg text-primary-dark">Message</span>
              <span className="mt-1 block text-sm text-primary-dark/70">
                What services are you interested in?
              </span>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-primary/25 bg-transparent px-5 py-3 text-primary-dark placeholder:text-primary-dark/40 focus:border-primary focus:outline-none"
              />
            </label>

            <button type="submit" className="btn-primary !px-10 font-display tracking-widest">
              SEND
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
