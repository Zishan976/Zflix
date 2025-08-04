

export const getMovieDetails = async ({ params }) => {
    console.log(params)
    const id = params.movieId
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}


