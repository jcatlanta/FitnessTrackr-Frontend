import { useState, useEffect} from 'react';
import {CreateAccount} from '../API/AccountReq';



function SignUp(){
    const [username,SetUsername] = useState('')
    const [password,SetPassword] = useState('')

    const setCredentials = async () => {
        await CreateAccount({ username, password });
        // window.location.reload()
    }

    const setTargetValue = (cb) => {
        return (event) => {
          cb(event.target.value)
        }
      }

    return(
        <div>
            <form onSubmit={
                    (event) => {
                        event.preventDefault();
                        setCredentials()
                        SetUsername('')
                        SetPassword('')
                    }}>
                <h3>SIGNUP</h3>
                <input 
                placeholder='Enter Username'
                onChange={setTargetValue(SetUsername)}
                value={username}
                />
                <input placeholder='Enter Password'
                onChange={setTargetValue(SetPassword)}
                value={password}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}


export default SignUp;