const freePlanFeatures = [
  "Up to 5 active product alerts",
  "Standard monitoring interval",
  "Basic notification delivery",
  "Email support",
];

const premiumPlanFeatures = [
  "Unlimited active alerts",
  "Priority monitoring (faster polling)",
  "Priority notification delivery",
  "Smart filtering by variant & size",
  "Alert history & analytics",
  "Dedicated support",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Simple Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Choose the Plan That Fits You
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-base">
            Start for free and upgrade when you need faster, more powerful alerts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Free Plan */}
          <div className="flex flex-col p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-3">
                Free
              </span>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-900">₹0</span>
                <span className="text-slate-400 mb-1.5 text-sm">/month</span>
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Perfect for getting started. No commitment required.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {freePlanFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-green-500 shrink-0" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              id="pricing-free-cta"
              className="block w-full text-center py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:border-blue-300 hover:text-blue-600 transition-all"
            >
              Get Started Free
            </a>
          </div>

          {/* Premium Plan */}
          <div className="relative flex flex-col p-8 rounded-2xl border-2 border-blue-600 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-100 hover:shadow-2xl hover:shadow-blue-200 transition-all">
            {/* Badge */}
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold tracking-wider shadow-sm">
              Most Popular
            </span>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-3">
                Premium
              </span>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold">₹99</span>
                <span className="text-blue-200 mb-1.5 text-sm">/month</span>
              </div>
              <p className="mt-2 text-sm text-blue-100">
                Full access to all features. Cancel anytime.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {premiumPlanFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-blue-50">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-yellow-300 shrink-0" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <button
              id="pricing-premium-cta"
              type="button"
              className="w-full py-3 rounded-xl bg-white text-blue-700 text-sm font-bold hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
            >
              Subscribe — ₹99/month
            </button>
            <p className="text-center text-xs text-blue-200 mt-3">Secure payment · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
