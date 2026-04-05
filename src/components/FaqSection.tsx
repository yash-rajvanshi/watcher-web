"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Do you sell any products?",
    answer:
      "No. Alertify is a purely informational alerting service. We do not sell, distribute, or fulfill any physical products. We only notify you when products become available on third-party platforms.",
  },
  {
    question: "Are you affiliated with any brands or retailers?",
    answer:
      "No. Alertify is an independent platform and has no affiliation, partnership, or endorsement relationship with any brand, manufacturer, or retailer. We operate independently to provide availability information.",
  },
  {
    question: "How are alerts delivered?",
    answer:
      "Alerts are delivered through supported communication channels configured in your account. Delivery methods may vary by plan. We ensure timely delivery with redundancy checks to minimize missed notifications.",
  },
  {
    question: "How quickly will I receive an alert after a restock?",
    answer:
      "Free plan users receive alerts shortly after availability is detected. Premium plan users benefit from priority processing and typically receive alerts faster, giving them an advantage.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Absolutely. You can cancel your Premium subscription at any time. Upon cancellation, your account will revert to the Free plan at the end of the current billing period — no hidden fees.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. We take data privacy seriously and follow industry-standard security practices. Your personal data is never sold to third parties. Please review our Privacy Policy for full details.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-slate-800">{question}</span>
        <span
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-45" : "rotate-0"} text-blue-600`}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-slate-50 text-sm text-slate-500 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Have Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-base">
            Can't find what you're looking for?{" "}
            <a href="#contact" className="text-blue-600 hover:underline font-medium">
              Contact us
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
