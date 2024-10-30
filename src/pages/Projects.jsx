import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Templates from "../components/Templates"
import { useState } from "react"
const Projects = () => {
    const [navHeight, setNavHeight] = useState(null);
  return (
    <div className="min-h-screen bg-backGround" style={{ marginTop: navHeight ? `${navHeight}px` : '0px' }}>
       <Navbar getNavHeight={setNavHeight}/>
      <div className="container mx-auto px-4 py-16">
        <Templates />
      </div>
      <Footer />
    </div>
  )
}

export default Projects
