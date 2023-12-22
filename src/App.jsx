import Nav from "./Components/Nav"
import Banner from "./Components/Banner"
import About from "./Components/About"
import Services from "./Components/Services"
import Project from "./Components/Project"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { useEffect, useState } from "react"
import { RingLoader } from "react-spinners"
const App = () => {
  const[loading,SetLoading]=useState(false)
  useEffect(()=>{
   SetLoading(true)
   setTimeout(()=>{
    SetLoading(false)
   },2000)
  },[])
  return (
    <>
    {loading ?
    <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
      <RingLoader color="#C026D3" />
    </div>
  :
  <div className="bg-slate-900">
     <Nav/>
    <Banner/>
    <About/>
    <Services/>
    <Project/>
    <Contact/>
    <Footer/>
     </div>
  }
    </>
  )
}

export default App