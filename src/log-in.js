import style from './styles/style4login.css';
import UserContext from './userContext.js';
import {useContext} from 'react';
import { useState } from 'react';
import Card from './card.js';


export default function LogIn(){
    const[usersEmails, setUsersEmails] = useState("");
    const[usersPWDs, setUsersPWDs] = useState("");
    const[isValidPassCode, setIsValidPassCode] = useState(false);
    const[isValidEmail, setIsValidEmail] = useState(true);
    const[statusMsg, setStatusMsg] = useState("");
    const users = useContext(UserContext);
    
    function areEmailPwdValid(email, password){
          let usrIndex = users.findIndex(item => (item.usrEmail.trim().toLowerCase()===email.trim().toLowerCase())&&(item.usrPassCode.trim().toLowerCase()===password.trim().toLowerCase()));
          if(email.trim() =="" || email==null){
             setStatusMsg('Email Id is missing or empty');
             setIsValidEmail(false);
             setIsValidPassCode(false);
          } else if(password.trim()=="" || password==null){
             setStatusMsg('Passcode is missing');
             setIsValidEmail(false);
             setIsValidPassCode(false);
          }
          else if (usrIndex<0){
             setStatusMsg('Email/passcode not found');
             console.log('user id, pwd found')
             setIsValidPassCode(false);
             setIsValidEmail(false);
          } else if(usrIndex>=0){
            setStatusMsg('Login is success');
            setIsValidEmail(true);
            setIsValidPassCode(true);
            console.log('user id, pwd not found');
          } else{

          }
      }
         
        return(
          <UserContext.Provider value={users}>
          <Card 
            txtcolor='black' 
            bgcolor="primary"
            header={<div className='create-account'><h3>Log In</h3></div>} 
            title="Welcome to B&B Bank"
            text="Signup and get $100 bounus"
            body={(<div className='create-account-body'>
                    <div className=''></div>
                    <div className='login-body'>
                        <p>Enter email Id</p>
                        <p><input type='email' placeholder='add email' value={usersEmails} onChange={e => setUsersEmails(e.target.value)} required/></p>
                        <p>Enter Pass Code</p>
                        <p><input type='password' placeholder='add pwd' value={usersPWDs} onChange={e => setUsersPWDs(e.target.value)} required/></p>
                        <p><button onClick={() => {setUsersEmails(''); setUsersPWDs('');setStatusMsg(''); areEmailPwdValid(usersEmails, usersPWDs);}}>LogIn</button></p>
                    </div>
                     {isValidEmail && isValidPassCode && <div className='lsuccStsMsg'>
                        <ul>
                        <li>Success</li>
                        <li>{statusMsg}</li>
                        </ul>
                        </div>}
                    {!isValidEmail && !isValidPassCode &&<div className='lwarnStsMsg'>
                        <ul>
                        <li>Not success</li>
                        <li>{statusMsg}</li>
                        </ul>
                        </div>}
                    </div>)}
                  />
            </UserContext.Provider>
        );
}