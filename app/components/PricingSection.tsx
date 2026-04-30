import PricingCalculator from "./PricingCalculator";

const comparisonRows = [
  {
    metric: "Starting price",
    lmm: "$199/route",
    competitor: "$500–$2,000/campaign",
    lmmGood: false,
    competitorBad: false,
  },
  {
    metric: "Category exclusivity",
    lmm: "Yes",
    competitor: "Rarely",
    lmmGood: true,
    competitorBad: true,
  },
  {
    metric: "QR tracking + dashboard",
    lmm: "Included",
    competitor: "Usually extra",
    lmmGood: true,
    competitorBad: true,
  },
  {
    metric: "Done-for-you design",
    lmm: "Included",
    competitor: "Often extra",
    lmmGood: true,
    competitorBad: true,
  },
  {
    metric: "Transparent pricing",
    lmm: "Full matrix upfront",
    competitor: "Custom quote required",
    lmmGood: true,
    competitorBad: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 space-y-20">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container text-xs font-semibold rounded-full mb-6">
            PRICING
          </span>
          <h2 className="text-4xl font-bold tracking-tight leading-tight text-primary mb-5">
            Transparent Pricing. Scale as You Grow.
          </h2>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            Add more Suburbs or commit longer — your price drops with every step
            up. No hidden fees, no surprise invoices.
          </p>
        </div>

        {/* Interactive Calculator + Matrix */}
        <PricingCalculator />

        {/* Sweet Spot Callout */}
        <div className="relative bg-surface-container-low rounded-3xl p-10 md:p-14 border-l-4 border-primary overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <span className="text-xs font-black text-primary uppercase tracking-widest block mb-4">
            Where Serious Businesses Play
          </span>
          <p className="text-lg leading-relaxed text-on-surface max-w-3xl mb-6">
            Most predictable results come with multiple areas over multiple
            months. That&apos;s where sustained lead flow kicks in. Single-route,
            single-month campaigns can and do work — but the results and ROI are
            less predictable.
          </p>
          <div className="inline-flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-2xl shadow-lg">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
            <p className="font-bold text-sm leading-snug">
              At 1 Area over 4 mailers (8 months), your rate drops to{" "}
              <span className="font-black text-base">$149/route</span> — and
              your pipeline transforms.
            </p>
          </div>
        </div>

        {/* Competitor Comparison */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">
            How We Stack Up
          </h3>
          <p className="text-on-surface-variant mb-8">
            Side-by-side against what you&apos;d typically get elsewhere.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-outline-variant shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container-high">
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-xs font-bold text-on-surface-variant w-1/3 border-r border-outline-variant/50"
                  >
                    Metric
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-xs font-bold text-primary w-1/3"
                  >
                    Local Mail Marketing
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-xs font-bold text-on-surface-variant w-1/3 border-l border-outline-variant/50"
                  >
                    Typical Competitor
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={`border-t border-outline-variant/50 ${
                      i % 2 === 0 ? "bg-white" : "bg-surface-container-lowest"
                    }`}
                  >
                    <td className="px-6 py-5 text-sm font-semibold text-on-surface border-r border-outline-variant/50">
                      {row.metric}
                    </td>
                    <td className="px-6 py-5 text-sm">
                      <div className="flex items-center gap-2">
                        {row.lmmGood && (
                          <span
                            className="material-symbols-outlined text-green-600"
                            style={{
                              fontVariationSettings: "'FILL' 1",
                              fontSize: "18px",
                            }}
                          >
                            check_circle
                          </span>
                        )}
                        <span
                          className={
                            row.lmmGood
                              ? "text-green-700 font-semibold"
                              : "text-primary font-black"
                          }
                        >
                          {row.lmm}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm border-l border-outline-variant/50">
                      <div className="flex items-center gap-2">
                        {row.competitorBad && (
                          <span
                            className="material-symbols-outlined text-slate-400"
                            style={{
                              fontVariationSettings: "'FILL' 1",
                              fontSize: "18px",
                            }}
                          >
                            cancel
                          </span>
                        )}
                        <span className="text-slate-500">{row.competitor}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold tracking-tight mb-4">
              No Surprises. No Sales Pressure. Just Pick Your Areas.
            </h3>
            <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
              Your price is in the matrix above. When you&apos;re ready, we&apos;ll confirm
              availability and get your first mailer scheduled.
            </p>
            <a
              href="#lead-form"
              className="inline-block px-10 py-4 bg-white text-primary font-black text-lg rounded-xl shadow-xl hover:bg-primary-fixed transition-all active:scale-95"
            >
              Build My Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
