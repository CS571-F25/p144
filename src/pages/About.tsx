import Hero from '../components/Hero';
import PageContainer from '../components/PageContainer';

function About() {
  return (
    <>
      <Hero
        title="About PathForge"
        subtitle="Reimagining project management through visual dependency mapping"
      />
      <PageContainer>
        <section className="mb-5">
          <h3 className="mb-3">What is PathForge?</h3>
          <p className="text-muted">
            PathForge transforms traditional to-do lists into interactive dependency graphs,
            helping you visualize the path from start to finish. Unlike linear task lists,
            PathForge requires users to map out relationships between tasks, creating a clear
            roadmap that shows which tasks can be worked on now and which are blocked by prerequisites.
          </p>
        </section>

        <section className="mb-5">
          <h3 className="mb-3">How It Works</h3>
          <div className="ps-4">
            <h5>1. Set Your Goals</h5>
            <p className="text-muted mb-3">
              Define high-level objectives that matter to you, whether it's learning a new
              language, changing careers, or completing a creative project.
            </p>

            <h5>2. Break Down Tasks</h5>
            <p className="text-muted mb-3">
              Decompose your goals into smaller, actionable tasks. Each task should represent
              a concrete step toward your objective.
            </p>

            <h5>3. Map Dependencies</h5>
            <p className="text-muted mb-3">
              Identify which tasks depend on others. PathForge uses this information to
              automatically determine which tasks are available to work on.
            </p>

            <h5>4. Track Progress</h5>
            <p className="text-muted mb-3">
              As you complete tasks, PathForge automatically unlocks dependent tasks and
              updates your project timeline.
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h3 className="mb-3">Technology Stack</h3>
          <ul className="text-muted">
            <li>Frontend: React 18 with TypeScript</li>
            <li>UI Library: React Bootstrap</li>
            <li>Routing: React Router v6</li>
            <li>Build Tool: Vite</li>
            <li>Deployment: GitHub Pages</li>
          </ul>
        </section>

        <section className="mb-5">
          <h3 className="mb-3">About the Developer</h3>
          <p className="text-muted">
            PathForge was created by Kejun Liu as a project for CS571 at UW-Madison.
            The project combines principles of project management, graph theory, and
            user experience design to create a unique tool for long-term goal tracking.
          </p>
          <p className="text-muted">
            <a
              href="https://github.com/EleanorLiu12/p144"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the source code on GitHub
            </a>
          </p>
        </section>
      </PageContainer>
    </>
  );
}

export default About;
