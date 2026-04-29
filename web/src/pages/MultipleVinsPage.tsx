import { Container } from '../components/Container'
import { VehicleCard } from '../components/VehicleCard'
import type { Vehicle } from '../types/vehicle'

const vehicles: Vehicle[] = [
  {
    vehicleType: 'SUV',
    make: 'Lexus',
    model: 'RX 450H F SPORT',
    year: 2022,
    vin: '2T2YGMDA5NC089856',
    mileageText: '14,636 mi',
    priceText: 'USD $47,998',
    location: 'Test location',
    status: 'Static test listing',
    imageSrc: '/images/lexus-real.jpg',
    imageAlt: 'Lexus RX vehicle image',
  },
  {
    vehicleType: 'Sedan',
    make: 'BMW',
    model: '5 Series 530E iPerformance',
    year: 2023,
    vin: 'WBA13AG08PCL44897',
    mileageText: '26,881 mi',
    priceText: 'USD $36,998',
    location: 'Test location',
    status: 'Static test listing',
    imageSrc: '/images/BMW-5-real.jpg',
    imageAlt: 'BMW 5 Series vehicle image',
  },
  {
    vehicleType: 'Pickup Truck',
    make: 'Ford',
    model: 'F-250SD LARIAT',
    year: 2024,
    vin: '1FT7W2BT2REF71652',
    mileageText: '29,103 mi',
    priceText: 'USD $74,298',
    location: 'Test location',
    status: 'Static test listing',
    imageSrc: '/images/ford-real.jpg',
    imageAlt: 'Ford F-250 vehicle image',
  },
]

