import Image from 'next/image'
import { projects } from '@/lib/data'
import type { ProjectItem } from '@/lib/data'

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article
      className="flex flex-col border-2 border-dark bg-white card-hover overflow-hidden"
      style={{ borderTopWidth: '6px', borderTopColor: project.accentColor }}
    >
      {project.image && (
        <div className="relative w-full aspect-[5/3] border-b-2 border-dark bg-creme">
          <Image
            src={project.image}
            alt={`${project.title} — main screen preview`}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        {project.type === 'agency' && (
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-bauhaus-blue mb-2">
            {project.company}
          </p>
        )}

        <h3 className="font-bold text-lg text-dark leading-snug mb-2">{project.title}</h3>
        <p className="text-sm text-dark/70 leading-relaxed flex-1">{project.description}</p>

        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold border-2 border-dark px-2.5 py-1 text-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(project.liveUrl || (project.type === 'personal' && project.repoUrl)) && (
          <div className="flex gap-4 mt-auto pt-4 border-t-2 border-dark">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.08em] text-bauhaus-blue"
              >
                Live ↗
              </a>
            )}
            {project.type === 'personal' && project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.08em] text-bauhaus-blue"
              >
                Code ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

function ProjectGroup({ label, items }: { label: string; items: ProjectItem[] }) {
  if (items.length === 0) return null

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-dark border-b-2 border-dark pb-2 mb-6">
        {label}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const agencyProjects = projects.filter((p) => p.type === 'agency')
  const freelanceProjects = projects.filter((p) => p.type === 'freelance')
  const personalProjects = projects.filter((p) => p.type === 'personal')

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative bg-creme border-b-2 border-dark py-24 px-6 lg:px-16 overflow-hidden"
    >
      {/* Top red stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-bauhaus-red" aria-hidden="true" />

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
        03
      </div>

      <div className="max-w-7xl mx-auto relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bauhaus-blue mb-3">
          [03]
        </p>
        <h2
          id="projects-heading"
          className="font-black text-dark tracking-tight leading-tight mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Selected Work
        </h2>
        <div className="w-16 h-1 bg-bauhaus-red mb-14" />

        {projects.length === 0 ? (
          <div className="border-2 border-dashed border-dark/30 p-12 flex flex-col items-center text-center gap-4">
            <div
              className="w-14 h-14 border-2 border-dark"
              style={{ borderRadius: '50%' }}
              aria-hidden="true"
            />
            <p className="font-bold text-dark text-lg">Projects launching soon</p>
            <p className="text-dark/60 text-sm max-w-md">
              This section is ready — add real project entries to{' '}
              <code className="font-mono text-xs bg-dark text-creme px-1.5 py-0.5">
                lib/data.ts
              </code>{' '}
              to populate it.
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            <ProjectGroup label="Client & Agency Work" items={agencyProjects} />
            <ProjectGroup label="Freelance Client Work" items={freelanceProjects} />
            <ProjectGroup label="Personal Projects" items={personalProjects} />
          </div>
        )}
      </div>
    </section>
  )
}
