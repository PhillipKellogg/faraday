import ExperienceCard from './ExperienceCard';

interface Job {
  company: string;
  role: string;
  years: string;
  summary: string;
  details?: string[];
}

const jobs: Job[] = [
  {
    company: 'CIBC',
    role: 'Senior Application Developer',
    years: 'Feb 2026 — Present',
    summary:
      'Working on a new product launch within a large enterprise engineering org. Details to come.',
  },
  {
    company: 'Tithe.ly',
    role: 'Software Engineer',
    years: 'Mar 2021 — Feb 2026',
    summary:
      'Led frontend architecture on a large-scale SaaS platform, driving a full migration from a legacy stack to Vue 3 + Laravel and measurably improving performance for 10,000+ users.',
    details: [
      'Architected and delivered a full migration from React + CodeIgniter to Vue 3, Nuxt, Pinia, TypeScript, and Laravel',
      'Redesigned frontend data-fetching and caching patterns — cut user list load times by ~50% for high-volume accounts',
      'Built an admin dashboard and shared component library from scratch, including user search, role management, and scalable data flow',
      'Merged account systems across two products, owning the payment, account-linking, and third-party purchase flows end-to-end',
      'Stabilized a high-volume email feature by refactoring Laravel data access and rebuilding the frontend data layer',
      'Raised frontend test coverage to 80% introducing Vitest (unit) and Playwright (E2E)',
    ],
  },
  {
    company: 'Rentsync',
    role: 'Software Engineer',
    years: 'Oct 2020 — Mar 2021',
    summary:
      'Built Vue frontend features and a full-stack CMS dashboard for a high-traffic real estate platform with 10,000+ property listings.',
    details: [
      'Developed editorial UX improvements across a large Vue frontend',
      'Built the product management dashboard fullstack — Vue, Express, and PostgreSQL',
      'Integrated Redis caching to improve responsiveness and reduce DB load',
    ],
  },
  {
    company: 'Savvy Sale',
    role: 'Junior Software Engineer',
    years: 'Apr 2020 — Aug 2020',
    summary:
      'Built a real-time Vue dashboard and WebSocket chat system with live data sync via Firebase.',
    details: [
      'Developed real-time dashboard UI with Vue.js and Vuetify',
      'Built WebSocket-based chat using Node.js',
      'Integrated Firebase Auth and Firestore for live data synchronization',
    ],
  },
];

export default function Experience() {
  return (
    <section className="space-y-8">

      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Experience</h2>

      <div>
        {jobs.map((job) => (
          <ExperienceCard key={job.company} job={job} />
        ))}
      </div>

    </section>
  );
}
