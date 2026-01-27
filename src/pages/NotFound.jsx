import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'

export default function NotFound() {
  return (
    <section className="bg-ink-50">
      <div className="container-app py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-ink-900/10 bg-white p-8 shadow-soft">
          <div className="text-xs font-extrabold uppercase tracking-widest text-ink-500">404</div>
          <h1 className="mt-2 text-3xl font-black text-ink-900">Page not found</h1>
          <p className="mt-3 text-sm leading-6 text-ink-700">
            The page you’re looking for doesn’t exist (or the link is outdated).
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button as={Link} to="/" variant="primary">
              Back to Home
            </Button>
            <Button as={Link} to="/contact" variant="secondary">
              Contact Jubilee
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
