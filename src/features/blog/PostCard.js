import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PostCard = ({ posts }) => {
  return (
    <Card className="text-center">
      <Card.Header>{posts.title}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>{posts.content}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{posts.date}</Card.Footer>
    </Card>
  );
};

export default PostCard;
