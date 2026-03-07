export default function Hero() {
  return (
    <section className="space-y-7">

      {/* Availability badge */}
      {/* <div className="fade-up-1">
        <span
          className="neu-raised-sm inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
          style={{ color: "#16a34a" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#16a34a", boxShadow: "0 0 6px #16a34a" }}
          />
          Available for new opportunities
        </span>
      </div> */}

      <div className="fade-up-2 space-y-2">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #1e293b 0%, #4f72f5 100%)" }}
          >
            Phil Kellogg
          </span>
        </h1>
        <p className="text-lg text-slate-500 font-normal mt-3">
          Senior Software Engineer &nbsp;&mdash;&nbsp;{" "}
          <span style={{ color: "#4f72f5" }} className="font-medium">Frontend Specialist</span>
        </p>
      </div>

      <p className="fade-up-3 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
        I architect scalable frontend systems with Vue 3, Nuxt, and TypeScript,
        and contribute across the full stack with Laravel and Node.js.
        I have a thing for turning legacy codebases into something you're actually proud to work in.
      </p>

      <div className="fade-up-4 flex flex-wrap gap-3 pt-1">
        <a
          href="https://github.com/phillipkellogg"
          className="neu-btn-accent inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold"
        >
          GitHub
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/phillipkellogg"
          className="neu-btn inline-flex items-center px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-700"
        >
          LinkedIn
        </a>
        <a
          href="mailto:kelloggphillip@gmail.com"
          className="neu-btn inline-flex items-center px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-700"
        >
          Email me
        </a>
      </div>

    </section>
  )
}
