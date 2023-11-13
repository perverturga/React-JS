import './App.css';
import CourseList from './components/CourseList';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { calculateTotal} from './control/cardSlice';
import { useSelector , useDispatch} from 'react-redux';
// courseitems a erişmek için useselector
// calculatetotal her değiştiğinde tekrar çağırcağım için usedispatchi de importluyorum


function App() {
  const {cardItems} = useSelector((store) => store.card);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotal())
    // herCardıtems değşitiğinde calculatetotlali çağorcam
  }, [cardItems] )
  // useeffectle birlikte cardItems değiştiğinde useefectle render ettiiryorum
  return (
    <div className="App">
      <Navbar/>
      <CourseList/>
    </div>
  );
}

export default App;
