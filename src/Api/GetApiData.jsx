

export const getApiData = async () => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?Season=1&apikey=${import.meta.env.VITE_API_KEY}&s=titanic`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}


