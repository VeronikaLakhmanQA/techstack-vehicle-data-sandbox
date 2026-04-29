import { Container } from '../components/Container'
import type { Vehicle } from '../types/vehicle'

const vehicle: Vehicle = {
  vehicleType: 'SUV',
  make: 'BMW',
  model: 'X3',
  year: 2025,
  vin: '5UX53GP06S9070837',
  mileageText: '24,696 mi',
  priceText: 'USD $45,998',
  location: 'Test location',
  status: 'Static test listing',
  imageSrc: '/images/bmw-x3-real.jpg',
  imageAlt: 'BMW X3 vehicle image',
}

export function SingleVinPage() {
  const highlightStyles: Record<
    string,
    { pill: string; chip: string; icon: string }
  > = {
    Turbocharged: {
      pill: 'bg-indigo-50/70 border-indigo-100 text-[#0A192F]',
      chip: 'bg-white border-indigo-100',
      icon: 'text-indigo-700',
    },
    'All Wheel Drive': {
      pill: 'bg-emerald-50/70 border-emerald-100 text-[#0A192F]',
      chip: 'bg-white border-emerald-100',
      icon: 'text-emerald-700',
    },
    'LED Headlights': {
      pill: 'bg-amber-50/70 border-amber-100 text-[#0A192F]',
      chip: 'bg-white border-amber-100',
      icon: 'text-amber-700',
    },
    'Heated Front Seats': {
      pill: 'bg-orange-50/70 border-orange-100 text-[#0A192F]',
      chip: 'bg-white border-orange-100',
      icon: 'text-orange-700',
    },
    'Navigation System': {
      pill: 'bg-blue-50/70 border-blue-100 text-[#0A192F]',
      chip: 'bg-white border-blue-100',
      icon: 'text-blue-700',
    },
    'Back-Up Camera': {
      pill: 'bg-slate-50 border-slate-200 text-[#0A192F]',
      chip: 'bg-white border-slate-200',
      icon: 'text-slate-700',
    },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F7FAFD] via-[#F4F8FD] to-[#EEF4FA]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-200/28 blur-3xl" />
        <div className="absolute bottom-8 -left-24 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 h-[520px] w-[720px] rounded-full bg-blue-200/16 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0, 89, 187, 0.10) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <Container data-testid="single-vin-page" className="relative z-10 py-12 sm:py-14">
        <header className="mb-10">
          <h1 className="text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-primary mb-2">
            Single VIN Scenario
          </h1>
          <p className="text-[16px] sm:text-[18px] leading-[1.6] text-on-surface-variant/90 max-w-3xl">
            This page contains exactly one valid visible VIN code for browser
            extension detection testing.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#0A192F] text-[11px] font-semibold tracking-[0.12em]">
              1 VIN
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-200 text-neutral-700 text-[11px] font-semibold tracking-[0.12em]">
              Static test listing
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-200 text-amber-950 text-[11px] font-semibold tracking-[0.12em]">
              Automation ready
            </span>
          </div>
        </header>

        <div className="mt-12 grid grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="col-span-12 lg:col-span-8 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 rounded-full bg-blue-200/25 blur-3xl"
            />
            <article
              data-testid="vehicle-card"
              className="relative bg-white rounded-xl overflow-hidden border border-[#DDE3EA] shadow-soft-navy-sm"
            >
              <div className="relative aspect-video bg-surface-container">
                <img
                  src={vehicle.imageSrc}
                  alt={vehicle.imageAlt}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-6 mb-5">
                  <div>
                    <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-primary">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h2>
                    <p className="text-[14px] leading-[1.5] text-on-surface-variant/90 mt-1">
                      xDrive30i • Alpine White • SensaTec Upholstery
                    </p>
                  </div>

                  <div className="text-right">
                    <div
                      data-testid="vehicle-price"
                      className="text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-[#123A6F]"
                    >
                      $45,998
                    </div>
                    <p className="text-[12px] text-on-surface-variant/80 mt-1">
                      Sandbox Market Price
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 border-t border-t-[#DDE3EA] pt-6">
                  <div className="rounded-xl bg-[#F8FAFC] border border-[#DDE3EA] p-4">
                    <div className="h-9 w-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shadow-sm">
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
                        <path d="M4 13a8 8 0 1116 0" />
                        <path d="M12 13l3-3" />
                        <path d="M8 20h8" />
                      </svg>
                    </div>
                    <p
                      data-testid="vehicle-mileage"
                      className="mt-3 text-[11px] font-semibold tracking-[0.12em] text-on-surface-variant/80 uppercase"
                    >
                      Mileage
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-primary">
                      {vehicle.mileageText}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F8FAFC] border border-[#DDE3EA] p-4">
                    <div className="h-9 w-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 shadow-sm">
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
                        <path d="M12 15.5v-7" />
                        <path d="M8.5 12h7" />
                        <path d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <p className="mt-3 text-[11px] font-semibold tracking-[0.12em] text-on-surface-variant/80 uppercase">
                      Engine
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-primary">
                      2.0L I4 Turbo
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F8FAFC] border border-[#DDE3EA] p-4">
                    <div className="h-9 w-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-sm">
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
                        <path d="M12 3l7 7-7 11-7-11 7-7z" />
                        <path d="M12 7v6" />
                        <path d="M12 13l3-3" />
                      </svg>
                    </div>
                    <p className="mt-3 text-[11px] font-semibold tracking-[0.12em] text-on-surface-variant/80 uppercase">
                      Drive
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-primary">AWD</p>
                  </div>

                  <div className="rounded-xl bg-[#F8FAFC] border border-[#DDE3EA] p-4">
                    <div className="h-9 w-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shadow-sm">
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
                    </div>
                    <p className="mt-3 text-[11px] font-semibold tracking-[0.12em] text-on-surface-variant/80 uppercase">
                      Condition
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-primary">New</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <aside className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:gap-6">
            <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#DDE3EA] shadow-soft-navy-sm">
              <h3 className="text-[20px] font-semibold leading-[1.25] text-primary mb-4">
                Technical Identity
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-[#DDE3EA]">
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-on-surface-variant/80 mb-1">
                    VIN
                  </p>
                  <p
                    data-testid="vehicle-vin"
                    className="font-mono text-[14px] font-semibold tracking-[0.14em] text-primary select-all"
                  >
                    {vehicle.vin}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-[#DDE3EA]">
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-on-surface-variant/80 mb-1">
                    Stock ID
                  </p>
                  <p className="text-[14px] font-semibold text-primary uppercase">
                    TS-2025-X3-001
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  className="w-full h-11 rounded-lg bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 hover:shadow-md transition-colors"
                >
                  View Test Listing
                </button>
                <button
                  type="button"
                  className="w-full h-11 rounded-lg bg-white border border-outline text-primary font-semibold hover:bg-surface-container-low transition-colors"
                >
                  Inspect VIN
                </button>
              </div>
            </section>

            <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#DDE3EA] shadow-soft-navy-sm">
              <h3 className="text-[18px] font-semibold text-primary mb-2">
                Vehicle Highlights
              </h3>
              <p className="text-[12px] leading-[1.5] text-on-surface-variant/85 mb-4">
                Key equipment available on this test vehicle.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Turbocharged',
                  'All Wheel Drive',
                  'LED Headlights',
                  'Heated Front Seats',
                  'Navigation System',
                  'Back-Up Camera',
                ].map((feature) => {
                  const styles = highlightStyles[feature] ?? {
                    pill: 'bg-slate-50 border-slate-200 text-[#0A192F]',
                    chip: 'bg-white border-slate-200',
                    icon: 'text-slate-700',
                  }

                  return (
                    <div
                      key={feature}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-[13px] ${styles.pill}`}
                    >
                      <span
                        className={`h-6 w-6 rounded-md flex items-center justify-center shadow-sm border ${styles.chip} ${styles.icon}`}
                      >
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
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
                    <span className="font-medium">{feature}</span>
                  </div>
                  )
                })}
              </div>

              <p className="mt-4 text-[12px] leading-[1.5] text-on-surface-variant/75">
                Static feature set for deterministic extension testing.
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </section>
  )
}

