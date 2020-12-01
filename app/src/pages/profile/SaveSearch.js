import React,{useEffect,useContext} from 'react'
import * as ROUTES from '../../constants/routes'
import Loading from "../../containers/LoadingContainer"
import { Housecard,Profile } from '../../components/export';
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
             <Profile>
                <Profile.Text>  This is Save Search page!</Profile.Text>
                  
            
                <Loading/>
            </Profile>
            </>
        )
   
}

export default SaveSearch
