import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} Anthony C. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
