import { useState } from "react";
import { SubjectContext } from "./Context-Data";
import College from "./components/College";

const ChangeToSubject = () => {

    const listofSubjects = ["Math", "Science", "History", "Geography", "English"];
    const [selectedSubject, setSelectedSubject] = useState(listofSubjects[0]);

    return <>
    <SubjectContext.Provider value={selectedSubject} >
        <select defaultValue={selectedSubject} onChange={(e)=>setSelectedSubject(e.target.value)} className="border-4 border-white p-2 mb-4 border-r-4" >
            {
                listofSubjects.map((subject, index) =>{
                    return <option key={index} value={subject}>{subject}</option>
                }
            )
            }
        </select>
    <College />
    
    </SubjectContext.Provider>    
    </>
}

export default ChangeToSubject;