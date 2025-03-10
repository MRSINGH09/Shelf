import Navbar from "./components/NavBar"
import BooksGallery from "./components/BooksGallery"
import HomePage from "./pages/HomePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Description from "./pages/Description"

const router=createBrowserRouter([{
  path:"/",
  element:<MainLayout/>,
  children:[{
    index:true,
    element:<HomePage/>}
  ,{
    path:"description/:id",
    element:<Description/>
  }]
}])


function App() {
 
  return (
    <RouterProvider router={router}/>
  )
}

export default App
