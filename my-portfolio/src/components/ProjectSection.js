import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
      {
      title: 'Youtube Video Translator',
      description: 'Paste a YouTube video link and view the video with captions in your preferred language.',
      link: '',
      disabled: true
    },
    {
      title: 'Pending',
      description: 'Pending',
      link: '',
      disabled: true
    },
    {
      title: 'Pending',
      description: 'Pending',
      link: '',
      disabled: true
  }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col key={idx} md={4}>
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                disabled={false}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;