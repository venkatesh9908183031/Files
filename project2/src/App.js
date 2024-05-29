import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Demo from './Components/ClassComponenets/Demo';
import PropsDemo from './Components/Props/PropsDemo';
import Product from './Components/Props/Product';
import StateDemo from './Components/State/StateDemo';
import EventBinding from './Components/EventBindings/EventBinding';
import EventBinding2 from './Components/EventBindings/EventBinding2';
import Users from './Components/Destruturing/Users';
import Produt2 from './Components/ClassComponenets/Produt2';
import State2 from './Components/State/State2';
import CRDemo1 from './Components/ConditionalRendering/CRDemo1';
import CRDemo2 from './Components/ConditionalRendering/CRDemo2';
import CRDemo3 from './Components/ConditionalRendering/CRDemo3';
import CRDemo4 from './Components/ConditionalRendering/CRDemo4';
import Array1 from './Components/Arrays/Array1';
import Array2 from './Components/Arrays/Array2';
import CSSDemo from './Components/ClassComponenets/Styling/CSSDemo';
import Form1 from './Components/FormHandeling/Form1';
import Form2 from './Components/FormHandeling/Form2';
import Table from './Components/Fragments/Table';
import RegularComponenet from './Components/PureComponents/RegularComponenet';
import PureComponentDemo from './Components/PureComponents/PureComponentDemo';
import Component1 from './Components/LifeCycleHook/Component1';
import Component2 from './Components/LifeCycleHook/Component2';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './Components/Routing/Dashboard';
import Adds from './Components/Routing/Adds';
import Edit from './Components/Routing/Edit';
import Delete from './Components/Routing/Delete';
function App() {
  return (
    <div className="App">
      {/* <Users id="1" name="Venkey" city="Kotakonda"/>
      <Produt2 id="2" name="Hunter"/>
      <State2/> */}
      {/* <CRDemo1/> */}
      {/* <CRDemo2/> */}
      {/* <CRDemo3/> */}
      {/* <CRDemo4/> */}
      {/* <Array1/> */}        
      {/* <Array2/> */}
      {/* <CSSDemo status={true}/> */}
      {/* <Form1/> */}
      {/* <Form2/> */}
      {/* <Table/> */}
      {/* <RegularComponenet/>
      <PureComponentDemo/> */}
      {/* <Component1/>
      <Component2/> */}
      <BrowserRouter>
      {/* <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/add'>Add</a></li>
          <li><a href='/edit'>Edit</a></li>
          <li><a href='/delete'>Delete</a></li>
        </ul> */}

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/add' element={<Adds/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
