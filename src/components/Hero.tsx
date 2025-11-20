import { Container } from 'react-bootstrap';

interface HeroProps {
  title: string;
  subtitle: string;
}

function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="hero-section bg-primary text-white py-5">
      <Container fluid>
        <div className="text-center">
          <h1 className="display-4 fw-bold mb-3">{title}</h1>
          <p className="lead fs-4">{subtitle}</p>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
