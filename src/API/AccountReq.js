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
    
}



