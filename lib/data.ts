export interface ExperienceItem {
  company: string
  role: string
  period: string
  bullets: string[]
}

interface ProjectBase {
  title: string
  description: string
  stack: string[]
  liveUrl?: string
  accentColor: string
  image?: string // path under /public, e.g. '/boxonboard.png'
}

// Discriminated union — only 'personal' may carry a repoUrl. 'agency' and
// 'freelance' are both real client deliverables (code belongs to the
// client), the only difference is whether it went through an employer/team
// or was done solo and independent of one.
export type ProjectItem =
  | (ProjectBase & { type: 'agency'; company: string }) // built through an employer, with a team
  | (ProjectBase & { type: 'freelance' }) // solo client work, not affiliated with any employer
  | (ProjectBase & { type: 'personal'; repoUrl?: string }) // owned entirely by you

export interface CertificationItem {
  title: string
  issuer: string
  year: string
  accentColor: string
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  initials: string
}

export interface Links {
  email: string
  linkedin: string
  github: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'LabStart',
    role: 'Front-end Developer',
    period: 'June 2024 – Present',
    bullets: [
      'Worked on outsourced projects for multiple companies, collaborating on development and maintenance of scalable and responsive web systems.',
      'Implemented interfaces following rigid design system and accessibility standards to maximize user experience.',
      'Collaborated within cross-functional teams using Agile Methodologies (Scrum), participating in code reviews, dailys, and performance-oriented plannings.',
    ],
  },
  {
    company: 'Cubos Academy',
    role: 'Front-end Developer — Backoffice Squad',
    period: 'November 2022 – August 2023',
    bullets: [
      'Built a responsive B2B2C internal web system connected to dynamic APIs using React, TypeScript, and Ant Design to centralize operational data.',
      'Developed a custom automation bot for alerts and messaging integrated directly into Slack.',
      'Ensured mathematical and visual fidelity when translating UI designs from Figma into production-ready code.',
    ],
  },
  {
    company: 'Cubos Academy',
    role: 'Front-end Developer — Software Residency',
    period: 'April 2022 – July 2022',
    bullets: [
      'Developed a responsive web marketplace designed for investment capitalization and connecting companies with potential investors.',
    ],
  },
  {
    company: 'EJC&T — Empresa Júnior de Ciência e Tecnologia da UFBA',
    role: 'Back-end Developer',
    period: 'April 2020 – March 2021',
    bullets: [
      'Developed robust and efficient web systems prioritizing reliability and functionality using PHP, Laravel, Docker, and PostgreSQL.',
    ],
  },
  {
    company: 'SENAI CIMATEC',
    role: 'Information Technology Intern',
    period: 'June 2020 – June 2021',
    bullets: [
      'Trained Artificial Intelligence models through precise data curation and item selection across video frames.',
    ],
  },
]

// Add real project entries here — Projects.tsx renders a "coming soon"
// placeholder automatically while this stays empty.
export const projects: ProjectItem[] = [
  {
    type: 'agency',
    company: 'LabStart',
    title: 'BoxOnBoard',
    description:
      'Peer-to-peer delivery platform connecting people who need to send packages with travelers heading to the same destination, using spare luggage space for faster, cheaper deliveries.',
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://boxonboard.com.br',
    accentColor: '#1a66ff',
    image: '/boxonboard.png',
  },
  {
    type: 'agency',
    company: 'LabStart',
    title: 'Habeas Cucas',
    description:
      'Legal-themed word puzzle platform for law students and professionals, with interactive crossword challenges on Brazilian law and new puzzles every two days.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://jogar.habeascucas.com.br',
    accentColor: '#e63917',
    image: '/habeascucas.png',
  },
  {
    type: 'agency',
    company: 'LabStart',
    title: 'Cri.Ativos da Favela',
    description:
      'Site for a training initiative offering audiovisual and AI education to youth from Brazilian favelas, run by CUFA and Favela Filmes in partnership with Instituto Heineken and Rock in Rio.',
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://www.criativosdafavela.com.br',
    accentColor: '#f2d13d',
    image: '/criativosdafavela.png',
  },
  {
    type: 'freelance',
    title: 'AMEAQUARIUS',
    description:
      'Site for a non-profit civil association representing 20+ condominiums in the Aquarius neighborhood of Salvador, coordinating infrastructure improvements and resident engagement through events and courses.',
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://ameaquarius-next.vercel.app',
    accentColor: '#f2b6c1',
    image: '/ameaquarius.png',
  },
  {
    type: 'freelance',
    title: 'Odontomóvel — ITBSS',
    description:
      'Site for a Brazil-Germany cooperative bringing a mobile dental clinic to vulnerable communities, offering free oral healthcare and training residents as dental auxiliaries.',
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://odontomovel.vercel.app',
    accentColor: '#1a66ff',
    image: '/odontomovel.png',
  },
  {
    type: 'freelance',
    title: 'Bebê Sitter',
    description:
      'Training and certification platform for childcare providers, connecting families with caregivers trained in safety, child development, first aid, and emotional support.',
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://bebe-sitter.vercel.app',
    accentColor: '#e63917',
    image: '/bebesitter.png',
  },
]

export const skills = {
  primary: [
    'React',
    'TypeScript',
    'JavaScript',
    'SQL',
    'Google Gemini',
    'Streamlit',
    'Clean Code',
    'Artificial Intelligence (AI)',
  ],
  design: [
    'Figma',
    'Ant Design',
    'Bootstrap',
    'SASS',
    'HTML5',
    'CSS3',
    'UX/UI',
    'Graphic Design Fundamentals',
  ],
  tools: [
    'Node.js',
    'Python',
    'PHP',
    'Laravel',
    'PostgreSQL',
    'Docker',
    'Git',
    'GitHub',
    'GitLab',
    'Scrum',
    'Agile Methodologies',
  ],
}

export const certifications: CertificationItem[] = [
  {
    title: 'Pré-MBA em Inteligência Artificial para Negócios',
    issuer: 'XP Educação',
    year: '2024',
    accentColor: '#1a66ff',
  },
  {
    title: 'Fundamentos do Design Gráfico',
    issuer: 'Coursera',
    year: '2023',
    accentColor: '#e63917',
  },
  {
    title: 'Desenvolvedor de Software Backend & Residência de Software — Desenvolvimento Web Supervisionado',
    issuer: 'Cubos Academy',
    year: '2022',
    accentColor: '#f2d13d',
  },
  {
    title: 'Fundamentos das Aplicações Móveis',
    issuer: 'Google Developers',
    year: '2022',
    accentColor: '#f2b6c1',
  },
]

export const education: EducationItem[] = [
  {
    degree: "Bachelor's Degree, Computer Science",
    institution: 'Universidade Salvador — UNIFACS',
    period: '2020 – 2024',
    initials: 'UNIFACS',
  },
  {
    degree: 'Technical Degree, Systems Development',
    institution: 'SENAI CIMATEC',
    period: '2019 – 2020',
    initials: 'SENAI',
  },
  {
    degree: 'English as a Second Language',
    institution: 'inFlux English School',
    period: '2019 – 2021',
    initials: 'inFlux',
  },
]

export const links: Links = {
  email: 'kaledbarreto@gmail.com',
  linkedin: 'linkedin.com/in/kaledbarreto',
  github: 'github.com/kaledbarreto',
}
