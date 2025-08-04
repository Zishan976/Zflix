import './Home.css';
import moviePosters from '../assets/moviePosters.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h5>EXPLORE THE LATEST IN MOVIE INDUSTRIES</h5>
                <h1>Unlimited Movie, TVs Shows, & More.</h1>
                <p>Discover the Top Best Movies and Dramas with a catchy subtitle like Your Ultimate Guide to Must-Watch Content.</p>
                <Link to="/movie">
                    <button className="explore-btn">Explore Now</button>
                </Link>
            </div>
            <div className="home-image">
                <img src={moviePosters} alt="Movie Posters Collage" />
            </div>
        </div>
    );
};

export default Home;
