import React, { useEffect } from 'react'
import { CheckCircle2, XCircle, X } from 'lucide-react'

export default function Toast({ kind = 'success', message, onClose }) {
  useEffect(() => {
    const t = setTimeout(() => onClose?.(), 3200)
    return () => clearTimeout(t)
  }, [onClose])

  const styles = kind === 'success'
    ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
    : 'border-rose-200 bg-rose-50 text-rose-900'

  return (
    <div className={`fixed left-1/2 top-6 z-50 w-[calc(100vw-2rem)] max-w-xl -translate-x-1/2 rounded-2xl border p-4 shadow-soft ${styles}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          {kind === 'success' ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
        </div>
        <div className="flex-1 text-sm font-semibold">{message}</div>
        <button onClick={onClose} className="rounded-xl p-1 opacity-70 hover:opacity-100" aria-label="Close">
          <X size={18} />
        </button>
      </div>
    </div>
  )
}
