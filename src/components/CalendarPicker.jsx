import React, { useMemo } from 'react'
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  getDay,
  isBefore,
  isSameDay
} from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CalendarPicker({ month, selectedDate, onMonthChange, onSelectDate }) {
  const start = startOfMonth(month)
  const end = endOfMonth(month)
  const days = eachDayOfInterval({ start, end })
  const pad = getDay(start)

  const grid = useMemo(() => {
    const blanks = Array.from({ length: pad }, () => null)
    return [...blanks, ...days]
  }, [days, pad])

  const today = new Date()
  const todayFloor = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  return (
    <div className="rounded-2xl border border-ink-900/10 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-extrabold text-ink-900">{format(month, 'MMMM yyyy')}</div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onMonthChange(subMonths(month, 1))}
            className="rounded-xl p-2 hover:bg-ink-900/5"
            aria-label="Previous month"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => onMonthChange(addMonths(month, 1))}
            className="rounded-xl p-2 hover:bg-ink-900/5"
            aria-label="Next month"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-ink-500">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
          <div key={d} className="py-1">{d}</div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-1">
        {grid.map((d, idx) => {
          if (!d) return <div key={`b-${idx}`} />
          const disabled = isBefore(d, todayFloor)
          const selected = selectedDate ? isSameDay(d, selectedDate) : false

          return (
            <button
              key={d.toISOString()}
              type="button"
              disabled={disabled}
              onClick={() => onSelectDate(d)}
              className={`rounded-xl px-0 py-2 text-xs font-semibold transition-all ${
                disabled
                  ? 'cursor-not-allowed opacity-40'
                  : selected
                    ? 'bg-brand-700 text-white'
                    : 'hover:bg-ink-900/5 text-ink-900'
              }`}
              aria-label={format(d, 'yyyy-MM-dd')}
            >
              {format(d, 'd')}
            </button>
          )
        })}
      </div>

      <div className="mt-3 text-xs text-ink-600">
        Pick a date, then choose a preferred time slot. We will confirm availability by email.
      </div>
    </div>
  )
}
