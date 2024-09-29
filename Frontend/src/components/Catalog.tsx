import { useState } from 'react'
import axios from 'axios';
import Card from './Card'

interface CatalogProps {
  resp: Response;
  setResp: React.Dispatch<React.SetStateAction<Response>>;
}

// Decision: True = yes, False = no
interface Classes {
  class1Name: string;
  class1Decision: boolean;
  class2Name: string;
  class2Decision: boolean;
  class3Name: string;
  class3Decision: boolean;
  class4Name: string;
  class4Decision: boolean;
}

interface Response {
  class1Name: string;
  class1Number: string;
  class2Name: string;
  class2Number: string;
  class3Name: string;
  class3Number: string;
  class4Name: string;
  class4Number: string;
}

function Catalog({ resp, setResp } : CatalogProps) {
  const [card1Selected, setCard1Selected] = useState(false);
  const [card2Selected, setCard2Selected] = useState(false);
  const [card3Selected, setCard3Selected] = useState(false);
  const [card4Selected, setCard4Selected] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [apiData, setApiData] = useState('temp');         // Note: Set to 'temp' so program displays properly while PittAPI not working
  const [classes, setClasses] = useState<Classes | null>({
    class1Name: "",
    class1Decision: false,
    class2Name: "",
    class2Decision: false,
    class3Name: "",
    class3Decision: false,
    class4Name: "",
    class4Decision: false,
  });

  const uri = "http://localhost:8080/api/chat";

  // Pitt API call
  /*useEffect(() => {
    fetch("http://localhost:8080/pitt-api")
    .then((res) => {
        if (!res.ok)
            throw new Error("Error: Response not ok");
        
        return res.json();
    })
    .then((data) => setApiData(data))
    .catch((e) => console.error("Error fetching table:", e))
}, []);*/

  const handleSubmit = async() => {
    //setApiData('')

    // Set Classes variable to user inputs
    setClasses({
      class1Name: resp.class1Name,
      class1Decision: card1Selected,
      class2Name: resp.class2Name,
      class2Decision: card2Selected,
      class3Name: resp.class3Name,
      class3Decision: card3Selected,
      class4Name: resp.class4Name,
      class4Decision: card4Selected,
    })

    const formData = new FormData();

    formData.append('classes', JSON.stringify(classes))
    const customHeader = {
        headers: {
            "Content-Type": 'multipart/form-data',
        },
    }
    
    const response = await axios.post(uri, formData, customHeader)
    console.log(response)
    setResp(response.data['Response']);
    
    setClasses({
      class1Name: resp.class1Name,
      class1Decision: false,
      class2Name: resp.class2Name,
      class2Decision: false,
      class3Name: resp.class3Name,
      class3Decision: false,
      class4Name: resp.class4Name,
      class4Decision: false,
    })
  }

  return (
    <>
      <h3 className="text-center">
        {apiData ? "Please select the courses that look interesting to you!" : "Loading..."}
      </h3>
      {apiData && <>
        <p className="text-center mb-5">Then, ClassFinder will take your interests into account when suggesting you more courses! When you're finished, please press the submit button below!</p>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <div className="container">
            <div className="row justify-content-center mb-3">
              <div className="col-6 text-center">
                {/* Note: This currently has its values filled out as a demonstration of what the cards would look like. */}
                <Card courseName={"Discrete Structures"} courseNumber={"CS 0441"} description="The purpose of this course is to understand and use (abstract) discrete structures that are backbones of computer science. In particular, this class is meant to introduce logic, proofs, sets, relations, functions, counting, and probability, with an emphasis on applications in computer science." statureVal={card1Selected} statureHook={setCard1Selected} />
              </div>
              <div className="col-6 text-center">
                <Card courseName={resp.class2Name} courseNumber={resp.class2Number} description="GG" statureVal={card2Selected} statureHook={setCard2Selected} />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6 text-center">
                <Card courseName={resp.class3Name} courseNumber={resp.class3Number} description="GG" statureVal={card3Selected} statureHook={setCard3Selected} />
              </div>
              <div className="col-6 text-center">
                <Card courseName={resp.class4Name} courseNumber={resp.class4Number} description="GG" statureVal={card4Selected} statureHook={setCard4Selected} />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button className="btn btn-lg btn-outline-primary" type="submit"
            style={{fontWeight: "bold", backgroundColor: isHovered ? "#0d6efd" : "#003594", color: "#FFB81C"}}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleSubmit}>
              Submit!
            </button>
          </div>
        </div>
        </>
      }
    </>
  )
}

export default Catalog
