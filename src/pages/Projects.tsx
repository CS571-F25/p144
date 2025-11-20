import { Row, Col, Button } from 'react-bootstrap';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import PageContainer from '../components/PageContainer';

function Projects() {
  const sampleProjects = [
    {
      id: 1,
      title: 'Learn German',
      description: 'Reach B1 proficiency in 9 months',
      progress: 35,
      tasksCompleted: 7,
      totalTasks: 20
    },
    {
      id: 2,
      title: 'Tech Career Transition',
      description: 'Land a software engineering role',
      progress: 60,
      tasksCompleted: 12,
      totalTasks: 20
    },
    {
      id: 3,
      title: 'Marathon Training',
      description: 'Complete first marathon in 6 months',
      progress: 25,
      tasksCompleted: 5,
      totalTasks: 20
    },
    {
      id: 4,
      title: 'Build Portfolio Website',
      description: 'Create and deploy personal portfolio',
      progress: 80,
      tasksCompleted: 16,
      totalTasks: 20
    },
    {
      id: 5,
      title: 'Master Data Structures',
      description: 'Complete all leetcode patterns',
      progress: 45,
      tasksCompleted: 9,
      totalTasks: 20
    },
    {
      id: 6,
      title: 'Write a Novel',
      description: '50,000 words for NaNoWriMo',
      progress: 15,
      tasksCompleted: 3,
      totalTasks: 20
    }
  ];

  return (
    <>
      <Hero
        title="Your Projects"
        subtitle="Manage and track all your long-term goals"
      />
      <PageContainer>
        <div className="px-3">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Active Projects</h3>
            <Button variant="primary">+ New Project</Button>
          </div>
          <Row xs={1} md={2} lg={3} className="g-4">
            {sampleProjects.map((project, index) => (
              <Col key={project.id}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  progress={project.progress}
                  tasksCompleted={project.tasksCompleted}
                  totalTasks={project.totalTasks}
                  colorClass={`card-color-${(index % 6) + 1}`}
                />
              </Col>
            ))}
          </Row>
        </div>
      </PageContainer>
    </>
  );
}

export default Projects;
