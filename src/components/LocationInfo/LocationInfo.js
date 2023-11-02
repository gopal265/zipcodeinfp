import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CLEAR } from '../../constants/locationConstants';

const LocationInfo = () => {

    const { location, loading } = useSelector(state => state.location);
    const dispatch = useDispatch();

    // function which dispatch CLEAR to reducer to clear the location state  in the store to empty object
    const handleClear = () =>{
        dispatch({type:CLEAR});
    }

 

    return (

        <div className='center full-width'>
            {/* render the below JSX only if we get response and location is updated with the response data */}
            {   
                loading === false && location &&
                <div className='center-v info-wrapper'>
                    <h3 className='text-center pb-3 text-color'>Location Information</h3>
                    <table class="table table-striped  table-hover p-2">

                        <tbody>
                            <tr >
                                <th scope="row" >Postal Code</th>
                                {/* providing default values for the data members if they are not present */}
                                <td >{location["post code"] ? location["post code" ]: "Not Found"}</td>
                            </tr>

                            <tr>
                                <th scope="row" >Country</th>
                                <td>{location.country ? location.country : "Not Found"}</td>
                            </tr>

                            <tr>
                                <th scope="row">State</th>
                                <td>{location.places[0].state ? location.places[0].state : "Not Found"}</td>
                            </tr>

                            <tr>
                                <th scope="row" >Places</th>
                                <td  >
                                    {location.places.map((place,index) => (
                                        <div key={index} className='pb-1'>{place["place name"] ? place["place name"] : "Not Found"}</div>
                                    )
                                    )}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <div className='center'>
                        <button className='btn btn-primary' onClick={handleClear}> Clear </button>
                    </div>

                </div>
            }

        </div>
    )
}

export default LocationInfo
