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
                <div className=" grid-grid-col-[1fr-auto] gap-10 my-3  w-[50%] mx-auto">

                    {
                        favourite.length === 0 ? <p className="text-red-600 text-center">No favourite students added :(</p> :

                            favourite.map(function (item, index) {
                                return (
                                    <div className=" flex gap-10  justify-between items-center" key={index}>
                                        <div className="flex gap-2 items-center mb-2">
                                            <p className="font-bold text-2xl "> ⭐ {item.StudentName} - </p>
                                            <p className="font-bold text-2xl ">{item.StudentRoll}</p>
                                        </div>

                                        <button className="bg-red-600 p-1 rounded-md text-white" onClick={()=>removeHandler(item.id)}>Remove</button>
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