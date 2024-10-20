import { Link } from 'react-router-dom';

export default function Contact() {
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
              <li><a className='thisLink'>Contact</a></li>
            </Link>
        </ul>
    </nav>
        <div className='mainContent' >
            <h1>Contact</h1>
            <p>Feel free to reach out to us at:</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: antonnygichinga@gmail.com </p>
        </div>
        </>

    );

}