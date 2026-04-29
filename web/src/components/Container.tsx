import type { HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'page' | 'full'
}

export function Container({
  className,
  variant = 'page',
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        variant === 'page' ? 'max-w-[1280px]' : 'max-w-none',
        'w-full mx-auto px-6 sm:px-8',
        className,
      )}
      {...props}
    />
  )
}

