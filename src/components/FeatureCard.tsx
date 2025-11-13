import { Card } from 'react-bootstrap';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="h-100 shadow-sm border-0 hover-shadow">
      <Card.Body className="text-center p-4">
        <div className="fs-1 mb-3">{icon}</div>
        <Card.Title className="fw-bold mb-3">{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FeatureCard;
