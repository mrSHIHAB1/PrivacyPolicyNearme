import React from 'react'

const items = [
  { id: 'overview', label: 'Overview' },
  { id: 'information-collected', label: 'Information We Collect' },
  { id: 'personal-information', label: 'Personal Information' },
  { id: 'location-information', label: 'Location Information' },
  { id: 'how-we-use', label: 'How We Use Your Information' },
  { id: 'location-services', label: 'Location Services' },
  { id: 'payments', label: 'Subscriptions & Payments' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'advertising', label: 'Advertising' },
  { id: 'sharing', label: 'Sharing' },
  { id: 'security', label: 'Data Security' },
  { id: 'contact', label: 'Contact Us' }
]

export default function TOC() {
  return (
    <nav>
      <h4>On this page</h4>
      <ul>
        {items.map(i => (
          <li key={i.id}>
            <a href={`#${i.id}`}>{i.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
