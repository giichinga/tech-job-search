import { Link } from "react-router-dom";
import errorImg from "../assets/error.png";
import '../CSS/error.css';

function Error() {
  return (
    <div className="container">
        <img className="errorImg" src={errorImg} alt="404 Error" />
        <Link to='/tech-job-search/home'>
            <button>Go to Home</button>

        </Link>
        
    </div>
  );
}

export default Error;