import type { ExperienceItem } from '@/lib/data'

export default function ExperienceCard({ job }: { job: ExperienceItem }) {
  return (
    <article className="relative bg-white border-2 border-dark p-6 card-hover">
      {/* Timeline connector dot — positioned to hit the spine */}
      <div
        className="absolute rounded-full"
        style={{
          width: '12px',
          height: '12px',
          background: '#e63917',
          border: '2px solid #111111',
          left: '-32px',
          top: '24px',
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
        <div>
          <h3 className="font-bold text-lg leading-snug text-dark">{job.role}</h3>
          <p className="text-bauhaus-blue font-semibold text-sm mt-0.5">{job.company}</p>
        </div>
        <span className="text-xs font-medium text-dark/50 shrink-0 sm:text-right whitespace-nowrap">
          {job.period}
        </span>
      </div>

      <ul className="space-y-2.5">
        {job.bullets.map((bullet, i) => (
          <li key={i} className="text-sm text-dark leading-relaxed flex gap-3">
            <span className="text-bauhaus-red font-bold shrink-0 mt-0.5" aria-hidden="true">
              —
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
