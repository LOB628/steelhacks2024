//import { Link } from "react-router-dom";
import logo from "../assets/panthers_logo.png"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#003594"}}>
        <div className="container-fluid">
            <div className="row-sm">
                <a className="navbar-brand" href="" style={{fontSize: "24px", fontWeight: "bold", color: "#FFB81C"}}>
                    <img src={logo} alt="Panther" width="30" height="24"/>
                    <span>&nbsp; Pitt ClassFinder</span>
                </a>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit" style={{fontWeight: "bold", color: "#FFB81C"}}>Search</button>
            </form>
            </div>
        </div>
        </nav>
    );
};

export default NavBar;