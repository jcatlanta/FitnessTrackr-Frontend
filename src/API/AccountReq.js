import { useState } from "react";
<<<<<<< Updated upstream
import UserMe from "../Components/UserMe";
=======
>>>>>>> Stashed changes
export const BASEURL= 'http://fitnesstrac-kr.herokuapp.com/api'
export const STORAGE_KEY = 'replyToken'
export const USER_ID = 'userId'


<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
export async function CreateAccount(props){
    const body = JSON.stringify({
         
            username: props.username,
            password: props.password,
        
    });
    console.log(body)
    try {
        const response = await fetch(
            `${BASEURL}/users/register`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            }
        )
        const json = await response.json();
        console.log(json)
        const replyToken = json.token;
        const userId = json.user.id 
        localStorage.setItem(`${USER_ID}`,userId)
        console.log(userId)


        if (replyToken) {
            localStorage.setItem(`${STORAGE_KEY}`, replyToken)
        }

    } catch (error) {
        console.error(error)
    }

}

export async function LoginAccount(props){
    const body = JSON.stringify({
         
            username: props.username,
            password: props.password,
        
    });
    console.log(body)
    try {
        const response = await fetch(
            `${BASEURL}/users/login`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            }
        )
        const json = await response.json();
        console.log(json)
        const replyToken = json.token;
        console.log(replyToken)
        const userId = json.user.id 
        localStorage.setItem(`${USER_ID}`,userId)
<<<<<<< Updated upstream
        alert('Logged in successful!')
=======
>>>>>>> Stashed changes



        if (replyToken) {
            localStorage.setItem(`${STORAGE_KEY}`, replyToken)
        }

    } catch (error) {
        console.error(error)
    }

}

export async function UserNameRoutines(){
    try{
<<<<<<< Updated upstream
        const username = localStorage.getItem('signedInUser')
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`,{
=======
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/albert/routines',{
>>>>>>> Stashed changes
            headers:{
                'Content-Type' : 'application/json',
            }
        }).then(response => response.json()).then(result =>{
            console.log(result)
        })
    }catch(error){
        throw Error("Failed to get user's Routines", error)
    }
}

<<<<<<< Updated upstream

export async function getActivityIdR(activitieId){
    try{
   
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activitieId}`,{
            headers:{
                'Content-Type': 'application/json'
            },
        }).then(response => response.json()).then(result =>{
            console.log(result)
        })

    }catch(error){
        throw Error(error)
    }
}

export async function patchActivitieByID(props){
    try{
        const activitieId = props.id
              
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activitieId}`,{
            method:"PATCH",
            body:JSON.stringify({
                name: props.name,
                description: props.description
            })
        }).then(response => response.json()).then(result => {
            console.log(result)
        })
        
    }catch(error){
        throw Error(error)
    }
}

=======
>>>>>>> Stashed changes
// export async function GetAllActivities(props){
//     try{

//         const [activitie,setActivitie] = useState([])
  
        
//         const TOKEN_STRING = localStorage.getItem('replyToken')

//         const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities',{
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                      },


//             }).then(response => response.json()).then(result =>{
//                 console.log(result)
//                 setActivitie(result)
                
                
                

//             })

            

//     }catch(error){
//         throw Error;
//     }
// }

// export async function getRoutines(){
//     try{
//         const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines`,{
//             headers:{
//                 'Content-Type':'application/json',
//             },
//         }).then(response => response.json()).then(result => {
//             console.log(result)
//             console.log(result[1].activities)
            
//         })

//     }catch(error){
//         throw Error(error)
//     }
// }



