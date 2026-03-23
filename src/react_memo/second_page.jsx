import { memo } from 'react';

export const SecondPage = memo((props)=>{
        console.log('Loading the Second Page')
        return (
        <div>
            <h1>This is from second Page</h1>
            <p>{props.value}</p>
        </div>
    )
})