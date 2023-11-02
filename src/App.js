import './App.css';
import PostalCode from './components/PostalCode/PostalCode';
import LocationInfo from './components/LocationInfo/LocationInfo';
import { useSelector } from 'react-redux';
import Loader from './components/Loader/Loader';
function App() {
 
  const { loading} = useSelector(state => state.location);

  return (
    <div className="App center-v pl-1 pr-1">
      <div className='text-color'><h1>Find the Place</h1></div>
      <PostalCode />
      {
        loading === true ?(
          <Loader />
        ) :(
          <LocationInfo />
        )
      }

    </div>
  );
}

export default App;
