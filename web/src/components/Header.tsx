import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { Container } from './Container'
import { Button } from './Button'

function TopNavLink({
  to,
  children,
}: {
  to: string
  children: ReactNode
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'h-16 inline-flex items-center text-sm tracking-tight px-2 border-b-2',
          isActive
            ? 'text-primary font-semibold border-blue-600'
            : 'text-slate-500 border-transparent hover:text-primary',
        )
      }
      end={to === '/'}
    >
      {children}
    </NavLink>
  )
}

export function Header() {
  return (
    <header className="bg-slate-100/95 backdrop-blur-sm border-b border-slate-200/80 shadow-sm sticky top-0 z-50">
      <Container className="h-16 flex items-center justify-between">
        <div className="text-[14px] sm:text-[15px] font-semibold text-primary uppercase tracking-[0.18em]">
          Techstack Vehicle Data Sandbox
        </div>

        <nav className="hidden md:flex items-center gap-6 h-full">
          <TopNavLink to="/">Home</TopNavLink>
          <TopNavLink to="/single-vin">Single VIN</TopNavLink>
          <TopNavLink to="/multiple-vins">Multiple VINs</TopNavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="primary" className="h-9 px-3 text-[12px]">
            Test Data Only
          </Button>
        </div>
      </Container>
    </header>
  )
}

