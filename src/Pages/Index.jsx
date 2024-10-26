import { Link } from 'react-router-dom';
import  image1 from '../assets/laptop.jpg';
import image2 from '../assets/choosing.jpg';
import image3 from '../assets/happy.jpg';
import '../CSS/hero.css';


function Hero() {

    return (
        <>
        <nav className="topNav">
        <Link to= "/home">
          <h1 className='thisLink' >TechSearch</h1>
        </Link>
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
    <div className='hero'>
        <div className='left'>
            <img className='image3' src={image3} alt='happy' />
            <img  className='image1' src={image1} alt='laptop' />
            <img  className='image2' src={image2} alt='choosing' />
            
        </div>
        <div className='right'>
            <h1>Find the <span className='thisLink' >best tech talent</span> there is! </h1>
            <p>We connects businesses with skilled professionals in the tech sector. Whether you are looking to hire new talent or upskill your existing team, we are here to help.</p>
            <Link to='/search'>
                <button className='heroBtn' >Search Talent</button>
            </Link>
           
        </div>
    </div>
        </>

    );

}

export default Hero;