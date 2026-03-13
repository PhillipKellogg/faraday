interface Category {
  label: string;
  accent: string;
  skills: string[];
}

const categories: Category[] = [
  {
    label: 'Frontend',
    accent: '#4f72f5',
    skills: ['Vue 2/3', 'React', 'Nuxt', 'Pinia', 'TypeScript', 'Tailwind', 'PrimeVue', 'SCSS'],
  },
  {
    label: 'Backend',
    accent: '#7c3aed',
    skills: ['Laravel', 'PHP', 'Node.js', 'Express', 'Python', 'FastAPI'],
  },
  {
    label: 'Testing',
    accent: '#059669',
    skills: ['Vitest', 'Jest', 'Cypress', 'Playwright'],
  },
  {
    label: 'Databases',
    accent: '#d97706',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'Redis'],
  },
  {
    label: 'DevOps',
    accent: '#dc2626',
    skills: ['Docker', 'Linux', 'GitHub Actions', 'AWS'],
  },
];

export default function Skills() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Technical Skills</h2>

      <div className="space-y-7">
        {categories.map(({ label, accent, skills }) => (
          <div key={label}>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: accent }}
            >
              {label}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="neu-inset px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
