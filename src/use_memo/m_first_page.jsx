import { useMemo, useState } from "react";

const MemoFirstPage = ()=>{

    console.log('USE MEMO HEADER')

    const [ count, setCount ] = useState(0)
    const [input, setInput] = useState(1)

    function expensivetask(value){
        console.log("inside expensive task")
        for(let i = 0 ; i< 10000; i ++){
            console.log('LOOP COMPLETED!!')
        }
        return value * 2
    }

    const taskValue = useMemo(()=> expensivetask(input),[input])

    return (
       <div>
            <div>Hello Use Memo First Page</div>
            <button onClick={()=>setCount(count+1)} className="bg-red-600 p-7">Add</button>
            <div className="font-extrabold">{count}</div>
            <p>{taskValue}</p>
            <input type="number"
            placeholder="enter number"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
             />
       </div>

    )
}

export default MemoFirstPage;