export function MultipleVinsPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F7FAFD] via-[#F4F8FD] to-[#EEF4FA]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-200/24 blur-3xl" />
        <div className="absolute bottom-10 -left-20 h-72 w-72 rounded-full bg-sky-100/35 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0, 89, 187, 0.10) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <Container data-testid="multiple-vins-page" className="relative z-10 py-12 sm:py-14">
        <section className="mb-10">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#0A192F] text-[11px] font-semibold tracking-[0.12em]">
                Multiple VINs
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-200 text-neutral-700 text-[11px] font-semibold tracking-[0.12em]">
                Static test listings
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-200 text-amber-950 text-[11px] font-semibold tracking-[0.12em]">
                Automation ready
              </span>
            </div>
            <h1 className="text-[34px] sm:text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-primary mb-3">
              Multiple VINs Scenario
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-on-surface-variant/90">
              This page contains several valid visible VIN codes for testing
              multiple VIN detection and selection flows.
            </p>
          </div>
        </section>

        <section className="mb-8 bg-white border border-[#DDE3EA] rounded-xl p-6 sm:p-7 shadow-soft-navy-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-semibold tracking-[0.12em] text-on-surface-variant/80">
                Keywords
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    shapeRendering="geometricPrecision"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                </span>
                <input
                  className="w-full pl-9 pr-4 h-10 bg-white border border-[#DDE3EA] rounded-lg text-[14px] outline-none"
                  placeholder="Search vehicles..."
                  type="text"
                  defaultValue=""
                  readOnly
                  aria-disabled="true"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-semibold tracking-[0.12em] text-on-surface-variant/80">
                Year Range
              </label>
              <select
                className="w-full px-4 h-10 bg-white border border-[#DDE3EA] rounded-lg text-[14px] outline-none appearance-none"
                defaultValue="All Years"
                disabled
              >
                <option>All Years</option>
                <option>2022 - 2024</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-semibold tracking-[0.12em] text-on-surface-variant/80">
                Location
              </label>
              <select
                className="w-full px-4 h-10 bg-white border border-[#DDE3EA] rounded-lg text-[14px] outline-none appearance-none"
                defaultValue="Any Location"
                disabled
              >
                <option>Any Location</option>
                <option>Test location</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-semibold tracking-[0.12em] text-on-surface-variant/80">
                Status
              </label>
              <select
                className="w-full px-4 h-10 bg-white border border-[#DDE3EA] rounded-lg text-[14px] outline-none appearance-none"
                defaultValue="Static test listing"
                disabled
              >
                <option>Static test listing</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                className="w-full h-10 bg-slate-50 border border-[#DDE3EA] text-primary font-semibold rounded-lg text-[14px] inline-flex items-center justify-center gap-2"
                type="button"
                disabled
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M4 7h16" />
                  <path d="M10 12h10" />
                  <path d="M6 12h.01" />
                  <path d="M14 17h6" />
                  <path d="M10 17h.01" />
                </svg>
                Reset Filters
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehicles.map((v) => (
            <VehicleCard key={`${v.year}-${v.make}-${v.model}`} vehicle={v} />
          ))}
        </div>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-[#0A192F] p-6 rounded-xl border border-[#0A192F]/20 shadow-soft-navy-sm">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2 text-slate-100">
                <span className="h-9 w-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    shapeRendering="geometricPrecision"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 8h8" />
                    <path d="M8 12h5" />
                  </svg>
                </span>
                <div>
                  <h2 className="font-semibold text-[16px] leading-[1.2]">
                    Automation Context
                  </h2>
                  <p className="text-[12px] text-slate-200/70 leading-[1.4] mt-0.5">
                    Technical QA reference
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center h-7 px-3 rounded-full bg-white/10 border border-white/10 text-slate-100 text-[11px] font-semibold tracking-[0.12em]">
                DOM stable
              </span>
            </div>

            <p className="text-slate-200/85 text-[13px] leading-[1.55] mb-5">
              Built for deterministic browser-extension validation, this page
              exposes three stable vehicle records with visible VIN targets and
              predictable DOM hooks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              {[
                {
                  title: '3 VIN targets',
                  subtitle: 'Visible raw text',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      shapeRendering="geometricPrecision"
                    >
                      <path d="M4 7h16" />
                      <path d="M4 12h10" />
                      <path d="M4 17h12" />
                    </svg>
                  ),
                },
                {
                  title: 'Fixed selectors',
                  subtitle: 'Stable test IDs',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      shapeRendering="geometricPrecision"
                    >
                      <path d="M10 13a5 5 0 007.54.54l1.92-1.92a5 5 0 00-7.07-7.07L11 4.93" />
                      <path d="M14 11a5 5 0 00-7.54-.54L4.54 12.38a5 5 0 007.07 7.07L13 18.07" />
                    </svg>
                  ),
                },
                {
                  title: 'Repeatable runs',
                  subtitle: 'No dynamic data',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      shapeRendering="geometricPrecision"
                    >
                      <path d="M3 12a9 9 0 0115.36-6.36" />
                      <path d="M18 3v4h-4" />
                      <path d="M21 12a9 9 0 01-15.36 6.36" />
                      <path d="M6 21v-4h4" />
                    </svg>
                  ),
                },
              ].map((m) => (
                <div
                  key={m.title}
                  className="rounded-lg bg-white/10 border border-white/10 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="h-8 w-8 rounded-md bg-white/10 border border-white/10 flex items-center justify-center text-slate-100">
                      {m.icon}
                    </div>
                    <span className="text-[11px] font-semibold tracking-[0.12em] text-slate-200/70 uppercase">
                      Metric
                    </span>
                  </div>
                  <p className="mt-3 text-slate-100 text-[13px] font-semibold leading-[1.3]">
                    {m.title}
                  </p>
                  <p className="mt-1 text-slate-200/75 text-[12px] leading-[1.45]">
                    {m.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#061225] p-4 rounded-lg border border-white/10">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-slate-300/75 block text-[11px] font-mono tracking-[0.14em]">
                  SELECTOR REFERENCE
                </span>
                <span className="inline-flex items-center h-6 px-2.5 rounded-full bg-white/10 border border-white/10 text-slate-100 text-[10px] font-semibold tracking-[0.12em]">
                  stable
                </span>
              </div>
              <code className="text-slate-100 text-xs font-mono">
                [data-testid="vehicle-card"] [data-testid="vehicle-vin"]
              </code>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#DDE3EA] shadow-soft-navy-sm">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="h-9 w-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#123A6F]">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    shapeRendering="geometricPrecision"
                  >
                    <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
                    <path d="M9 12l2 2 4-5" />
                  </svg>
                </span>
                <div>
                  <h2 className="text-primary font-semibold text-[16px] leading-[1.2]">
                    Scenario Purpose
                  </h2>
                  <p className="text-[12px] text-on-surface-variant/70 leading-[1.4] mt-0.5">
                    Extension behavior under multiple candidates
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center h-7 px-3 rounded-full bg-blue-50 border border-blue-200 text-[#123A6F] text-[11px] font-semibold tracking-[0.12em]">
                Multi VIN flow
              </span>
            </div>

            <p className="text-[13px] leading-[1.55] text-on-surface-variant/90 mb-5">
              Use this page to validate extension behavior when multiple valid
              vehicle identifiers are present in the same viewport.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Detect all candidates',
                  subtitle:
                    'Exactly 3 distinct VIN patterns should be found.',
                  tone: 'text-emerald-700 bg-emerald-50 border-emerald-200',
                },
                {
                  title: 'Resolve user selection',
                  subtitle:
                    'The selected VIN should map to the correct vehicle card.',
                  tone: 'text-blue-700 bg-blue-50 border-blue-200',
                },
                {
                  title: 'Keep extraction stable',
                  subtitle:
                    'Repeated scans should return the same DOM targets.',
                  tone: 'text-slate-700 bg-slate-50 border-slate-200',
                },
              ].map((row) => (
                <div
                  key={row.title}
                  className="rounded-lg border border-[#DDE3EA] bg-[#F8FAFC] p-4"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 h-8 w-8 rounded-md border flex items-center justify-center ${row.tone}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                        shapeRendering="geometricPrecision"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-primary text-[13px] font-semibold leading-[1.35]">
                        {row.title}
                      </p>
                      <p className="text-on-surface-variant/80 text-[12px] leading-[1.5] mt-0.5">
                        {row.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-t-[#DDE3EA]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Expected VIN count', value: '3' },
                  { label: 'Scenario type', value: 'Multiple candidates' },
                  { label: 'Data mode', value: 'Static' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg bg-white border border-[#DDE3EA] p-3"
                  >
                    <p className="text-[10px] font-semibold tracking-[0.12em] text-on-surface-variant/70 uppercase">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[12px] font-semibold text-primary">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  )
}

