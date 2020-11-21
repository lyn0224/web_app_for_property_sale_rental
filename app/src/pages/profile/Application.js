import React,{useEffect} from 'react'
import ProfileRouters from '../../Routers/profileRoters'

function Application(){
    const ID = 4
    const Application_URL = `http://localhost:9000/users/${ID}/buyerApplication`
    console.log(Application_URL)
    useEffect( ()=>{
        // fetch(Application_URL).then(response=>response.json()).then(result=>console.log(result))


            try{
                fetch(Application_URL, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ID: 4,
                    })
                }).then(res => res.json()).then(result=>{
                    console.log(result);
    
                })
            }catch(e){
                console.log(e);
            }
       
    },[])

    return(
    <>
    <p>this is application</p>
    </>
    )
}

export default Application