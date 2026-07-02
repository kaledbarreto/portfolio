export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-creme border-b-2 border-dark py-24 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto line-pattern">
        <div className="flex gap-8 lg:gap-16 items-start">
          {/* Vertical section label */}
          <div
            className="hidden sm:block font-black text-bauhaus-blue select-none shrink-0"
            style={{
              writingMode: 'vertical-lr',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              transform: 'rotate(180deg)',
              opacity: 0.9,
            }}
            aria-hidden="true"
          >
            [01]
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bauhaus-blue mb-3">
              [01]
            </p>
            <h2
              id="about-heading"
              className="font-black text-dark tracking-tight leading-tight mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Core Directive
            </h2>
            <div className="w-16 h-1 bg-bauhaus-red mb-8" />
            <p className="text-base lg:text-lg text-dark leading-[1.85] max-w-2xl">
              Bachelor&apos;s Degree in Computer Science and Systems Analyst with over{' '}
              <strong className="font-bold">5 years of experience</strong> in web
              development, specializing in front-end engineering to create scalable,
              responsive, and strictly user-centered interfaces (UX/UI). Robust
              background in software architecture, clean code principles, and technical
              execution within agile environments (Scrum).
            </p>
          </div>
        </div>
      </div>

      {/* Decorative outline circle bleeding off edge */}
      <div
        className="absolute border-2 border-dark pointer-events-none select-none"
        style={{
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          right: '-80px',
          top: '-60px',
          opacity: 0.07,
        }}
        aria-hidden="true"
      />
    </section>
  )
}
