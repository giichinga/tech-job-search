import { Link } from 'react-router-dom';

function Services() {
    return (
      <>
        <nav className="topNav">
        <h1>TechSearch</h1>
        <ul className="navLinks" >
            <Link to="/about">
              <li><a>About</a></li>
            </Link>
            <Link to="/services">
              <li><a className='thisLink'>Services</a></li>
            </Link>
            <Link to="/contact">
              <li><a>Contact</a></li>
            </Link>
        </ul>
    </nav>
        <div className='mainContent'>
            <h1>Services</h1>
            <div className='service'>
                <h3>Recruitment</h3>
                <p>Our platform connects businesses with skilled professionals in the tech sector. We simplify the hiring process by providing access to a diverse pool of talent in fields such as software development, data analysis, and cybersecurity.</p>
            </div>
            <div className='service'>
                <h3>Training</h3>
                <p>We offer training programs for professionals looking to advance their careers in tech. Our courses cover a range of topics, from programming languages to data science and machine learning.</p>
            </div>
            <div className='service'>
                <h3>Consulting</h3>
                <p>Our team of experts provides consulting services to help businesses navigate the complexities of the tech industry. From project management to cybersecurity, we offer tailored solutions to meet your needs.</p>
            </div>
            <div className='service'>
                <h3>Support</h3>
                <p>We provide ongoing support to our clients, ensuring that they have the resources they need to succeed. Whether you are looking to hire new talent or upskill your existing team, we are here to help.</p>
            </div>
            
            <Link to="/contact">
                <button className='contactButton' >Contact Us</button>
            </Link>
        </div>

      </>
    );

}

export default Services;