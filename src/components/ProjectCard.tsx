import { Card, Button, ProgressBar } from 'react-bootstrap';

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  tasksCompleted: number;
  totalTasks: number;
}

function ProjectCard({ title, description, progress, tasksCompleted, totalTasks }: ProjectCardProps) {
  return (
    <Card className="h-100 shadow-sm hover-shadow">
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted mb-3">{description}</Card.Text>
        <div className="mb-3">
          <div className="d-flex justify-content-between mb-2">
            <small className="text-muted">Progress</small>
            <small className="text-muted">{tasksCompleted}/{totalTasks} tasks</small>
          </div>
          <ProgressBar now={progress} variant="success" />
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary" size="sm">View Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
