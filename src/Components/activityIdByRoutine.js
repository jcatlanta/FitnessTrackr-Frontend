import { getActivityIdR } from "../API/AccountReq"

function ActIdRoutine(){
    return(
        <form>
            <button onClick={getActivityIdR}>
                Test getting Routines by ActId
            </button>
        </form>
    )
}

export default ActIdRoutine