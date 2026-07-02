import { skills } from '@/lib/data'

const groups = [
  { label: 'Primary Stack', items: skills.primary },
  { label: 'Design & UI Systems', items: skills.design },
  { label: 'Tools & Backend', items: skills.tools },
]

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative bg-creme border-b-2 border-dark py-24 px-6 lg:px-16 overflow-hidden"
    >
      {/* Top yellow stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-bauhaus-yellow" aria-hidden="true" />

      {/* Background watermark numeral */}
      <div
        className="absolute font-black text-dark select-none pointer-events-none"
        style={{
          fontSize: 'clamp(8rem, 30vw, 22rem)',
          opacity: 0.03,
          right: '-1rem',
          top: '-1rem',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
        aria-hidden="true"
      >
        02
      </div>

      <div className="max-w-7xl mx-auto relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bauhaus-blue mb-3">
          [02]
        </p>
        <h2
          id="skills-heading"
          className="font-black text-dark tracking-tight leading-tight mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Core Competencies
        </h2>
        <div className="w-16 h-1 bg-bauhaus-blue mb-14" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-dark border-b-2 border-dark pb-2 mb-5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip inline-flex items-center border-2 border-dark px-4 py-1.5 text-sm font-semibold bg-white text-dark cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
