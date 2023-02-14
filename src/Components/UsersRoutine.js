import { UserNameRoutines } from "../API/AccountReq";

function GetUsersRoutines(){
    return(
        <form onSubmit={async(event)=>{
            event.preventDefault();

            try{
                const response = await UserNameRoutines()

            }catch(error){
                throw Error(error)
            }
        }}>
            <button>TEST GETTING USER ROUTINES</button>
        </form>
    )
}

export default GetUsersRoutines;