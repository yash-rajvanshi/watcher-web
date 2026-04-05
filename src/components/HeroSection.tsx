export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(59,130,246,0.08) 0%, transparent 60%), radial-gradient(circle at 75% 75%, rgba(99,102,241,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="animate-fade-in inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Real-Time Monitoring
        </span>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
          Never Miss a{" "}
          <span className="text-blue-600">Restock</span> Again
        </h1>

        {/* Subtext */}
        <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Get real-time alerts when your desired products become available.
          Alertify monitors availability 24/7 so you're always first in line.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            id="hero-cta-primary"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white text-base font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#pricing"
            id="hero-cta-secondary"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-700 text-base font-semibold border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
          >
            View Plans
          </a>
        </div>

        {/* Trust badges */}
        <div className="animate-fade-in-up delay-400 flex flex-wrap items-center justify-center gap-6 mt-12 text-slate-400 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-green-500">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            No credit card for free plan
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-green-500">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Cancel anytime
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-green-500">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            24/7 monitoring
          </span>
        </div>
      </div>
    </section>
  );
}
