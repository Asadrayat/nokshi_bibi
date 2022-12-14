import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Checkout from "../Pages/Checkout"
import Details from "../Pages/Details"
import Home from "../Pages/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Login/Signup"
import SearchResult from "../Pages/SearchResult"
import ComingSoon from "../Pages/Shared/ComingSoon"
import ErrorPage from "../Pages/Shared/ErrorPage"
import PrivateRoute from "./PrivateRoute"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon />,
      },
      {
        path: '/service-details',
        element: <Details />,
      },
      {
        path: '/search-result',
        element: <SearchResult />,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router