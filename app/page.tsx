import Image from "next/image";
import Navbar from "./components/Navbar";
import FaqAccordion from "./components/FaqAccordion";
import LeadForm from "./components/LeadForm";
import PricingSection from "./components/PricingSection";

const galleryItems = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyoZJTI7IlleHL_WPf6EhNxhKHgg2WnA_heyogd9Rb-I-cFURMK-uXEZcc2TmxKdFSf7ymrrGnX9-QEQOCnCAH1oAgXJAPcLF7bVQ5phB0zFnIMU8LW5FGqp4YB_E6KTGLnkRRo6hQoSd3M_hMeHS2jZglWLDY8RgJAcSSoycKK19wytvhINcqDuoPaKe-P4WtkMTJsm9RuulCc34lI_zurpClpOaZifT99YtDmVWdAlMmwIo3V19RuuamJY5ANG5WJj08fEN1Jbs",
    label: "Electrical Services Promo",
    alt: "Direct mail postcard for an electrical services company in navy blue and yellow",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJDj8E--fvLotXted-gMrZSO_3d5Q-pu7JTsYesZHgIDNK8HKvYr4BbTNW2zeh1ikf3NsEZaBrig5p8tH6CoqwZE5L0HWTPWfp5zS_6dcScVIUPn89tVPEF9s3efS-lZrGJGmEvf6_gkgPkHGn6gUkuW8oELYmziCIkQ9nNHSL5pgJLljzLI-zCK0x6Gm2Z6rkDpiXpvMmoLKCrwRK6yTCF3kmjt4qDVCFM8vvFWJdD9rEnuIKvoqi5rXZgPq1KRb99TcfAcooEAU",
    label: "Roofing & Siding Specialist",
    alt: "Elegant large-format postcard for a high-end roofing contractor with drone-shot slate roof",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7c3q68CjZajkbzVjG_RNbILCTi9B17L9ZTa86becbpfv-DD-GK_Of2zLqVOGS6N32vVj88Vnj6FRtFTEPihXn_RbR04wB5guxhPKyZi0rdSIseG587RE3PKefp20q2MrjT3MK8bnNTb4j7vXMK3GaVmAtyEeSSw0DYL6cu4-Iifg9xAk-8GOwjfwpaS3MS9FtM7HfPvGKk_LXa2nGTdS5LaGTlEv8tUMrahjFkEg3bUD0pgwzJPbsH6W5F-ugy2b1sjnI4_inZSs",
    label: "Landscaping Spring Clean-up",
    alt: "Vibrant direct mail postcard for a landscaping company with spring clean-up urgency banner",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0d66XjNplEBTCYYap0rBJwVAjoOjA5U9d2hhJGPTBjGUqEOMgsZdfNq6LzTFypJSVgLi2gmOF8HU0LvvaUnGJ7xif1XUUSM6zf3DzFMGe43tdTIVt00YFNMqgnNT_SUGCvfjFOk0AZfi3dvCmyKNjuvhc3Dx7phyhmpGLjp_RGRFqFMHOv0wekRJDTtUSkG0As0EBXKb0ZNOEaSVuyKlLAhITkECcEGVvHWT-zJ-Xle-EgBzL_Ndm0RXYdbJ7zxDt5a45So5cao",
    label: "Heating & Cooling Solutions",
    alt: "Modern HVAC postcard featuring a professional service technician and 24/7 emergency icon",
  },
];

const benefits = [
  "Immediate availability check for your ZIP codes",
  "Custom pricing proposal based on volume",
  "Free creative audit of your current brand assets",
];

