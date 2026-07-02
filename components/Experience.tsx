import { experience } from '@/lib/data'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-dark border-b-2 border-dark py-24 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bauhaus-red mb-3">
          [04]
        </p>
        <h2
          id="experience-heading"
          className="font-black text-white tracking-tight leading-tight mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Trajectory
        </h2>
        <div className="w-16 h-1 bg-bauhaus-red mb-14" />

        {/* Timeline */}
        <div className="relative">
          {/* Spine */}
          <div
            className="absolute top-0 bottom-0 bg-white/15"
            style={{ left: 0, width: '1px' }}
            aria-hidden="true"
          />

          {/* Cards — pl-8 so cards start at 32px, dot at left:-32px aligns to spine */}
          <div className="pl-8 space-y-8">
            {experience.map((job, i) => (
              <ExperienceCard key={i} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
