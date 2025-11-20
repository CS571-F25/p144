import { Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import PageContainer from '../components/PageContainer';

function Home() {
  const features = [
    {
      icon: '',
      title: 'Goal Setting',
      description: 'Define high-level goals and break them into actionable tasks'
    },
    {
      icon: '',
      title: 'Dependency Mapping',
      description: 'Drag and drop to create connections between tasks'
    },
    {
      icon: '',
      title: 'Auto-Unlock',
      description: 'Tasks automatically unlock as you complete prerequisites'
    },
    {
      icon: '',
      title: 'Timeline Visualization',
      description: 'See your entire project timeline at a glance'
    },
    {
      icon: '',
      title: 'Critical Path Analysis',
      description: 'Identify tasks that determine project completion time'
    },
    {
      icon: '',
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
        <section className="mb-5 px-3">
          <h2 className="text-center mb-4">Project Management Reimagined</h2>
          <p className="text-center text-muted mb-5">
            PathForge is a project management tool that helps you set long-term goals,
            break big tasks into smaller ones, and track progress through completion with
            visual dependency mapping.
          </p>
        </section>

        <section className="mb-5 px-3">
          <h3 className="text-center mb-4">Key Features</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            {features.map((feature, index) => (
              <Col key={index}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  colorClass={`card-color-${(index % 6) + 1}`}
                />
              </Col>
            ))}
          </Row>
        </section>
      </PageContainer>
    </>
  );
}

export default Home;
