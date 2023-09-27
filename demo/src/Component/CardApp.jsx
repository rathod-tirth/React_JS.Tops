import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardApp({ title }) {
  return (
    <div className='col-md-4'>
      <Card style={{ width: '18rem', margin: '20px' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardApp;