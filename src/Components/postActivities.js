import { useState } from "react";


function PostActivitie(){
    const [name,SetName] = useState('')
    const [description,setDescription] = useState('')


   async function PostCall(props){
    const user = localStorage.getItem('replyToken')

        try{
            
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user}`
                },
                body: JSON.stringify({
                    name,
                    description
                })
            }).then(response =>response.json()).then(result=>{
                console.log(result)
                console.log(user)
            })
        }catch(error){
            throw Error(error)
        }
    }

    const handleName = (event) =>{
        SetName(event.target.value)
    }

    const handleDescription = (event) =>{
        setDescription(event.target.value)
    }


    return(
        <div>
            <form
            onSubmit={(event)=>{
                SetName('')
                setDescription('')
                alert('Activitie created')
                event.preventDefault();

            }}
            >
                <h3>Create new Activity</h3>
                <label>Title :
                    <input placeholder="Activity Name"
                    onChange={handleName}
                    value={name}
                    />
                </label>
                <label>Descripton : 
                    <input placeholder="Description"
                    onChange={handleDescription}
                    value={description}
                    />
                </label>
                <button onClick={PostCall}>Send!</button>
            </form>
        </div>

    )


}


export default PostActivitie