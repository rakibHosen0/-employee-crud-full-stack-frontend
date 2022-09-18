import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import AddEmployee from "./component/AddEmployee/AddEmployee";
import Employees from './component/Employees/Employees';
import Navbar from './component/Navbar/Navbar';
import UpdateEmployee from "./component/UpdateEmployee/UpdateEmployee";

function App() { 
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Employees/>}></Route>
        <Route path='/employeelist' element={<Employees/>}></Route>
        <Route path='/addEmployee' element={<AddEmployee/>}></Route>
        <Route path='/updateEmployee/:id' element={<UpdateEmployee/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
