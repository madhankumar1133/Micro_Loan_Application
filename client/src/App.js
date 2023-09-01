
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Signin } from './signin';
import { Customerdetails } from './customerdetails';
import { Login } from './login';
import { Loan } from './loan';
import { Loanlow } from './loanlow';
import { Loanhigh } from './loanhigh';
import { Loanmiddle } from './loanmiddle';
import { Menu } from './menu';
import { Solutions } from './textcomponents/solutions';
import { Conditions } from './textcomponents/conditions';
import { Aboutloan } from './textcomponents/aboutloan';
import { Contact } from './textcomponents/contact';
import { Success } from './textcomponents/success';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/customerdetails' element={<Customerdetails/>}/>
        <Route path='/loan' element={<Loan/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/loanlow' element={<Loanlow/>}/>
        <Route path='/loanmiddle' element={<Loanmiddle/>}/>
        <Route path='/loanhigh' element={<Loanhigh/>}/>
        <Route path='/solutions' element={<Solutions/>}/>
        <Route path='/conditions' element={<Conditions/>}/>
        <Route path='/aboutloan' element={<Aboutloan/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/success' element={<Success/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
