import { Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import PageContainer from '../components/PageContainer';

function Home() {
  const features = [
    {
      icon: '🎯',
      title: 'Goal Setting',
      description: 'Define high-level goals and break them into actionable tasks'
    },
    {
      icon: '🔗',
      title: 'Dependency Mapping',
      description: 'Drag and drop to create connections between tasks'
    },
    {
      icon: '🔓',
      title: 'Auto-Unlock',
      description: 'Tasks automatically unlock as you complete prerequisites'
    },
    {
      icon: '📊',
      title: 'Timeline Visualization',
      description: 'See your entire project timeline at a glance'
    },
    {
      icon: '🎨',
      title: 'Critical Path Analysis',
      description: 'Identify tasks that determine project completion time'
    },
    {
      icon: '📝',
      title: 'Reflection Tracking',
      description: 'Document your journey with diary-style entries'
    }
  ];

  return (
    <>
      <Hero
        title="PathForge"
        subtitle="Transform Your Goals Into Visual Roadmaps"
      />
      <PageContainer>
        <section className="mb-5">
          <h2 className="text-center mb-4">Project Management Reimagined</h2>
          <p className="text-center text-muted mb-5">
            PathForge is a project management tool that helps you set long-term goals,
            break big tasks into smaller ones, and track progress through completion with
            visual dependency mapping.
          </p>
        </section>

        <section className="mb-5">
          <h3 className="text-center mb-4">Key Features</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            {features.map((feature, index) => (
              <Col key={index}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </Col>
            ))}
          </Row>
        </section>

        <section className="mb-5">
          <h3 className="text-center mb-4">Use Cases</h3>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <div className="p-4 bg-light rounded">
                <h4>Language Learning</h4>
                <p className="text-muted mb-0">
                  Track your path to B1 German proficiency with sequential course dependencies
                  and parallel vocabulary building.
                </p>
              </div>
            </Col>
            <Col>
              <div className="p-4 bg-light rounded">
                <h4>Career Transition</h4>
                <p className="text-muted mb-0">
                  Map out portfolio projects, certifications, and job applications with clear
                  prerequisites and parallel work streams.
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </PageContainer>
    </>
  );
}

export default Home;
