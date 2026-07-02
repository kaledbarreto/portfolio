const techStack = 'React · TypeScript · JavaScript · SQL'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-creme border-b-2 border-dark"
      aria-label="Introduction"
    >
      {/* Subtle texture — replaces the old side geometry */}
      <div
        className="dot-pattern absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 py-24 lg:py-32 min-h-screen flex flex-col items-center justify-center text-center">
        {/* Kicker */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-2 h-2 bg-bauhaus-red" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-bauhaus-blue">
            Front-end Developer · Brasil
          </span>
          <span className="w-2 h-2 bg-bauhaus-red" aria-hidden="true" />
        </div>

        {/* Name — the main impact element */}
        <h1
          className="font-black leading-[0.85] tracking-tight text-dark mt-6"
          style={{ fontSize: 'clamp(4.5rem, 14vw, 11.5rem)' }}
        >
          Kaled
          <br />
          <span className="text-bauhaus-red">Barreto</span>
        </h1>

        {/* Typed tech line — nods to code / terminal without breaking the type system */}
        <p className="mt-8 lg:mt-10 flex items-baseline justify-center gap-1 font-semibold text-dark text-sm sm:text-base lg:text-xl tracking-wide">
          <span className="text-bauhaus-blue" aria-hidden="true">
            &lt;
          </span>
          <span
            className="typewriter"
            style={
              {
                '--type-chars': techStack.length,
              } as React.CSSProperties
            }
          >
            <span className="typewriter-ghost" aria-hidden="true">
              {techStack}
            </span>
            <span className="typewriter-reveal">{techStack}</span>
          </span>
          <span className="text-bauhaus-blue" aria-hidden="true">
            /&gt;
          </span>
        </p>

        <p className="text-sm text-dark/60 mt-3">
          Portuguese (Native) &amp; English (Full Professional)
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="#contact"
            className="card-hover inline-block border-2 border-dark bg-bauhaus-blue text-white font-semibold px-7 py-3 text-sm uppercase tracking-[0.08em]"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="card-hover inline-block border-2 border-dark bg-transparent text-dark font-semibold px-7 py-3 text-sm uppercase tracking-[0.08em]"
          >
            View Experience
          </a>
        </div>
      </div>
    </section>
  )
}
