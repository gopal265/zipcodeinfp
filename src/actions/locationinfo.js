import * as api from "../api/locationinfo"
import { FAIL_LOCATION_INFO, REQUEST_LOCATION_INFO, SUCCESS_LOCATION_INFO } from "../constants/locationConstants";
export const  getLocationInfo =  (postalCode) => async(dispatch) =>{

    try{
        // dispatch the action telling the request is send
        dispatch({type:REQUEST_LOCATION_INFO})
        const {data }  =  await api.fetchLocationInfo(postalCode);
        // dispatch the action telling the response is recieved and data is sucessfully fetched
        dispatch({type:SUCCESS_LOCATION_INFO,payload: data})
    }
    catch(error){
        // dispatch the action telling an error occurred
        dispatch({type:FAIL_LOCATION_INFO,payload:"Unable to Fetch the Location Info"})
    }
}