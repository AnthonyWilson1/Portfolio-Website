import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, link }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>            {/* ✅ This shows project name */}
        <Card.Text>{description}</Card.Text>        {/* ✅ This shows description */}
        {link && (
          <Button variant="primary" href={link} target="_blank">
            View Project
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;