import React,{useEffect,useContext} from 'react'
import * as ROUTES from '../../constants/routes'
import Loading from "../../containers/LoadingContainer"

function SaveSearch() {

    
    function singlecard(obj){
        // console.log(obj.main_dir)
        return (
        <>               
           
            
        </>
        )
    }
    useEffect(()=>{
        // fetch user favorite table here
    },[])


        return(
            <>
             <div>
                This is Save Search page!
            </div>
            <Loading/>
            </>
        )
   
}

export default SaveSearch
