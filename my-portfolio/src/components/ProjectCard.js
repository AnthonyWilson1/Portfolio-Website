import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, link, disabled }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="secondary"
          href={disabled ? null : link}
          target="_blank"
          disabled={disabled}
        >
          Coming Soon
        </Button>
      </Card.Body>
    </Card>
  );
};


export default ProjectCard;