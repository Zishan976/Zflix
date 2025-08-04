import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import './MovieDetails.css'

const MovieDetails = () => {
    const movieData = useLoaderData()
    const navigate = useNavigate()
    // const params = useParams()
    // console.log(params)

    if (!movieData || movieData.Response === "False") {
        return <p>Movie details not found.</p>
    }

    return (
        <div className="movie-details">
            <h1>{movieData.Title}</h1>
            <div className="movie-details-content">
                <img src={movieData.Poster} alt={movieData.Title} className="movie-poster" />
                <div className="movie-info">
                    <p><strong>Year:</strong> {movieData.Year}</p>
                    <p><strong>Genre:</strong> {movieData.Genre}</p>
                    <p><strong>Director:</strong> {movieData.Director}</p>
                    <p><strong>Actors:</strong> {movieData.Actors}</p>
                    <p><strong>Plot:</strong> {movieData.Plot}</p>
                    <p><strong>IMDB Rating:</strong> {movieData.imdbRating}</p>
                    <button onClick={() => { navigate(-1) }}>Go back</button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
