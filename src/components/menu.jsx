import { BrowserRouter, Route,Link, Routes } from "react-router-dom"
function Menu(){
    return(
        <div className="flex gap-2 justify-center my-2 cursor-pointer">
            <Link to="/">Added Student    |</Link>
            <Link to="/favourite">Favourite Student</Link>
        </div>
    )
}

export default Menu