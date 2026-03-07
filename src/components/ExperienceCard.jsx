import { useState } from "react"

export default function ExperienceCard({ job }) {
  const [open, setOpen] = useState(false)
  const hasDetails = job.details?.length > 0

  return (
    <div className="relative flex gap-2 sm:gap-7">

      {/* Timeline dot + spine */}
      <div className="flex flex-col items-center shrink-0 pt-6">
        <div
          className="w-3 h-3 rounded-full z-10 shrink-0"
          style={{
            background: "#4f72f5",
            boxShadow: "0 0 0 4px rgba(79,114,245,0.18), 2px 2px 5px #bcc0cb, -2px -2px 5px #ffffff"
          }}
        />
        <div
          className="w-px flex-1 mt-2"
          style={{ background: "linear-gradient(to bottom, #c5c9d4, transparent)" }}
        />
      </div>

      {/* Card */}
      <div
        className={`flex-1 mb-8 rounded-2xl overflow-hidden transition-all duration-200 ${
          hasDetails ? "cursor-pointer" : ""
        } neu-raised`}
        onClick={() => hasDetails && setOpen(!open)}
      >
        <div className="p-5 sm:p-6">

          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                {job.company}
              </h3>
              <p className="text-sm mt-0.5 font-medium" style={{ color: "#4f72f5" }}>
                {job.role}
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <span className="text-slate-400 text-xs sm:text-sm font-mono">
                {job.years}
              </span>
              {hasDetails && (
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center neu-raised-sm transition-all duration-200"
                  style={open ? { boxShadow: "inset 2px 2px 5px #bcc0cb, inset -2px -2px 5px #ffffff" } : {}}
                >
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    style={{ color: "#4f72f5" }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Summary */}
          <p className="mt-3 text-slate-500 text-sm leading-relaxed">
            {job.summary}
          </p>

        </div>

        {/* Expandable details */}
        {hasDetails && (
          <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <div className="overflow-hidden">
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 space-y-2.5">
                <div
                  className="h-px mb-4"
                  style={{ background: "linear-gradient(to right, rgba(79,114,245,0.3), transparent)" }}
                />
                {job.details.map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="shrink-0 font-bold text-xs mt-0.5" style={{ color: "#4f72f5" }}>▸</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
