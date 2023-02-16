import { STORAGE_KEY } from "./AccountReq"

export async function newActivity(props) {
    const userToken = localStorage.getItem(`${STORAGE_KEY}`);
    let body = JSON.stringify({

        name: props.name,
        description: props.description,

    });

    try {
        console.log(`userToken is ${userToken}`);
        console.log(`body is ${body}`);
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },

            body: JSON.stringify({

                name: props.name,
                description: props.description

            })
        }).then(response => response.json())
            .then(result => {
                console.log(result)
                console.log(userToken)
            })
    } catch (error) {
        throw Error(error)
    }
}

