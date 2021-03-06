import './App.css'
import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from '../Landing/Landing'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Register from '../Register/Register'
import Login from '../Login/Login'
import CreateMedication from '../CreateMedicationPage/CreateMedicationPage'
import MedicineCard from '../Medicine/MedicineCard'


function App() {

    return (
        <div className="app">
          <React.Fragment>{
            <BrowserRouter>
              <NavBar></NavBar>
              
                <Routes>
                    <Route path="/" element={<Landing />}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<CreateMedication/>}/>
                    <Route path="/cabinet" element={<MedicineCard/>}/>


                </Routes>
                <Footer></Footer>
            </BrowserRouter>
          }</React.Fragment>
         
        </div>
    )
}

export default App
