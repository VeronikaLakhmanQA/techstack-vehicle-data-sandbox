import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'secondary' | 'outline'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export function Button({
  className,
  variant = 'primary',
  leftIcon,
  rightIcon,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg h-11 px-5 text-[14px] font-semibold leading-none select-none transition-colors'

  const variants: Record<Variant, string> = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md border-transparent',
    secondary: 'bg-primary text-on-primary hover:bg-primary/90',
    outline:
      'bg-white border border-outline-variant/80 text-primary hover:bg-surface-container-low',
  }

  return (
    <button
      type={type}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
}

