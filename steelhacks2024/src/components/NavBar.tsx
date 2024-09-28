//import { Link } from "react-router-dom";
import logo from "../assets/panthers_logo.png"
import { useState } from "react"

function NavBar() {
    const [selectedItem, setSelectedItem] = useState(-1);

    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#003594"}}>
        <div className="container-fluid">
            <div className="row-sm">
                <a className="navbar-brand" href="/" style={{fontSize: "24px", fontWeight: "bold", color: "#FFB81C"}}>
                    <img src={logo} alt="Panther" width="30" height="24"/>
                    <span>&nbsp; Pitt ClassFinder</span>
                </a>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item px-3" 
                onMouseEnter={() => {
                    setSelectedItem(0);
                }}
                onMouseLeave={() => {
                    setSelectedItem(-1);
                }}
                style={{backgroundColor: selectedItem === 0 ? "#0d6efd" : "transparent",}}>
                    <a href="https://my.pitt.edu/" target="_blank" style={{fontWeight: "bold", color: "#FFB81C", textDecoration: "none"}}>myPitt Homepage</a>
                </li>
                <li className="nav-item px-3" 
                onMouseEnter={() => {
                    setSelectedItem(1);
                }}
                onMouseLeave={() => {
                    setSelectedItem(-1);
                }}
                style={{backgroundColor: selectedItem === 1 ? "#0d6efd" : "transparent",}}>
                    <a href="https://catalog.upp.pitt.edu/index.php?catoid=225" target="_blank" style={{fontWeight: "bold", color: "#FFB81C", textDecoration: "none"}}>Course Catalog</a>
                </li>
                {/*<li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>*/}
            </ul>
            {/*<form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit" style={{fontWeight: "bold", color: "#FFB81C"}}>Search</button>
            </form>*/}
        </div>
        </nav>
    );
};

export default NavBar;