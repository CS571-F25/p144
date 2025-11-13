import { Container } from 'react-bootstrap';
import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <Container className="py-4">
      {children}
    </Container>
  );
}

export default PageContainer;
