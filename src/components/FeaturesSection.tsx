const features = [
  {
    title: "Real-Time Monitoring",
    description:
      "Our system continuously polls availability status at high frequency so you receive alerts within moments of a restock.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Fast Notifications",
    description:
      "Alertify delivers notifications through supported channels with minimal latency, giving you a competitive edge.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Smart Filtering",
    description:
      "Narrow alerts to specific sizes, variants, or price ranges. Receive only the notifications that matter to you.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Reliable Delivery",
    description:
      "Built on a resilient infrastructure with redundancy checks to ensure alerts are never dropped or missed.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Scalable Alert System",
    description:
      "Whether you track 1 item or hundreds, our platform scales effortlessly without compromising alert speed.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Easy Management",
    description:
      "A clean dashboard lets you add, pause, or remove alert subscriptions at any time with zero friction.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Built for Speed &amp; Reliability
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Alertify combines speed, accuracy, and ease of use into a single alerting solution.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} transition-transform group-hover:scale-110`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-800 mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
