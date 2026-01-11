import { useState, useContext } from "react"
import { Studentscontext } from "../App"
function Addedstudent(props) {
    const { students, setstudents, favourite, setfavourite } = useContext(Studentscontext)
    const [btnColor, setbtnColor] = useState(true)
    function addfav(student,btnid) {
        setfavourite((prev) => [...prev, student])
        if (item.id === btnid) {
            setbtnColor(false)
        }

    }
    return (
        <div className="flex flex-col gap-3 border rounded-md w-full md:w-[40%]  p-5 bg-blue-400 text-white h-[300px] overflow-y-scroll grow">
            <h1 className="mx-auto font-bold text-2xl">Added Student</h1>
            {
                students.length === 0 ? <p>No students is here yet :(</p> : <p></p>
            }



            {
                students.map(function (item, index) {
                    return (
                        <div className="flex justify-between items-center">
                            <p className="text-black ">{index + 1}.{item.StudentName} ({item.StudentRoll}) </p>
                            <button style={{ backgroundColor: btnColor ? "red" : "green" }} className=" p-1 rounded" onClick={() => addfav(item)}>Add Favourite</button>
                        </div>
                    )

                })
            }





        </div>

    )
}
export default Addedstudent