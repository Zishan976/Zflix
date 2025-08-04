import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Movie from "./pages/Movie"
import Contact, { contactData } from "./pages/Contact"
import AppLayout from "./Components/layout/AppLayout"
import "./App.css"
import ErrorPage from "./pages/ErrorPage"
import { getApiData } from "./Api/GetApiData"
import MovieDetails from "./Components/UI/MovieDetails"
import { getMovieDetails } from "./Api/GetMovieDetails"


function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getApiData
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader: getMovieDetails
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData
        },
        // Test error routes
        {
          path: "/test-500",
          element: <div>Testing 500 Error</div>,
          loader: () => { throw new Response("Internal Server Error", { status: 500 }); }
        },
        {
          path: "/test-401",
          element: <div>Testing 401 Error</div>,
          loader: () => { throw new Response("Unauthorized", { status: 401 }); }
        },
        {
          path: "/test-404",
          element: <div>Testing 404 Error</div>,
          loader: () => { throw new Response("Not Found", { status: 404 }); }
        }
      ]
    }

  ])

  return <RouterProvider router={router} />
}

export default App
