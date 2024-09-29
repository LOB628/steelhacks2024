import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'

interface CourseCardProps {
  courseName: string;
  courseNumber: string;
  description: string;
  statureVal: boolean;
  statureHook: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CourseCard({courseName, courseNumber, description, statureVal, statureHook} : CourseCardProps){

    const [hidden, setHidden] = useState(true);

    // Equalizes heights of cards. Might be a little less efficient than the DOM Listener, but it actually works with the backend.
    useEffect(() => {
      // Script to set card height to max height necessary
      const elements = document.querySelectorAll('.eq-height');
      const maxHeight = Math.max(...Array.from(elements).map(element => element.clientHeight));
      elements.forEach(element => (element as HTMLElement).style.height = `${maxHeight}px`);
      setHidden(false);
    }, []);

    // Best way to sync heights of cards, but wasn't working with backend for some reason?
    /*document.addEventListener("DOMContentLoaded", updateHeights);
    console.log("TEST 0");

    function updateHeights() {
      console.log("TEST 1");
      // Script to set card height to max height necessary
      const elements = document.querySelectorAll('.eq-height');

      if(elements.length === 0) return;

      const maxHeight = Math.max(...Array.from(elements).map(element => element.clientHeight));
      elements.forEach(element => (element as HTMLElement).style.height = `${maxHeight}px`);

      setHidden(false);
    }*/

    function handleClick() {
      statureHook(!statureVal);
    }

    return(
        <div className="eq-height" style={{backgroundColor: statureVal ? 'green' : 'gray', width: "44vw", visibility: hidden ? "hidden" : "visible"}}>
          <Card className="eq-height" border={statureVal ? "success" : "secondary"} style={{ maxWidth: "39vw", width: '39vw', overflow: "auto"}}>
            <Card.Body>
              <Card.Title>{courseNumber + ": " + courseName}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Button variant={statureVal ? "danger" : "success"} onClick={handleClick}>{statureVal ? "Undo Save" : "Save for Later"}</Button>
            </Card.Body>
          </Card>
        </div>
    );
}