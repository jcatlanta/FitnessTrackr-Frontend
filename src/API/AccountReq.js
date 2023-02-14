import { useState } from "react";
export const BASEURL= 'http://fitnesstrac-kr.herokuapp.com/api'
export const STORAGE_KEY = 'replyToken'


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


        if (replyToken) {
            localStorage.setItem(`${STORAGE_KEY}`, replyToken)
        }

    } catch (error) {
        console.error(error)
    }

}

export async function UserNameRoutines(){
    try{
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/albert/routines',{
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



