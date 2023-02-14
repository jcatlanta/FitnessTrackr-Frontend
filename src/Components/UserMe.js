function UserMe(){
    const user = localStorage.getItem('TOKEN_STORAGE_KEY')


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
                    console.log(user)
                })

            }catch(error){
                throw Error(error)
            }

        }}>
            <button>TEST ME</button>
        </form>
  
    )
}

export default UserMe;