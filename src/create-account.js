//import style from  './styles/style4createAccount.css';
import UserContext from './userContext.js';
import {useContext} from 'react';
import { useState } from 'react';
import Card from './card.js';

export default function CreateAccount(){
    const[usersEmails, setUsersEmails] = useState("");
    const[usersPWDs, setUsersPWDs] = useState("");
    const[confirmPWD, setConfirmPWDs] = useState("");
    const[isValidEmail, setIsValidEmail] = useState(true);
    const[doesEmailExist, setDoesEmailExist] = useState(false);
    const[isValidPWD, setIsValidPWD] = useState(true);
    const[statusMsg, setStatusMsg] = useState("");
    const users = useContext(UserContext);
    
    function validateUserEntry(email, password){
           const isValid = isUserInputValid(email, password);
           console.log(isValid);
           if(isValid){
              setStatusMsg("Account created successfully");
              addToUserContext(email, password);
           }
           console.log(users); 
      }
    function isUserInputValid (eml,pwd){
        if (eml=="" || eml==null) {
            setStatusMsg('Email field should not be empty');
            setIsValidEmail(false);
            console.log('email is empty');
            return false;
          } else if(!isEmailFormatValid(eml)){
                setStatusMsg('Eamil entered is not valid. Please enter valid email address');
                setIsValidEmail(false);
                console.log('entered email is not valid');
                return false
          } else if(isExistingUser(eml)){
                setIsValidEmail(false);
                setStatusMsg('Eamil already exists');
                return false; //user input is not valid as it already exists
          } else if(isValidPassword(pwd)){
               return true;
          }
          else{return}
       }
    function isExistingUser(emailItem){
           let isExistingEmail = false;
           users.map((item)=>{
            if(item.usrEmail.toLowerCase()==emailItem.toLowerCase()){
                setDoesEmailExist(true);
                isExistingEmail = true;
           } });
           if(isExistingEmail){
              setStatusMsg('This eamil already exists in accounts list');
              return true;
           } else{return};
      }   
    function isValidPassword(userpwd){
        if(userpwd.length>=6 && userpwd.length==confirmPWD.length && userpwd===confirmPWD){
            setIsValidPWD(true);
            return true;
         } else{
            setStatusMsg('Password mismatching or too short');
            return false;}
    }                

   function addToUserContext(email, pwd){
    const now = new Date();
       /*
       const getMonth = now.getMonth();
       const getDate = now.getDate();
       const getFullYr = now.getFullYear();
       const getHrs = now.getHours();
       const getMint = now.getMinutes();
       const getSec = now.getSeconds();
       const getMilSec = now.getMilliseconds();
       const tmstmp = getFullYr+'-'+getMonth+'-'+getDate+' '+getHrs+':'+getMint+':'+getSec+'.'+getMilSec;
       */
       const item = {usrEmail:email, usrPassCode:pwd, usrAddDate:now.toISOString()};
        users.push(item);
        return users;
   }
    function isEmailFormatValid(email){
       const allowed=/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/; return allowed.test(email);}

    return(
            <Card 
            txtcolor='black' 
            bgcolor="primary"
            header={<div className='create-account'><h3>Create Account</h3></div>} 
            title="Welcome to B&B Bank"
            text="Signup and get $100 bounus"
            body={(<div className='create-account-body'>
                    <div className=''></div>
                    <div className=''>
                        <p>Add email Id</p>
                        <p><input type='email' placeholder='add email' value={usersEmails} onChange={e => setUsersEmails(e.target.value)} required/></p>
                        <p>Add password</p>
                        <p><input type='password' placeholder='add pwd' value={usersPWDs} onChange={e => setUsersPWDs(e.target.value)} required/></p>
                        <p>confirm passsword</p>
                        <p><input type='password' placeholder='confirm pwd' value={confirmPWD} onChange={e => setConfirmPWDs(e.target.value)}/></p>
                        <p><button onClick={() => {setUsersEmails(''); setDoesEmailExist(false); setIsValidEmail(false);setIsValidPWD(false); setUsersPWDs(''); setConfirmPWDs(''); setStatusMsg(''); validateUserEntry(usersEmails, usersPWDs);}}>Submit</button></p>
                        {!isValidEmail && <h3>{statusMsg}</h3>}
                    </div>
                </div>)}
             />
     );
}