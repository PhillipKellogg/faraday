interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  name: string;
  status: string;
  tagline: string;
  description: string;
  goals: string[];
  stack: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    name: 'PropertyLeaf',
    status: 'Work in Progress',
    tagline: 'Residential property management for Ontario landlords.',
    description:
      'A full-stack property management platform built for Ontario landlords. PropertyLeaf handles the full rental lifecycle — from onboarding units and tenants to tracking rent, generating legally compliant LTB forms, and giving tenants their own portal for documents and maintenance.',
    goals: [
      'Manage rental properties and units, track tenants and lease dates',
      'Log and track rent payments, flag late/outstanding balances',
      'Generate and e-sign Ontario LTB forms (N4) and Standard Lease agreements with dual landlord + tenant signing',
      'Tenant portal for viewing documents, signing leases, and submitting maintenance requests',
      'Dashboard with revenue/occupancy charts, expiring lease alerts, and per-unit profit breakdown',
      'Annual CSV export for tax/accounting',
    ],
    stack: ['Vue 3', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'Vue I18n', 'Fastify', 'Drizzle ORM', 'PostgreSQL', 'MinIO', 'Stripe', 'pdf-lib', 'Docker', 'Cloudflare Tunnel'],
    links: [
      { label: 'Live', href: 'https://leaf.faradaydev.ca' },
    ],
  },
  {
    name: 'Memorise',
    status: 'Work in Progress',
    tagline: 'Self-hosted spaced repetition — like Anki, but open and community-driven.',
    description:
      'A full-stack monorepo application for spaced repetition learning, built as a more open alternative to Anki. The goal is public deck sharing — anyone can browse and study community decks without an account — with optional login to track progress, save study settings, and publish your own decks to the community library.',
    goals: [
      'Public deck browsing — no account needed to view or study shared decks',
      'User accounts with saved study preferences and personal progress tracking',
      'Community deck library — create, import, and share decks with others',
      'Anki .apkg import support for migrating existing decks',
      'Image and audio card support via MinIO object storage (coming soon)',
      'Redis caching layer for performance at scale (coming soon)',
    ],
    stack: ['React 18', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'SM-2', 'Docker', 'Cloudflare Tunnel'],
    links: [
      { label: 'Live', href: 'https://memorise.faradaydev.ca' },
      { label: 'GitHub', href: 'https://github.com/PhillipKellogg/memorise' },
      { label: 'API Docs', href: 'https://memorise-api.faradaydev.ca/docs' },
    ],
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">

      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Projects</h2>
        <p className="text-slate-500 text-sm mt-1.5 leading-relaxed max-w-lg">
          Self-hosted on local hardware — iterating fast on my own infrastructure lets me
          deploy, test, and break things without ceremony.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.name} className="neu-raised rounded-2xl overflow-hidden">

            <div className="p-5 sm:p-6 space-y-4">

              {/* Header */}
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-bold text-slate-900 text-lg">{project.name}</h3>
                  <span
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full border"
                    style={{ color: '#d97706', background: 'rgba(217,119,6,0.08)', borderColor: 'rgba(217,119,6,0.25)' }}
                  >
                    {project.status}
                  </span>
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neu-raised-sm text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-600 transition-opacity hover:opacity-70"
                    >
                      {link.label}
                      {' '}
                      ↗
                    </a>
                  ))}
                </div>
                <p className="text-sm mt-0.5 font-medium" style={{ color: '#4f72f5' }}>
                  {project.tagline}
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-1.5">
                {project.goals.map((goal) => (
                  <div key={goal} className="flex gap-2.5 text-sm text-slate-500 leading-relaxed">
                    <span className="shrink-0 font-bold text-xs mt-0.5" style={{ color: '#4f72f5' }}>▸</span>
                    <span>{goal}</span>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map((tech) => (
                  <span key={tech} className="neu-inset text-xs font-medium px-3 py-1.5 rounded-lg text-slate-500">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
