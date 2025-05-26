import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Player Performance Model',
      description: 'Predicts NBA player stats based on matchup and recent form.',
      link: '#'
    },
    {
      title: 'Currency Trading Bot',
      description: 'Multi-agent system for backtesting and trading forex.',
      link: '#'
    },
    {
      title: 'Legal Report Generator',
      description: 'Automates report generation for law firms and property managers.',
      link: '#'
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;