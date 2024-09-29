import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'

interface CourseCardProps {
  courseName: string;
  courseNumber: string;
  description: string;
  statureVal: boolean;
  statureHook: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CourseCard({courseName, courseNumber, description, statureVal, statureHook} : CourseCardProps){

    // Original attempt at equalizing heights. Works, but users can see the change
    /*useEffect(() => {
      // Script to set card height to max height necessary
      const elements = document.querySelectorAll('.eq-height');
      const maxHeight = Math.max(...Array.from(elements).map(element => element.clientHeight));
      elements.forEach(element => (element as HTMLElement).style.height = `${maxHeight}px`);
    }, []);*/

    // Best way to sync heights of cards. Use state variable and DOM listener, hide cards until change has been made
    const [hidden, setHidden] = useState(true);
    document.addEventListener("DOMContentLoaded", updateHeights);

    function updateHeights() {
      // Script to set card height to max height necessary
      const elements = document.querySelectorAll('.eq-height');

      if(elements.length === 0) return;

      const maxHeight = Math.max(...Array.from(elements).map(element => element.clientHeight));
      elements.forEach(element => (element as HTMLElement).style.height = `${maxHeight}px`);

      console.log("TEST");
      setHidden(false);
    }

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