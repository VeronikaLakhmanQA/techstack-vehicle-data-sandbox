import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'
import { Badge } from './Badge'
import { Button } from './Button'

type BadgeTone = 'neutral' | 'info' | 'dark'

function ExternalIcon() {
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
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v7H3V3h7" />
    </svg>
  )
}

export type ScenarioCardProps = {
  title: string
  description: string
  vinCountLabel: string
  to: string
  isCurrent?: boolean
  badgeTone?: BadgeTone
  icon?: React.ReactNode
  badgeClassName?: string
  iconClassName?: string
}

export function ScenarioCard({
  title,
  description,
  vinCountLabel,
  to,
  isCurrent,
  badgeTone = 'neutral',
  icon,
  badgeClassName,
  iconClassName,
}: ScenarioCardProps) {
  const badgeClass =
    badgeTone === 'dark'
      ? 'bg-[#0A192F]/[0.08] text-[#0A192F] border border-[#0A192F]/15'
      : badgeTone === 'info'
        ? 'bg-secondary/10 text-secondary border border-secondary/20'
        : 'bg-blue-50 text-blue-700 border border-blue-100'

  const iconShellClass =
    badgeTone === 'dark'
      ? 'bg-[#0A192F]/[0.08] text-[#0A192F] border border-[#0A192F]/15'
      : badgeTone === 'info'
        ? 'bg-secondary/10 text-secondary border border-secondary/20'
        : 'bg-blue-50 text-blue-700 border border-blue-100'

  return (
    <div className="bg-white p-7 rounded-xl border border-outline-variant/60 shadow-soft-navy-sm flex flex-col items-start h-full">
      <div className="flex justify-between w-full mb-6">
        <div className={cn('p-3 rounded-lg', iconShellClass, iconClassName)}>
          <div className="h-5 w-5 flex items-center justify-center" aria-hidden>
            {icon ?? <div className="h-4 w-4 rounded bg-secondary/20" />}
          </div>
        </div>
        <Badge className={cn(badgeClass, badgeClassName)} variant="neutral">
          {vinCountLabel}
        </Badge>
      </div>

      <h3 className="text-[20px] font-semibold leading-[1.25] text-primary mb-2">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.55] text-on-surface-variant/90 mb-8 flex-grow">
        {description}
      </p>

      {isCurrent ? (
        <div
          className={cn(
            'w-full h-11 rounded-lg border border-blue-600 text-blue-700 font-semibold flex items-center justify-center bg-blue-50 shadow-sm gap-2',
          )}
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Current Scenario
        </div>
      ) : (
        <Link to={to} className="w-full">
          <Button
            className="w-full !border-[#0A192F] !bg-[#0A192F] !text-white hover:!bg-[#123A6F] shadow-sm hover:shadow-md"
            variant="outline"
            rightIcon={<ExternalIcon />}
          >
            Open Scenario
          </Button>
        </Link>
      )}
    </div>
  )
}

