import Link from "next/link";

const footerLinks = [
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/" className="flex items-center gap-2" aria-label="Alertify home">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </span>
              <span className="text-lg font-bold text-white tracking-tight">Alertify</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Real-time product availability alerts for people who don't want to miss a restock.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Disclaimer + copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
            <strong className="text-slate-400">Disclaimer:</strong> This platform provides informational alerts only and does not sell, distribute, or facilitate the purchase of any physical products. Alertify is an independent service and is not affiliated with any brand, manufacturer, or retailer.
          </p>
          <p className="text-xs text-slate-600 shrink-0">
            © {new Date().getFullYear()} Alertify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
