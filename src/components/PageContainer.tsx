import { Container } from 'react-bootstrap';
import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <Container fluid className="py-4 px-0">
      {children}
    </Container>
  );
}

export default PageContainer;
