import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { ScenarioCard } from '../components/ScenarioCard'

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1v-10.5z" />
    </svg>
  )
}

function CarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 13l2-5a2 2 0 012-1h10a2 2 0 012 1l2 5" />
      <path d="M5 13h14v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-6z" />
      <path d="M7.5 16.5h.01" />
      <path d="M16.5 16.5h.01" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </svg>
  )
}

function NoVinBadge() {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 text-blue-700 border border-blue-100 text-[11px] font-semibold tracking-[0.12em]">
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-blue-600"
      >
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <path d="M14.12 14.12a3 3 0 01-4.24-4.24" />
        <path d="M3 3l18 18" />
      </svg>
      No VIN on this page
    </span>
  )
}

function FeatureItem({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="h-12 w-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#315EA8] shadow-sm">
        {icon}
      </div>
      <div className="text-[14px] font-semibold text-primary">{title}</div>
      <div className="text-[12px] leading-[1.5] text-on-surface-variant/85 max-w-[220px]">
        {description}
      </div>
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <section className="relative py-20 border-b border-b-[#DDE3EA] bg-gradient-to-br from-white via-blue-50/50 to-slate-100/70 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute right-10 top-20 h-[420px] w-[520px] rounded-full blur-3xl bg-blue-200/35" />
          <div className="absolute left-10 top-28 h-[260px] w-[320px] rounded-full blur-3xl bg-sky-100/50" />
          <div className="absolute -bottom-56 -left-52 h-[560px] w-[560px] rounded-full blur-3xl bg-slate-200/35" />

          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                'radial-gradient(rgba(37, 99, 235, 0.22) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
        </div>

        <Container className="relative max-w-[1440px] grid grid-cols-1 lg:grid-cols-[0.9fr_1.15fr] xl:grid-cols-[0.88fr_1.2fr] gap-12 lg:gap-8 xl:gap-10 items-center">
          <div className="space-y-6">
            <NoVinBadge />

            <h1 className="text-[34px] sm:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-primary max-w-2xl">
              Stable vehicle data pages for browser extension testing
            </h1>

            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-on-surface-variant/90 max-w-xl">
              A controlled sandbox for validating VIN detection and Carpool Browser
              Extension flows without relying on unstable third-party automotive
              websites.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/single-vin">
                <Button variant="primary" rightIcon={<ArrowRightIcon />}>
                  Open Single VIN Scenario
                </Button>
              </Link>
              <Link to="/multiple-vins">
                <Button variant="outline">Open Multiple VINs Scenario</Button>
              </Link>
            </div>

            <div className="bg-blue-50/70 p-4 rounded-lg border border-blue-100 border-l-4 border-l-blue-600 shadow-soft-navy-sm max-w-xl">
              <div className="flex gap-3 items-start">
                <div className="text-blue-600 mt-0.5">
                  <InfoIcon />
                </div>
                <p className="text-[13px] leading-[1.55] text-on-surface-variant/90">
                  <strong>Note:</strong> This homepage intentionally contains no
                  VIN codes and is used to validate the extension fallback state.
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block lg:-mr-6 xl:-mr-10">
            <div className="w-full aspect-[5/4] min-h-[390px] lg:min-h-[420px] rounded-2xl overflow-hidden shadow-soft-navy relative bg-surface-container">
              <img
                alt="Vehicle data dashboard illustration"
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/hero-dashboard.png"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#F7FAFF] via-[#EEF6FF] to-[#F2F7FF]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0, 89, 187, 0.16) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full bg-blue-200/55 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 -left-24 h-72 w-72 rounded-full bg-emerald-100/45 blur-3xl"
        />

        <Container className="relative z-10">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-primary">
              Available test scenarios
            </h2>
            <div className="h-px bg-[#DDE3EA] flex-grow ml-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScenarioCard
              title="Home / No VIN Scenario"
              description="Validates that the extension remains dormant or shows correct fallback messaging when a page contains no automotive identifiers."
              vinCountLabel="0 VINs"
              to="/"
              isCurrent
              badgeTone="neutral"
              icon={<HomeIcon />}
              iconClassName="bg-emerald-50 text-emerald-700 border border-emerald-200"
              badgeClassName="bg-emerald-50 text-emerald-700 border border-emerald-200"
            />
            <ScenarioCard
              title="Single VIN Scenario"
              description="A focused detail page layout featuring one primary vehicle identifier to test precise highlighting and individual lookup flows."
              vinCountLabel="1 VIN"
              to="/single-vin"
              badgeTone="info"
              icon={<CarIcon />}
              iconClassName="bg-blue-50 text-blue-700 border border-blue-200"
              badgeClassName="bg-blue-50 text-blue-700 border border-blue-200"
            />
            <ScenarioCard
              title="Multiple VINs Scenario"
              description="An inventory-style grid view containing several vehicles to validate bulk detection and list selection flows."
              vinCountLabel="3 VINs"
              to="/multiple-vins"
              badgeTone="dark"
              icon={<ListIcon />}
            />
          </div>
        </Container>
      </section>

      <section className="py-20 border-y border-y-[#DDE3EA] bg-gradient-to-br from-[#F6F9FF] via-[#F1F7FF] to-[#EEF4FF]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-primary mb-4">
              Built for stable automation
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-[#2F5D9F] via-[#315EA8] to-emerald-300/70" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <FeatureItem
              title="Static test data"
              description="Non-volatile content that won’t change between test runs."
              icon={
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M7 7h10" />
                  <path d="M7 12h10" />
                  <path d="M7 17h10" />
                  <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
              }
            />
            <FeatureItem
              title="Fast loading"
              description="Minimal assets for quick page performance in QA pipelines."
              icon={
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M12 3a9 9 0 109 9" />
                  <path d="M21 12h-4" />
                  <path d="M12 12l4-4" />
                </svg>
              }
            />
            <FeatureItem
              title="Controlled VIN coverage"
              description="Deterministic identification patterns for test accuracy."
              icon={
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
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
              }
            />
            <FeatureItem
              title="Extension-ready"
              description="Optimized DOM structure for reliable browser extension interaction."
              icon={
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M7 7h10v10H7z" />
                  <path d="M9 3h6v4H9z" />
                  <path d="M9 17h6v4H9z" />
                  <path d="M3 9h4v6H3z" />
                  <path d="M17 9h4v6h-4z" />
                </svg>
              }
            />
          </div>
        </Container>
      </section>
    </>
  )
}

