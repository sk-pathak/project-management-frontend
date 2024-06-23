import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"


const App = () => {

  return (
    <>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
