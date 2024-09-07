import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import SinglePage from "./components/singlePage/SinglePage"
import About from "./components/about/About"
import New from "./components/news/News"
import Contact from "./components/contact"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<> <Header/>, <Homepages/> /,<Footer/>  </>
    },
    {
      path: "/singlepage/:id",
      element: <>
<Header/>,
      <SinglePage/>  </>
      
    },
    {
      path: "/about",
      element:   <> <Header/>, <About/>  ,<Footer/>  </>
    },
    {
      path: "/contact",
      element:    <> <Header/>, <Contact/>  ,<Footer/>  </>
    },
   
    {
      path: "/news",
      element: 
     <> <Header/>, <New/> ,<Footer/>  </>
    

    },
  ])
  return (
    <>

<RouterProvider router={router}>

</RouterProvider>
</>
  )
}

export default App
