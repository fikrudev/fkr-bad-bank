
import logo from './logo.svg';
import './App.css';
import Home from './bank-home';
import CreateAccount from './create-account';
import LogIn from './log-in';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './all-data';
import {BrowserRouter, Routes, Route, Link, HashRouter} from 'react-router-dom/dist';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
       <div>
        <BrowserRouter>
         <div className='bad-bank'>
           <Link to="/">Home</Link>&nbsp;&nbsp;
           <Link to="/create">CreateAccount</Link> &nbsp;&nbsp;
           <Link to="/login">LogIn</Link>&nbsp;&nbsp;
           <Link to="/deposit">Deposit</Link>&nbsp;&nbsp;
           <Link to="/withdraw">Withdraw</Link>&nbsp;&nbsp;
           <Link to="/alldata">AllData</Link>&nbsp;&nbsp;
           <hr/>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<CreateAccount/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/deposit" element={<Deposit/>}/>
            <Route path="/withdraw" element={<Withdraw/>}/>
            <Route path="/alldata" element={<AllData/>}/>
          </Routes>
         </div>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;