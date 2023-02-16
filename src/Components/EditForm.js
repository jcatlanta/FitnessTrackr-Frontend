function EditForm(props){
    const activitieId = props.activitieId
    return(
        <div>
            <form>
                <label>Edit Name:
                    <input/>
                </label>
                <label>Edit Description:
                    <input/>
                </label>
                <button>Send</button>
            </form>
        </div>
    )
}

export default EditForm