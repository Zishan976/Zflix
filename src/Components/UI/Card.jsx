import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ movieData }) => {
    return (
        <div className="card">
            <div className="card-image-wrapper">
                <img src={movieData.Poster} alt={movieData.Title} className="card-image" />
            </div>
            <div className="card-footer">
                <Link to={`/movie/${movieData.imdbID}`}>
                    <button className="watch-button">WATCH NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Card
