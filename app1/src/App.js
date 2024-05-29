import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Add from './Components/Add';
import Edit from './Components/Edit';
import Delete from './Components/Delete';
import MainPage from './Task/MainPage';

function App() {
  return (
    <div className="App">
<Dashboard/>
    </div>
  );
}

export default App;
