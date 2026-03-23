import { useCallback, useState } from "react"
import USecondPage from "./u_second_page"

const UFirstPage =()=>{
    console.log('Parent Component Re-rendering')
    const [count, setCount ] = useState(0)

    const handleClick = useCallback(() => {
        setCount(prev => prev + 1)
    }, []);

    return (
       <div>
         <div>Use Call Back</div>
         <p className="font-bold text-4xl">{count}</p>
         <button onClick={handleClick} className="bg-red-600 p-3.5"> Adding </button>

        <USecondPage buttonName='Click Me Child' handleClick={handleClick}/>
       </div>
    )
}

export default UFirstPage