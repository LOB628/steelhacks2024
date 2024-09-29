import { useState, useEffect } from 'react'
import axios from 'axios';

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
  const [apiData, setApiData] = useState('');
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

  useEffect(() => {
    fetch("http://localhost:8080/pitt-api")
    .then((res) => {
        if (!res.ok)
            throw new Error("Error: Response not ok");
        
        return res.json();
    })
    .then((data) => setApiData(data))
    .catch((e) => console.error("Error fetching table:", e))
}, []);

  const handleSubmit = async() => {
    setApiData('')

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
    setClasses(null);
  }

  return (
    <>
      <h3 className="text-center">
        {apiData ? "Please select the courses that look most interesting to you!" : "Loading..."}
      </h3>
      {apiData &&
        <div className="d-flex align-items-center" style={{height: "92vh"}}>
          <div className="row justify-content-between" style={{width: "100%"}}>
            <div className="col-3 text-center">
              <p>Card1</p>
            </div>
            <div className="col-3 text-center">
              <p>Card2</p>
            </div>
            <div className="col-3 text-center">
              <p>Card3</p>
            </div>
            <div className="col-3 text-center">
              <p>Card4</p>
            </div>
          </div>
        </div>
      }
      <button className="btn btn-lg btn-outline-primary" type="submit" 
        style={{fontWeight: "bold", backgroundColor: isHovered ? "#0d6efd" : "#003594", color: "#FFB81C"}}
        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleSubmit}>
          Submit!
      </button>
    </>
  )
}

export default Catalog
