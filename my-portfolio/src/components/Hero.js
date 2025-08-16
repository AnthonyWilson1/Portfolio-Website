import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        {/* <h1 className="display-4">Hi, I'm Anthony</h1> */}
        <p className="lead">Data Scientist • Weekend Engineer</p>
        <Button
          variant="primary"
          href="/Entry Level Data Scientist Resume 4.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3"
        >
          About Me
        </Button>
      </Container>
    </div>
  );
};

export default Hero;