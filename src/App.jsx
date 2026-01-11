import Container from "./container.jsx"
import Favourite from "./components/favouriteStudents.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createContext } from "react"
import {useState} from "react";
export const Studentscontext=createContext()
function App(){
      const [students,setstudents] = useState([
      
      ])
      const [favourite,setfavourite] = useState([])
  return(
    <Studentscontext.Provider value={{students,setstudents,favourite,setfavourite}}>
   <BrowserRouter>
 <Routes>
  <Route path="/" element={<Container/>}></Route>
  <Route path="/favourite" element={<Favourite/>}></Route>
 </Routes>
 </BrowserRouter>
 </Studentscontext.Provider>
  )
}
export default App