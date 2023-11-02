import React, {  useState } from 'react'
import "../LocationInfo/LocationInfo.css"
import { useDispatch, useSelector } from 'react-redux';
import { getLocationInfo } from '../../actions/locationinfo';
import { CLEAR } from '../../constants/locationConstants';
const PostalCode = () => {

    const [postalCode, setPostalCode] = useState("");
    const {  error } = useSelector(state => state.location);
    const dispatch = useDispatch();
    const inputError = document.getElementById("inputerror")


    // logic to handle the input field subimssion
    const handleSubmit = () => {
        inputError.innerHTML="";

        // check if the postalCode is a valid number or not 
        // if not display error message else dispatch the action to fetch the data from the api
        if (isNaN(postalCode)) {
            inputError.innerHTML = "Invalid Postal Code"
        }
        else {
            dispatch(getLocationInfo(postalCode))
        }
    }

    
    return (
        <>
            {
                error &&
                <div class="alert alert-danger full-width text-center message center" role="alert">
                    {error}
                    {/* on clicking the x mark it will dispatch clear action to reducer to clear the errors */}
                    <div className='x-mark' onClick={()=>dispatch({type:CLEAR})}>
                    <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            }
            <div className='center full-width pb-4'>

                <div className='center-v input-wrapper'>


                    <div class="error pb-4" id='inputerror' >

                    </div>
                    <div className='center'>

                        <div className='full-width'>
                            {/* using value and onChange attribute the control the state of the input field */}
                            <input type='text' className='user-input' placeholder='Enter Postal Code' value={postalCode} onChange={e => setPostalCode(e.target.value)} />
                        </div>

                        <div className='pl-4'>
                            <button className='btn btn-info' onClick={handleSubmit}>Submit</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default PostalCode
