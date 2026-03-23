import { useState } from "react"
import { SecondPage } from "./second_page"

export const FirstPage = ()=>{
    console.log('Loading the first page')
    const [ count, setCount ] = useState(0)
    return (
        <div>
            <h1 className="font-bold m-3.5">This is from First Page Count : {count}</h1>
            <button className="bg-red-700 px-7 py-3 m-3.5" onClick={()=>setCount(count+1)}>Add</button>
            <SecondPage value="ssscccccccxxxx"/>
        </div>
    )
}