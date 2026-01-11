import Addedstudent from "./addedStudent.jsx"
import { useState } from "react";
import { useContext } from "react";
import { Studentscontext } from "../App.jsx";
function StudentInput() {
 const {students,setstudents} = useContext(Studentscontext)
    const [eSName, seteSName] = useState("")
    const [eSRoll, seteSRoll] = useState("")
    function handleSName(e) {
        seteSName(e.target.value)
       
    }
      function handleSRoll(e) {
        seteSRoll(e.target.value)
       console.log(eSRoll)
    }
    function addStudent(){
        setstudents([...students,{
            id:students.length+1,
            StudentName:eSName,
            StudentRoll:eSRoll

        }])
        seteSName("")
        seteSRoll("")
    }
    return (
        <div className="flex-warp  justify-center my-10 md:flex">
            <div className="flex flex-col gap-7 w-full md:w-[40%]  h-[300px] p-5 border rounded-md grow">
                <h1 className="font-bold text-2xl text-blue-500 mx-auto">Student Input</h1>
                <input value={eSName} onChange={handleSName} className="border-2 p-2 rounded-md focus:outline-hidden" type="text" placeholder="Student Name"></input>
                <input value={eSRoll} onChange={handleSRoll} className="border-2 p-2 rounded-md focus:outline-hidden" type="text" placeholder="Student Roll No"></input>
                <button className="bg-blue-400 rounded p-2 w-20" onClick={addStudent}>Submit</button>

            </div>
            <Addedstudent></Addedstudent>
        </div>

    )
}
export default StudentInput