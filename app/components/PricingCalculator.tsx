"use client";

import { useState } from "react";

const ROUTES_OPTIONS = [1, 2, 3, 4];
const MONTHS_OPTIONS = [1, 2, 3, 4];

function calcPrice(routes: number, months: number): number {
  return Math.max(199 - (routes - 1) * 17 - (months - 1) * 17, 149);
}

export default function PricingCalculator() {
  const [routes, setRoutes] = useState(1);
  const [months, setMonths] = useState(1);

  const pricePerRoute = calcPrice(routes, months);
  const totalPerMailing = pricePerRoute * routes;
  const savings = 199 - pricePerRoute;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Interactive Matrix */}
        <div className="md:col-span-3">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">
            Click any cell to configure your plan
          </p>
          <div className="overflow-x-auto rounded-2xl border border-outline-variant shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container-high">
                  <th
                    scope="col"
                    className="px-5 py-4 text-left text-xs font-bold text-on-surface-variant border-r border-outline-variant/50"
                  >
                    Areas ↓ / Months →
                  </th>
                  {MONTHS_OPTIONS.map((m) => (
                    <th
                      key={m}
                      scope="col"
                      className={`px-5 py-4 text-center text-xs font-bold transition-colors ${
                        m === months ? "text-primary" : "text-on-surface-variant"
                      }`}
                    >
                      {m} Month{m > 1 ? "s" : ""}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROUTES_OPTIONS.map((r) => (
                  <tr key={r} className="border-t border-outline-variant/50">
                    <th
                      scope="row"
                      className={`px-5 py-4 font-semibold text-sm whitespace-nowrap border-r border-outline-variant/50 text-left transition-colors ${
                        r === routes
                          ? "text-primary bg-primary-fixed/20"
                          : "text-on-surface bg-white"
                      }`}
                    >
                      {r} Area{r > 1 ? "s" : ""}
                    </th>
                    {MONTHS_OPTIONS.map((m) => {
                      const p = calcPrice(r, m);
                      const isSelected = r === routes && m === months;
                      const isFloor = p === 149;
                      return (
                        <td
                          key={m}
                          onClick={() => {
                            setRoutes(r);
                            setMonths(m);
                          }}
                          className={`px-5 py-4 text-center cursor-pointer select-none transition-all font-semibold text-sm ${
                            isSelected
                              ? "bg-primary text-white font-black"
                              : isFloor
                              ? "bg-primary-fixed/50 text-primary hover:bg-primary-fixed"
                              : "text-on-surface hover:bg-surface-container-low"
                          }`}
                        >
                          ${p}
                          {isFloor && !isSelected && (
                            <span className="block text-[9px] font-bold text-primary uppercase tracking-wider mt-0.5">
                              floor
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-2 px-1">
            Per area: 2,500 households · Price floor: $149/route/month
          </p>
        </div>

        {/* Controls + Live Price */}
        <div className="md:col-span-2 bg-primary rounded-3xl p-8 text-white flex flex-col gap-6">
          {/* Steppers */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="block text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">
                Number of Areas
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setRoutes(Math.max(1, routes - 1))}
                  disabled={routes <= 1}
                  className="w-10 h-10 rounded-full bg-white/10 text-white text-xl font-bold flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  −
                </button>
                <span className="text-5xl font-black w-10 text-center tabular-nums">
                  {routes}
                </span>
                <button
                  type="button"
                  onClick={() => setRoutes(Math.min(4, routes + 1))}
                  disabled={routes >= 4}
                  className="w-10 h-10 rounded-full bg-white/10 text-white text-xl font-bold flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <span className="block text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">
                Months Commitment
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setMonths(Math.max(1, months - 1))}
                  disabled={months <= 1}
                  className="w-10 h-10 rounded-full bg-white/10 text-white text-xl font-bold flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  −
                </button>
                <span className="text-5xl font-black w-10 text-center tabular-nums">
                  {months}
                </span>
                <button
                  type="button"
                  onClick={() => setMonths(Math.min(4, months + 1))}
                  disabled={months >= 4}
                  className="w-10 h-10 rounded-full bg-white/10 text-white text-xl font-bold flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20" />

          {/* Per-route price */}
          <div>
            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">
              Your Price Per Route
            </p>
            <div className="flex items-end gap-2">
              <span className="text-6xl font-black leading-none tabular-nums">
                ${pricePerRoute}
              </span>
              <span className="text-blue-200 text-sm mb-2">/route/mailing</span>
            </div>
            {savings > 0 && (
              <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1.5 rounded-full mt-3">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1", fontSize: "14px" }}
                >
                  arrow_downward
                </span>
                ${savings} off the base rate
              </span>
            )}
          </div>

          {/* Total */}
          <div className="bg-white/10 rounded-2xl p-5">
            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">
              Your Total Per Mailing
            </p>
            <p className="text-4xl font-black tabular-nums">${totalPerMailing}</p>
            <p className="text-blue-200/70 text-xs mt-1">
              {routes} area{routes > 1 ? "s" : ""} × ${pricePerRoute}/route
            </p>
          </div>

          <a
            href="#lead-form"
            className="block w-full py-3.5 bg-white text-primary font-black rounded-xl hover:bg-primary-fixed transition-all active:scale-95 text-center text-sm"
          >
            Build My Quote →
          </a>
        </div>
      </div>

      {/* Annual Plan Card */}
      <div className="bg-tertiary-container rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-on-tertiary-container uppercase tracking-widest block mb-2">
            Special Annual Marketing Plan
          </span>
          <h4 className="text-xl font-bold text-white mb-2">
            Set and Forget. Own the Area.
          </h4>
          <p className="text-orange-100 text-sm max-w-lg">
            12-month commitment · 6 mailers included · Free design with 2
            seasonal updates. Lock in your suburb for a full year and never worry
            about a competitor claiming your spot.
          </p>
        </div>
        <a
          href="#lead-form"
          className="shrink-0 px-6 py-3 bg-white text-tertiary font-bold rounded-xl hover:bg-orange-50 transition-all active:scale-95 whitespace-nowrap"
        >
          Ask About Annual →
        </a>
      </div>
    </div>
  );
}
