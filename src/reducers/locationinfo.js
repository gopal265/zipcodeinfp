import { CLEAR, FAIL_LOCATION_INFO, REQUEST_LOCATION_INFO, SUCCESS_LOCATION_INFO } from "../constants/locationConstants";


export const  getLocationInfo =  (state={location :{}},action) =>{

    switch(action.type){

        case REQUEST_LOCATION_INFO:
            return {
                // telling the request is sent and waiting for response
                loading : true
            }
        case SUCCESS_LOCATION_INFO:
            return {
                // successfully fetch the data
                loading : false,
                location : action.payload,
                success:true
            }
        case FAIL_LOCATION_INFO :
            return {
                // fail to fetch the data ,error occured
                loading : false,
                error : action.payload
            }
        case  CLEAR :
            return {
                // clear error and fetched data
                error : null,
                location : {}
            }
        default  :
            return state;

    }
}