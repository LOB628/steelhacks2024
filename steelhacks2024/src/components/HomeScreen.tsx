import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react';
import axios from 'axios';

function HomeScreen() {
    const majors = [
        "Accounting",
        "Actuarial Mathematics",
        "Africana Studies",
        "Africana Studies–English",
        "Anthropology",
        "Applied Developmental Psychology",
        "Applied Mathematics",
        "Architecture",
        "Architectural Studies",
        "Astronomy",
        "Biochemistry",
        "Bioengineering",
        "Biological Sciences",
        "Business Information Systems",
        "CASE Teacher Preparation",
        "Chemical Engineering",
        "Chemistry",
        "Chinese",
        "Civil Engineering",
        "Classics",
        "Communication: Rhet & Comm",
        "Communication Science",
        "Computational Biology",
        "Computer Engineering",
        "Computer Science",
        "Computational Social Science",
        "Data Science",
        "Dental Hygiene",
        "Dietician Nutritionist Program",
        "Digital Narrative and Interactive Design",
        "Ecology and Evolution",
        "Economics",
        "Economics–Statistics",
        "Electrical Engineering",
        "Emergency Medicine",
        "Engineering Science",
        "English Literature",
        "English Writing",
        "Environmental Science",
        "Environmental Studies",
        "Exercise Science",
        "Film and Media Studies",
        "Finance",
        "French",
        "Gender, Sexuality, and Women's Studies",
        "Geology",
        "German",
        "Global Management",
        "Health Informatics",
        "Health Services",
        "Health and Physical Activity",
        "History",
        "History and Philosophy of Science",
        "History of Art & Architecture",
        "Human Resources Management",
        "Industrial Engineering",
        "Information Science",
        "International and Area Studies",
        "International Studies Co-Major",
        "Italian",
        "Italian Studies",
        "Japanese",
        "Law, Criminal Justice, and Society",
        "Linguistics",
        "Marketing",
        "Materials Science and Engineering",
        "Mathematics",
        "Mathematical Biology",
        "Mathematics-Economics",
        "Mechanical Engineering",
        "Media and Professional Communications",
        "Microbiology",
        "Molecular Biology",
        "Museum Studies",
        "Music",
        "Natural Sciences",
        "Neuroscience",
        "Nursing",
        "Nutrition Science",
        "Pharmacy",
        "Philosophy",
        "Physics",
        "Physics and Astronomy",
        "Physics and Quantum Computing",
        "Political Science",
        "Politics and Philosophy",
        "Psychology",
        "Public and Professional Writing",
        "Public Service",
        "Rehabilitation Science",
        "Religious Studies",
        "Russian",
        "Social Work",
        "Sociology",
        "Spanish",
        "Statistics",
        "Studio Arts",
        "Supply Chain Management",
        "Theatre Arts",
        "Urban Planning and Geographic Analysis",
        "Urban Studies"
      ];

    const uri = "http://localhost:8080/api/gemini";


    const [resp, setResp] = useState('');
    const [interest, setInterest] = useState('');
    

    const handleSubmit = async() => {
        const formData = new FormData();

        formData.append('Interests', interest)
        const customHeader = {
            headers: {
                "Content-Type": 'multipart/form-data',
            },
        }
        
        const response = await axios.post(uri, formData, customHeader)
        console.log(response)
        setResp(response.data['Response']);
        setInterest('');

    }

  

  return (
    <div className="container-fluid text-center">
        <div className="row-2">
            <h3> What subject(s) are you interested in? </h3>
            <div className="input-group d-flex flex-column align-items-center">
                <div className="col-8">
                <textarea className="form-control" aria-label="With textarea" style={{height: "200%"}}
                value={ interest } onChange={e => setInterest(e.target.value)}></textarea>
                </div>
            </div>
            
            {/*<Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" 
                style={{fontWeight: "bold", backgroundColor: "#003594", color: "#FFB81C"}}>
                    Majors
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {majors.map((item) => (
                        <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>*/}
            {resp && (
                <div className="Response-message">
                    {resp}
                </div>
            )}
            <button onClick={handleSubmit}>Submit!</button>
        </div>
    </div>
  )
}

export default HomeScreen
