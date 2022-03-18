import './App.css';
import{useSelector} from "react-redux";
import Listtask from './component/Listtask';

function App() {
  const state =useSelector((state)=>({...state}));
  console.log("state",state);
  return (
    <div className="App">
    <h2>State</h2>
       <Listtask/>
    </div>
  );
}

export default App;
