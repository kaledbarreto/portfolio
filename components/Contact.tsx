import { links } from '@/lib/data'

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-bauhaus-blue overflow-hidden border-t-2 border-dark"
    >
      {/* Background decorative circles */}
      <div
        className="absolute rounded-full border-2 border-white pointer-events-none select-none"
        style={{ width: '500px', height: '500px', left: '-120px', bottom: '-120px', opacity: 0.08 }}
        aria-hidden="true"
      />
      <div
        className="absolute rounded-full border-2 border-white pointer-events-none select-none"
        style={{ width: '280px', height: '280px', right: '-60px', top: '-60px', opacity: 0.08 }}
        aria-hidden="true"
      />
      {/* Small yellow rectangle accent */}
      <div
        className="absolute bg-bauhaus-yellow pointer-events-none"
        style={{ width: '120px', height: '8px', right: '10%', bottom: '30%', opacity: 0.5 }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-6">
          [07] — Connection
        </p>

        <h2
          id="contact-heading"
          className="font-black text-white tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          Let&apos;s Work Together
        </h2>

        {/* Yellow rule */}
        <div className="w-20 h-1 bg-bauhaus-yellow mx-auto mt-8 mb-10" />

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <a
            href={`mailto:${links.email}`}
            className="contact-link border-2 border-white/40 text-white font-semibold px-8 py-4 text-sm uppercase tracking-[0.08em]"
            aria-label="Send email to Kaled Barreto"
          >
            {links.email}
          </a>
          <a
            href={`https://${links.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link border-2 border-white/40 text-white font-semibold px-8 py-4 text-sm uppercase tracking-[0.08em]"
            aria-label="View Kaled Barreto on LinkedIn"
          >
            LinkedIn ↗
          </a>
          <a
            href={`https://${links.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link border-2 border-white/40 text-white font-semibold px-8 py-4 text-sm uppercase tracking-[0.08em]"
            aria-label="View Kaled Barreto on GitHub"
          >
            GitHub / Portfolio ↗
          </a>
        </div>
      </div>

      <footer className="relative z-10 text-center pb-8 px-6">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Kaled Barreto. Built with Next.js &amp; TypeScript.
        </p>
      </footer>
    </section>
  )
}
