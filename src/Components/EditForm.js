import { setTargetValue } from "../Constants/constants";
import { useState } from "react";

function EditForm({ activitieId, name, description }) {
    // const activitieId = props.activitieId
    // const name = props.name
    // const description = props.description

    const [editedName, setEditedName] = useState('');
    const [editedDescription, setEditedDescription] = useState('');

    return (
        <div>
            <form>
                <label>Edit Name:
                </label>
                <input
                    value={editedName}
                    onChange={setTargetValue(setEditedName)}
                />
                <label>Edit Description:
                </label>
                <input
                    value={editedDescription}
                    onChange={setTargetValue(setEditedDescription)}
                />
                <button>Send</button>
            </form>
        </div>
    )
}

export default EditForm