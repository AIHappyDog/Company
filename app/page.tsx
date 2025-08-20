'use client'

import { motion } from "framer-motion"

// Single-file React landing page for deltasylva.com
// Tech: React + TailwindCSS + Framer Motion

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
}

const Section = ({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="py-20 md:py-28 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mb-10 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-3 text-base md:text-lg text-gray-600">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
)

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs md:text-sm text-gray-700 bg-white/60 backdrop-blur">
    {children}
  </span>
)

const Nav = () => (
  <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#home" className="flex items-center gap-3 group">
        <img src="/logo.png" alt="DeltaSylva Logo" className="w-10 h-10 object-contain" />
        <div className="leading-tight">
          <div className="font-semibold">DeltaSylva</div>
          <div className="text-[10px] text-gray-500 tracking-wide">Websites & SaaS Studio</div>
        </div>
      </a>
      <nav className="hidden md:flex gap-8 text-sm">
        <a href="#services" className="hover:text-gray-900 text-gray-600">Services</a>
        <a href="#cases" className="hover:text-gray-900 text-gray-600">Cases</a>
        <a href="#process" className="hover:text-gray-900 text-gray-600">Process</a>
        <a href="#stack" className="hover:text-gray-900 text-gray-600">Tech Stack</a>
        <a href="#contact" className="hover:text-gray-900 text-gray-600">Contact</a>
      </nav>
      <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white px-4 py-2 text-sm shadow-sm hover:shadow-md transition">
        Get a Quote
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 4.5a.75.75 0 0 0-1.5 0v7.69l-2.72-2.72a.75.75 0 1 0-1.06 1.06l4 4a.75.75 0 0 0 1.28-.53v-9.5Z"/><path d="M4.5 12a7.5 7.5 0 1 1 12.73 5.3.75.75 0 1 1-1.06-1.06A6 6 0 1 0 6 12a.75.75 0 0 1-1.5 0Z"/></svg>
      </a>
    </div>
  </header>
)

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white"/>
    <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Pill>Custom Websites · SaaS Products · From 0 to 1 & Beyond</Pill>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Launch Your Ideas, Reach Users, Scale Up
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-2xl">
          DeltaSylva specializes in <span className="font-medium text-gray-900">website development</span> and
          <span className="font-medium text-gray-900"> SaaS solutions</span>. From requirements analysis, prototyping, development, to deployment and growth, we deliver end-to-end solutions.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm md:text-base shadow-sm hover:shadow-md transition">Free Consultation</a>
          <a href="#cases" className="inline-flex items-center justify-center rounded-2xl border border-gray-200 px-5 py-3 text-sm md:text-base text-gray-700 bg-white hover:bg-gray-50">View Cases</a>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-500">
          {["Fast Delivery","Clean Code","Maintainable","Observable","SEO Friendly","Mobile First","Secure & Compliant","Continuous Iteration"].map((t) => (
            <div key={t} className="rounded-xl border border-gray-100 p-3 bg-white/60 backdrop-blur text-center">{t}</div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

const ServiceCard = ({ title, desc, points, badge }: { title: string; desc: string; points: string[]; badge?: string }) => (
  <motion.div
    variants={fadeUp}
    className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition"
  >
    {badge && <div className="mb-3"><Pill>{badge}</Pill></div>}
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    <ul className="mt-4 space-y-2 text-sm text-gray-700">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2">
          <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </motion.div>
)

const Services = () => (
  <Section id="services" title="What We Do" subtitle="Websites and SaaS end-to-end delivery">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-6">
      <ServiceCard
        badge="Corporate / Branding Sites"
        title="High-Converting Websites"
        desc="Fast, structured, SEO friendly, supporting multi-language and blogging."
        points={["Responsive & Accessible","CMS Integration","Analytics & A/B Testing","SEO Optimization"]}
      />
      <ServiceCard
        badge="MVP / Internal Tools"
        title="SaaS MVP Acceleration"
        desc="Deliver minimum viable products within 4–8 weeks."
        points={["Requirement Analysis & Wireframes","Data Modeling & API Design","Auth / Billing / Permissions","Cloud Deployment & Monitoring"]}
      />
      <ServiceCard
        badge="Long-Term Collaboration"
        title="Tech Outsourcing & Ops"
        desc="Month-to-month product development, optimization, and growth."
        points={["Roadmap Planning","Performance & Security","Experimentation & Analytics","Automated Testing & CI/CD"]}
      />
    </motion.div>
  </Section>
)

const CaseCard = ({ logo, name, result, details }: { logo: string; name: string; result: string; details: string }) => (
  <motion.div variants={fadeUp} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-gray-900 text-white grid place-items-center text-sm font-semibold">{logo}</div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-xs text-gray-500">{result}</div>
      </div>
    </div>
    <p className="mt-4 text-sm text-gray-700">{details}</p>
  </motion.div>
)

const Cases = () => (
  <Section id="cases" title="Case Studies" subtitle="Due to NDA, we show generic info only. More details can be shared privately.">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-6">
      <CaseCard logo="A" name="AI Knowledge Base SaaS" result="8 weeks launch · 6.3% conversion in month 1" details="Enterprise internal Q&A with vector search & LLM. Multi-tenant, usage-based billing, event tracking, and dashboards."/>
      <CaseCard logo="B" name="Cross-Border Brand Website" result="Core Web Vitals: All Green" details="Static optimization with edge caching, global delivery; custom CMS and multi-language, SEO-friendly."/>
      <CaseCard logo="C" name="Manufacturing Internal Tool" result="+38% efficiency" details="Procurement & work order system with SSO, permissions, and audit logs."/>
    </motion.div>
  </Section>
)

const Step = ({ n, title, text }: { n: string; title: string; text: string }) => (
  <motion.div variants={fadeUp} className="rounded-3xl border border-gray-100 bg-white p-6">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gray-900 text-white grid place-items-center text-sm font-semibold">{n}</div>
      <div className="font-medium">{title}</div>
    </div>
    <p className="mt-3 text-sm text-gray-700">{text}</p>
  </motion.div>
)

const Process = () => (
  <Section id="process" title="Process" subtitle="Clear and transparent milestones">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-4 gap-6">
      <Step n="01" title="Intro & Estimate" text="30–45 min call to understand business goals & scope, rough timeline & budget."/>
      <Step n="02" title="Prototype & Tech Plan" text="Deliver wireframes, IA, and tech stack. Define milestones & acceptance criteria."/>
      <Step n="03" title="Build & Review" text="Frontend + backend dev, iterative demos & feedback, staging & automated tests."/>
      <Step n="04" title="Launch & Growth" text="Monitoring, optimization, A/B testing, and entering iteration cycle."/>
    </motion.div>
  </Section>
)

const Stack = () => (
  <Section id="stack" title="Tech Stack" subtitle="Choose pragmatic tech over flashy tools">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-5 gap-3">
      {[
        "Next.js / React","Tailwind CSS","Node.js / Fastify","Python / FastAPI","PostgreSQL / Prisma",
        "Redis / Celery","AWS / Vercel","Cloudflare / Edge","Stripe / Paddle","Auth / RBAC",
      ].map((t) => (
        <div key={t} className="rounded-2xl border border-gray-100 bg-white px-4 py-3 text-sm text-gray-700">{t}</div>
      ))}
    </motion.div>
    <div className="mt-6 text-xs text-gray-500">We can also use: Django, Laravel, tRPC, gRPC, Kafka, Supabase, ClickHouse, etc.</div>
  </Section>
)

const CTA = () => (
  <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let's Talk About Your Project</h2>
        <p className="mt-3 text-base md:text-lg text-gray-600">Share your goals, timeline, and budget. We'll propose a clear and actionable plan with pricing.</p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:hi@deltasylva.com" className="inline-flex items-center justify-center rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm md:text-base shadow-sm hover:shadow-md transition">Email: hi@deltasylva.com</a>
          <a href="https://cal.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-gray-200 px-5 py-3 text-sm md:text-base text-gray-700 bg-white hover:bg-gray-50">Book 15-min Call</a>
        </div>
        <p className="mt-3 text-xs text-gray-500">Or add WeChat/WhatsApp – mention in your email.</p>
      </motion.div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="py-10 border-t border-gray-100 text-sm text-gray-600">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="DeltaSylva Logo" className="w-7 h-7 object-contain" />
        <span>© {new Date().getFullYear()} DeltaSylva — All rights reserved.</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#services" className="hover:text-gray-900">Services</a>
        <a href="#cases" className="hover:text-gray-900">Cases</a>
        <a href="#process" className="hover:text-gray-900">Process</a>
        <a href="#stack" className="hover:text-gray-900">Tech Stack</a>
        <a href="#contact" className="hover:text-gray-900">Contact</a>
      </div>
    </div>
  </footer>
)

export default function DeltaSylvaLanding() {
  return (
    <main className="font-[ui-sans-serif] text-gray-900 selection:bg-gray-900 selection:text-white scroll-smooth">
      <Nav />
      <Hero />
      <Services />
      <Cases />
      <Process />
      <Stack />
      <CTA />
      <Footer />
      {/* Floating CTA */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 md:right-8 md:bottom-8 rounded-full shadow-lg bg-gray-900 text-white px-5 py-3 text-sm hover:shadow-xl transition"
      >
        Get a Quote
      </a>
    </main>
  )
}
