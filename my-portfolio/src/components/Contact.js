import { Container, Button } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa'; // for LinkedIn icon (optional)

const Contact = () => {
  return (
    <section id="contact" className="py-5 text-center bg-light">
      <Container>
        <h2 className="mb-3">Let’s Connect</h2>
        <p className="lead mb-4">
          Interested in working together or want to chat? Reach out anytime.
        </p>
        <Button
          variant="primary"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="me-2" />
          Connect on LinkedIn
        </Button>
      </Container>
    </section>
  );
};

export default Contact;