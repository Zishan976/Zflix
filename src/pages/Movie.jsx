import { useLoaderData } from "react-router-dom"
import Card from "../Components/UI/Card"
import './Movie.css'


const Movie = () => {
    const movieData = useLoaderData()
    return (
        <ul className="movie-list">
            {movieData.Search.map((movie) => (
                <Card key={movie.imdbID} movieData={movie} />
            ))}
        </ul>
    )
}

export default Movie
