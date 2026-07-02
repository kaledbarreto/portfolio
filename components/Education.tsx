import { education } from '@/lib/data'

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-creme border-b-2 border-dark py-24 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bauhaus-blue mb-3">
          [06]
        </p>
        <h2
          id="education-heading"
          className="font-black text-dark tracking-tight leading-tight mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Academic Background
        </h2>
        <div className="w-16 h-1 bg-bauhaus-pink mb-14" />

        <div
          className="border-l-[6px] border-bauhaus-pink pl-8 lg:pl-12"
        >
          {education.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto] gap-4 items-center py-8 ${
                i < education.length - 1 ? 'border-b-2 border-dark' : ''
              }`}
            >
              <div>
                <h3
                  className="font-black text-dark tracking-tight leading-tight"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
                >
                  {item.degree}
                </h3>
                <p className="text-bauhaus-blue font-semibold text-base mt-1">
                  {item.institution}
                </p>
                <p className="text-dark/50 text-sm mt-1">{item.period}</p>
              </div>

              {/* Institution badge */}
              <div className="w-16 h-16 bg-bauhaus-yellow border-2 border-dark flex items-center justify-center shrink-0">
                <span className="font-black text-[0.5rem] text-dark text-center leading-tight px-1">
                  {item.initials}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
