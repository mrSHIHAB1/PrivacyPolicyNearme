import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'
import TOC from './TOC'

export default function App() {
  const year = new Date().getFullYear()
  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <h1>Near Me</h1>
          <p>Privacy Policy</p>
        </div>
      </header>

      <div className="layout">
        <main className="content">
          <PrivacyPolicy />
        </main>

        <aside className="toc">
          <div className="card">
            <TOC />
          </div>
        </aside>
      </div>

      <footer className="footer">© {year} Near Me</footer>
    </div>
  )
}
