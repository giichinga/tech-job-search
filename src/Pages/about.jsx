import { Link } from 'react-router-dom';


 function About() {
    return (
      document.title = 'TechSearch - About',
       <>
         <nav className="topNav">
        <h1>TechSearch</h1>
        <ul className="navLinks" >
            <Link to="/about">
              <li><a className='thisLink' >About</a></li>
            </Link>
            <Link to="/services">
              <li><a>Services</a></li>
            </Link>
            <Link to="/contact">
              <li><a>Contact</a></li>
            </Link>
        </ul>
    </nav>
        <div className='mainContent' >
            <h1>About Us</h1>
            <p className='aboutDescription' >
            We connect businesses with exceptional talent in the tech sector. Our mission is to simplify the hiring process by providing access to a diverse pool of skilled professionals in fields such as software development, data analysis, and cybersecurity.

            We pride ourselves on a rigorous vetting process, ensuring that every candidate we recommend not only has the technical expertise but also fits your company culture. Our user-friendly platform and dedicated support team make recruiting seamless and efficient.

            Join us in building the teams that drive innovation and success in the digital age!              </p>
            <Link to='/home'>
            <button className='toTalentBtn' >Search Talent</button>
            </Link>
        </div>

       </>

    );

}

export default About;