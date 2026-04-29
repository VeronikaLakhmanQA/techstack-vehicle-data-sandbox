import type { HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

type Variant = 'neutral' | 'info' | 'success' | 'warning'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant
}

export function Badge({ className, variant = 'neutral', ...props }: BadgeProps) {
  const base =
    'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.12em] border'

  const variants: Record<Variant, string> = {
    neutral: 'bg-surface-container-low text-on-surface-variant border-outline-variant/70',
    info: 'bg-secondary-container/10 text-secondary border-secondary/20',
    success: 'bg-secondary-fixed text-on-secondary-fixed border-transparent',
    warning: 'bg-tertiary-fixed text-on-tertiary-fixed border-transparent',
  }

  return <span className={cn(base, variants[variant], className)} {...props} />
}

