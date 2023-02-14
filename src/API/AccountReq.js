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
        const replyToken = json.data.token;


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
        const replyToken = json.data.token;


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

export async function GetAllActivities(props){
    try{
        const TOKEN_STRING = localStorage.getItem('TOKEN_STORAGE_KEY')
        const body = JSON.stringify({
            name : props.name,
            activities: props.activities
        })


        const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN_STRING}`
            },
            body
        })

    }catch(error){
        throw Error;
    }
}



