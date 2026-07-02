import { certifications } from '@/lib/data'

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="bg-creme border-b-2 border-dark py-24 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bauhaus-blue mb-3">
          [05]
        </p>
        <h2
          id="certifications-heading"
          className="font-black text-dark tracking-tight leading-tight mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Certifications
        </h2>
        <div className="w-16 h-1 bg-bauhaus-yellow mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col border-2 border-dark p-6 bg-white card-hover"
              style={{ borderTopWidth: '6px', borderTopColor: cert.accentColor }}
            >
              {/* Accent square */}
              <div
                className="w-3 h-3 mb-5 shrink-0"
                style={{ background: cert.accentColor }}
                aria-hidden="true"
              />

              <h3 className="font-bold text-sm text-dark leading-snug flex-1">
                {cert.title}
              </h3>

              <div className="mt-auto pt-6">
                <p className="text-xs text-dark/50 mb-1">{cert.issuer}</p>
                <p
                  className="font-black text-dark"
                  style={{ fontSize: '2.25rem', lineHeight: 1 }}
                >
                  {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
