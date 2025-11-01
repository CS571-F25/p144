import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>PathForge</h1>
        <p className="tagline">Transform Your Goals Into Visual Roadmaps</p>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Project Management Reimagined</h2>
          <p>
            PathForge is a project management tool that helps you set long-term goals,
            break big tasks into smaller ones, and track progress through completion with
            visual dependency mapping.
          </p>
        </section>

        <section className="features">
          <h3>Key Features</h3>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>🎯 Goal Setting</h4>
              <p>Define high-level goals and break them into actionable tasks</p>
            </div>
            <div className="feature-card">
              <h4>🔗 Dependency Mapping</h4>
              <p>Drag and drop to create connections between tasks</p>
            </div>
            <div className="feature-card">
              <h4>🔓 Auto-Unlock</h4>
              <p>Tasks automatically unlock as you complete prerequisites</p>
            </div>
            <div className="feature-card">
              <h4>📊 Timeline Visualization</h4>
              <p>See your entire project timeline at a glance</p>
            </div>
            <div className="feature-card">
              <h4>🎨 Critical Path Analysis</h4>
              <p>Identify tasks that determine project completion time</p>
            </div>
            <div className="feature-card">
              <h4>📝 Reflection Tracking</h4>
              <p>Document your journey with diary-style entries</p>
            </div>
          </div>
        </section>

        <section className="demo">
          <h3>Interactive Demo</h3>
          <div className="demo-counter">
            <p>Click count: {count}</p>
            <button onClick={() => setCount((count) => count + 1)}>
              Click me
            </button>
            <p className="demo-note">Full interactive features coming soon!</p>
          </div>
        </section>

        <section className="use-cases">
          <h3>Use Cases</h3>
          <div className="use-case">
            <h4>Language Learning</h4>
            <p>
              Track your path to B1 German proficiency with sequential course dependencies
              and parallel vocabulary building.
            </p>
          </div>
          <div className="use-case">
            <h4>Career Transition</h4>
            <p>
              Map out portfolio projects, certifications, and job applications with clear
              prerequisites and parallel work streams.
            </p>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Built by Kejun Liu for CS571 at UW-Madison</p>
        <p>
          <a href="https://github.com/EleanorLiu12/p144" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
