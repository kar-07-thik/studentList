import Header from "./header.jsx"
import Menu from "./menu.jsx"
import { useContext } from "react"
import { Studentscontext } from "../App.jsx"
function Favourite() {
    const { students, setstudents, favourite, setfavourite } = useContext(Studentscontext)
    function removeHandler(removeid) {
        var removeArr = favourite.filter(function (item) {
            if (item.id === removeid) {
               return false
            }
            else{
                return true
            }
        })
        setfavourite(removeArr )
    }

    return (
        <>
            <Header />
            <Menu />
            <div className="bg-blue-400 p-2  h-[500px] m-10 rounded-2xl ">
                <h1 className="text-center font-bold text-3xl text-white">Favourite Students</h1>
                <div className=" flex-wrap gap-10 my-3 justify-between  items-center  mx-auto">

                    {
                        favourite.length === 0 ? <p className="text-red-600 text-center">No favourite students added :(</p> :

                            favourite.map(function (item, index) {
                                return (
                                    <div className=" flex gap-10 border justify-between items-center" key={index}>
                                        <div className="flex gap-2 items-center p-2 ">
                                            <p className="font-bold md:text-2xl "> ⭐ {item.StudentName} - </p>
                                            <p className="font-bold md:text-2xl ">{item.StudentRoll}</p>
                                        </div>

                                        <button className="bg-red-600 md:p-1 rounded-md text-white " onClick={()=>removeHandler(item.id)}>Remove</button>
                                    </div>
                                )

                            })





                    }
                </div>
            </div>

        </>

    )
}
export default Favourite