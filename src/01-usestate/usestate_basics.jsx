import { useState } from "react";
import { data, people } from "./data";

const UseStateBasic = ()=>{

    const [ count , setCount ] = useState(0)

    const [person, updatePerson] = useState(data);


    // const[ people, updatePeople ] = useState(people)

    // UPDATING THE CLICK BUTTON
    const onHandleClick=()=>{
        setCount(count + 1)
        console.log(count);
        

        // to handle the delay of count value in console.log we can 
        // setCount((currentState)=>{
        //     const newState = currentState + 1;
        //     return currentState;
        // })
    }

    //REMOVING THE ITEM
    const removeItem = (id)=> {
        const newPeople = person.filter((person)=> person.id != id)
        updatePerson(newPeople)
    }

    const clearItem = ()=>{
        updatePerson([])
    }

    

    // updating the people in here 
    const handlePeople=()=>{
       updatePeople( people.name = 'Ram',
        people.age = 25,
        people.city = 'Kathmandu')

    }

    return <div>
        <h1>You clicked {count} times</h1>
        <button onClick={onHandleClick}>CLICK !</button>

        {/* MAPPING THE LIST */}
        {
            person.map((person)=>{
                const { id, name } = person
                return <div key={id}>

                   <h3>{ name }</h3>
                   <button onClick={()=>{
                    removeItem(id)
                   }} >Remove</button>
                </div>
            })
        }

        <button onClick={clearItem}>Clear Item</button>
    </div>
}


export default UseStateBasic;