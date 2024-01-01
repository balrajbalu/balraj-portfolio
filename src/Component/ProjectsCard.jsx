// ProjectCard.js

import React from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

const ProjectCard = ({ title, description, imageUrl, demoLink, codeLink }) => {
  return (
    <Card className="project-card mt-5">
      <Card.Img variant="top" className="img-fluid" style={{ padding: '50px',width:'100%' }} src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text><b>{description}</b></Card.Text>
        <div className="project-links">
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

