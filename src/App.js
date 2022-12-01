import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./Pages/Register.jsx"
import Login from "./Pages/Login.jsx"
import WritePost from "./Pages/WritePost"
import SinglePost from "./Pages/SinglePost"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import "./style.scss"
const Layout =()=>{
  return (<>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/post/:id",
        element: <SinglePost/>,
      },
      {
        path: "/write",
        element: <WritePost/>,
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/write",
    element: <WritePost/>,
  },
  {
    path: "/single",
    element: <SinglePost/>,
  },
]);


function App() {
  return (
    <div className="app">
      <div className="container">

  <RouterProvider router={router} />
      </div>
    </div>
  );
}





export default App;
