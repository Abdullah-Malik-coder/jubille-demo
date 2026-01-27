import React from 'react'

export default function SectionTitle({ eyebrow, title, desc, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-3 ${alignCls}`}>
      {eyebrow ? (
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-700" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
        {title}
      </h2>
      {desc ? <p className="max-w-3xl text-sm leading-6 text-ink-700">{desc}</p> : null}
    </div>
  )
}