// const footerLinks = [
//   "Terms of Service",
//   "Privacy Policy",
//   "Direct Mail Standards",
//   "Contact Support",
//   "Partner Program",
// ];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-20">
        {/* Hero Section */}
        <section id="how-it-works" className="relative overflow-hidden pt-24 pb-32">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container text-xs font-semibold rounded-full mb-6">
                EXCLUSIVE SUBURB LOCK-IN
              </span>
              <h1 className="text-5xl font-bold tracking-tight leading-[1.1] text-primary mb-6">
                Dominate Your Local Market with Direct Mail Exclusivity.
              </h1>
              <p className="text-lg leading-relaxed text-on-surface-variant mb-10 max-w-xl">
                We help high-end contractors own their neighborhoods. Secure your
                suburb, book your mail dates, and ensure your brand is the only one
                hitting every mailbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all active:scale-95">
                  See Available Suburbs
                </button>
                <button className="px-8 py-4 bg-white border-2 border-primary text-primary font-bold text-lg rounded-xl hover:bg-primary-fixed-dim transition-all">
                  How it Works
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm font-medium text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-green-600"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  100% Exclusivity
                </span>
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-green-600"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  Professional Creative
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-900/10 rounded-3xl -rotate-3 scale-105 blur-xl" />
              <div className="relative z-10 w-full h-125 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx_thJA2dnVBz_5JRyWYpxFlzgxAq1dpyUbIfCfk4zEzETMYkRmknhQ5it2cO5aX0RPrMXw1BWf8ZEZAuQQ1HAOtRFoWqiN-vOIbiebuwjjpDqCQtqXFMM3lLWuxr8zyZg4q5pZ6bzm1X0FmLglZ7TFM-OklHR0oudSPbHemX2Dpvcp37eDdsdmeBWLaPhmI9YGj_meizNLLRR4Zpq-Y8oteWaEC4zNZvOe78qaofZ2eS0lTZly2Ky21-FUpCJ5Y1uDeV3dYtgqdw"
                  alt="Premium HVAC contractor direct mail postcard on a wooden table"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Concept Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-primary mb-4">
                Direct Mail Simplified: The Hotel Model
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl mx-auto">
                Booking your next marketing campaign is now as easy as booking a
                vacation. Select your suburb, pick your dates, and secure your room.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "location_on",
                  title: "Suburbs = Hotels",
                  body: "Each suburb is a premium 'Hotel' location. You choose where you want your business to reside for the month.",
                  badge: "shield",
                  badgeLabel: "NEIGHBORHOOD EXCLUSIVITY",
                },
                {
                  icon: "calendar_month",
                  title: "Mail Dates = Check-in",
                  body: "Select the specific week you want your postcards to land in mailboxes. We manage the logistics to ensure precision.",
                  badge: "schedule",
                  badgeLabel: "TIMED DISTRIBUTION",
                },
                {
                  icon: "meeting_room",
                  title: "Slots = Rooms",
                  body: "Only one contractor per industry (HVAC, Roofers, Landscapers) per mail date. Your 'room' is yours alone.",
                  badge: "lock",
                  badgeLabel: "COMPETITOR BLOCK-OUT",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-on-surface-variant mb-6">{card.body}</p>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {card.badge}
                    </span>
                    {card.badgeLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingSection />

        {/* Benefits Section */}
        <section id="benefits" className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-12">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold tracking-tight text-primary mb-4">
                  Engineered for Local Contractors
                </h2>
                <p className="text-base text-on-surface-variant">
                  We understand that service providers need ROI, not just &apos;brand
                  awareness&apos;. Our system is built to generate high-value leads.
                </p>
              </div>
              <button className="hidden md:block px-6 py-3 border border-outline text-primary font-bold rounded-lg hover:bg-surface-container-low transition-all">
                View Industry Solutions
              </button>
            </div>
            <div className="grid grid-cols-12 gap-6 h-150">
              <div className="col-span-12 md:col-span-7 bg-primary text-white p-10 rounded-3xl flex flex-col justify-end relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all" />
                <span className="material-symbols-outlined text-5xl mb-6">
                  ads_click
                </span>
                <h3 className="text-2xl font-semibold mb-4">
                  Guaranteed Impressions
                </h3>
                <p className="text-blue-100 max-w-sm">
                  Unlike digital ads that can be skipped, every homeowner physically
                  touches your mail. It sits on the kitchen counter for an average of
                  17 days.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 bg-tertiary-container text-white p-10 rounded-3xl flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-5xl mb-6 block">
                    groups
                  </span>
                  <h3 className="text-2xl font-semibold mb-4">
                    Hyper-Local Targeting
                  </h3>
                </div>
                <p className="text-orange-100">
                  Own the specific ZIP codes where your most profitable jobs are
                  located. No waste, just your ideal demographic.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                  monitoring
                </span>
                <h4 className="text-xl font-semibold mb-2">Trackable ROI</h4>
                <p className="text-on-surface-variant text-sm">
                  Unique QR codes and tracking numbers for every campaign to measure
                  every dollar spent.
                </p>
              </div>
              <div className="col-span-12 md:col-span-8 bg-surface-container text-primary p-8 rounded-3xl flex items-center gap-8">
                <div className="shrink-0 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-4xl">
                    edit_square
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Free Professional Design
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Our in-house team creates your postcards to ensure maximum
                    conversion. You just provide the logo, we do the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Postcard Gallery */}
        <section className="py-24 bg-surface-container-lowest overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-primary">
              Premium Postcard Showcase
            </h2>
          </div>
          <div className="flex gap-8 px-8 overflow-x-auto pb-12 no-scrollbar">
            {galleryItems.map((item) => (
              <div key={item.label} className="shrink-0 w-80 group">
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-slate-100 group-hover:scale-[1.02] transition-transform">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
                <p className="mt-4 font-bold text-primary">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Form Section */}
        <section id="lead-form" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-primary mb-6">
                Ready to Lock in Your Territory?
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant mb-8">
                Our expert marketing consultants will review your goals and check
                suburb availability. No obligation, just a conversation about growth.
              </p>
              <ul className="space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-on-surface">
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1", fontSize: "18px" }}
                      >
                        check
                      </span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-surface-container-high">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <FaqAccordion />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t mt-12 bg-slate-50 border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-6">
          <div>
            <div className="text-lg font-bold text-slate-900 mb-2">
              Local Mail Marketing (LMM)
            </div>
            <p className="text-xs text-slate-500">
              © 2026 Local Mail Marketing (LMM). Professional Direct Mail Solutions
              for Contractors.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {/* {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-slate-500 hover:text-blue-800 hover:underline transition-colors duration-150"
              >
                {link}
              </a>
            ))} */}
          </div>
        </div>
      </footer>
    </>
  );
}
