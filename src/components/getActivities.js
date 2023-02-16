import { GetAllActivities } from "../API/AccountReq";
import { useState } from "react";




function GetActivities() {

<<<<<<< HEAD
    const [activities, setActivities] = useState([]);
    const [activityId, setActivityId] = useState('')
    const [edit, SetEdit] = useState(false)
=======
    const [activities,setActivities] = useState([]);

>>>>>>> parent of 9d67b7e (Merge branch 'JeffBranch' of github.com:Jeffrey-Z1030/FitnessTrackr-Frontend into Fabian_Branch)

    async function GetAllActivities(props) {
        try {


            const TOKEN_STRING = localStorage.getItem('replyToken')

            const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },


            }).then(response => response.json()).then(result => {
                console.log(result)

                setActivities(result)
                // for(let i = 0; i < result.length;i++){
                //   //  console.log(result[i])
                //     setActivities(result[i])
                //     console.log(activities)


                // }



            })



        } catch (error) {
            throw Error;
        }
    }


    return (

        <div>

            {/* <>
                {
                    !edit

                        ?

                        null

                        :

                        <EditForm
                            activitieId={activityId} />




                }

            </> */}

            <form onSubmit={async (event) => {
                event.preventDefault();
                // try{
                //     const response = await GetAllActivities()

                // }catch(error){
                //     throw Error(error)
                // }
            }}>
                <button onClick={GetAllActivities}>Get Activities</button>

                {
                    activities.map((activitie) => {
                        return (
                            <div className="card" key={activitie.id}>
                                <h3>Activities</h3>
                                <ul className="container">
                                    <li>Name: {activitie.name}</li>
                                    <li>Description: {activitie.description}</li>
                                </ul>
<<<<<<< HEAD
                                <button onClick={
                                    (event) => {
                                        setActivityId(activitie.id);
                                        console.log(activitie.id)
                                        console.log(getActivityIdR(activityId));
                                    }}>Test </button>
                                <button
                                    onClick={(e) => {
                                        SetEdit(true);
                                        // patchActivitieByID()
                                    }
                                    }>Edit</button>

                                {
                                    edit ?

                                        <EditForm
                                            activitieId={activityId}
                                            name={activitie.name}
                                            description={activitie.description}
                                        />

                                        :

                                        null

                                }
=======
>>>>>>> parent of 9d67b7e (Merge branch 'JeffBranch' of github.com:Jeffrey-Z1030/FitnessTrackr-Frontend into Fabian_Branch)
                            </div>
                        )
                    })
                }
            </form>
        </div>
    )
}

export default GetActivities