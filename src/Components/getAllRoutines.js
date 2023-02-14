import { getRoutines } from "../API/AccountReq";
import { useState } from "react";

function GetRoutines(){

    const [routines,SetRoutines] = useState([])

async function getRoutines(){
    try{
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines`,{
            headers:{
                'Content-Type':'application/json',
            },
        }).then(response => response.json()).then(result => {
            console.log(result)
            SetRoutines(result)
            
        })

    }catch(error){
        throw Error(error)
    }
}


    return(
        <div>
            <form onSubmit={async(event)=>{
                event.preventDefault();
            }}>
                <button onClick={getRoutines}>Get Routines</button>
                {
                    routines.map((routine)=>{
                        return(
                            <div className="card" key={routine.id}>
                                <h3>Routine</h3>
                                <ul className="container">
                                    <li>Name: {routine.creatorName}</li>
                                    <li>Description: {routine.name}</li>
                                    <li>Goal: {routine.goal}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    )
}


export default GetRoutines;