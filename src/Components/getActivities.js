import { GetAllActivities } from "../API/AccountReq";

function GetActivities(){
    return (
        <div>
            <form onSubmit={async(event)=>{
                event.preventDefault();
                try{
                    const response = await GetAllActivities()

                }catch(error){
                    throw Error(error)
                }
            }}>
                <button>Get Activities</button>
            </form>
        </div>
    )
}

export default GetActivities