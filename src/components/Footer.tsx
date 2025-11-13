import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <div className="text-center">
          <p className="mb-2">Built by Kejun Liu for CS571 at UW-Madison</p>
          <p className="mb-0">
            <a
              href="https://github.com/EleanorLiu12/p144"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
