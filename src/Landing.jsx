import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
    <nav className="topNav">
        <h1>TechSearch</h1>
        <ul className="navLinks" >
            <Link to="/about">
              <li><a>About</a></li>
            </Link>
            <Link to="/services">
              <li><a>Services</a></li>
            </Link>
            <Link to="/contact">
              <li><a>Contact</a></li>
            </Link>
        </ul>
    </nav>
    </>
  );
}

export default LandingPage;