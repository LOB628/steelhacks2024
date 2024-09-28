import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function CourseCard({CourseInfo} : any){

    return CourseInfo.map(({title, description, professor} : any) => (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>By: {professor}</Card.Subtitle>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="primary">Save for Later</Button>
          </Card.Body>
        </Card>
      ));
}