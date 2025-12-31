import { useContext } from "react"
import { SubjectContext } from "../Context-Data";

export default function Subjects(){
    const subject = useContext(SubjectContext);
    return <div className="bg-green-900 p-10">
        <h1>Subject Component: {subject}</h1>
        </div>
}

