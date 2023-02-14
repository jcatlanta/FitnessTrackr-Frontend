import { GetAllActivities } from "../API/AccountReq";
import { useState } from "react";




function GetActivities(){

    const [activities,setActivities] = useState([]);


    async function GetAllActivities(props){
    try{
  
        
        const TOKEN_STRING = localStorage.getItem('replyToken')

        const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                     },


            }).then(response => response.json()).then(result =>{
                console.log(result)

                setActivities(result)
                // for(let i = 0; i < result.length;i++){
                //   //  console.log(result[i])
                //     setActivities(result[i])
                //     console.log(activities)
                    
                    
                // }
                
                

            })

            

    }catch(error){
        throw Error;
    }
}


    return (
        <div>
            <form onSubmit={async(event)=>{
                event.preventDefault();
                // try{
                //     const response = await GetAllActivities()
                    
                // }catch(error){
                //     throw Error(error)
                // }
            }}>
                <button onClick={GetAllActivities}>Get Activities</button>

                {
                    activities.map((activitie)=>{
                        return(
                            <div className="card" key={activitie.id}>
                                <h3>Activities</h3>
                                <ul className="container">
                                <li>Name: {activitie.name}</li>
                                <li>Description: {activitie.description}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    )
}

export default GetActivities