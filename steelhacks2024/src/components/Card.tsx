import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export default function CourseCard({CourseInfo, statureHook} : any){

    const [clicked, setClicked] = useState(true);

    function handleClick(){
      setClicked(!clicked);
      statureHook(clicked);
    }

    return CourseInfo.map(({title, description, professor} : any) => (
        <>
          <div style={{backgroundColor: clicked === true ? 'green' : 'red'}}>
          
          
            <Card style={{ width: '18rem', padding: '1rem'}}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>By: {professor}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={handleClick}>Save for Later</Button>
              </Card.Body>
            </Card>
          </div>
        </>
        
      ));
}