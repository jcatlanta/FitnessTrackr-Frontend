import { getRoutines } from "../API/AccountReq";

function GetRoutines(){
    return(
        <div>
            <form onSubmit={async(event)=>{
                event.preventDefault();

                try{
                    const response = await getRoutines()
                }catch(error){
                    throw Error(error)
                }
            }}>
                <button>Get Routines</button>
            </form>
        </div>
    )
}


export default GetRoutines;