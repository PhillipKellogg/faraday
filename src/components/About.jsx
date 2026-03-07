export default function About() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">About</h2>

      <div className="neu-raised rounded-2xl p-6 sm:p-8 space-y-4">
        <p className="text-slate-600 text-base leading-relaxed">
          I'm a fullstack engineer based in the{" "}
          <span className="font-semibold text-slate-800">Greater Toronto Area</span>
          , and the founder of{" "}
          <span className="font-semibold" style={{ color: "#4f72f5" }}>FaradayDev</span>
          {" "} my independent software contracting practice. I have a deep specialization
          in frontend architecture, with 6+ years working across both{" "}
          <span className="font-semibold" style={{ color: "#4f72f5" }}>Vue.js</span>{" "}
          and{" "}
          <span className="font-semibold" style={{ color: "#4f72f5" }}>React</span>
          {" "}, handeling large-scale SPA migrations, building component systems from scratch,
          and owning the full frontend from routing and state to performance and testing.
        </p>
      </div>
    </section>
  )
}
