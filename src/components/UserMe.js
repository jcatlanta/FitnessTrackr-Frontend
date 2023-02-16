function UserMe(){
    const user = localStorage.getItem('replyToken')


    return(
        <form onSubmit={async(event)=>{
            event.preventDefault();

            try{
                const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me',{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user}`
                    }
                }).then(response => response.json()).then(result=>{
                    console.log(result)

                })

            }catch(error){
                throw Error(error)
            }

        }}>
            <button>TEST GETME</button>
        </form>
  
    )
}

export default UserMe;