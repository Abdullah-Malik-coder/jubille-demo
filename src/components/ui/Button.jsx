import React from 'react'

export default function Button({
  as: Comp = 'button',
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/50'

  const variants = {
    primary:
      'bg-brand-700 text-white hover:bg-brand-800 shadow-soft',
    secondary:
      'bg-white/10 text-white hover:bg-white/15 border border-white/20',
    ghost:
      'bg-ink-900/5 text-ink-900 hover:bg-ink-900/10 border border-ink-900/10',
    dark:
      'bg-ink-900 text-white hover:bg-black'
  }

  return (
    <Comp
      href={href}
      onClick={onClick}
      type={Comp === 'button' ? type : undefined}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  )
}
