
import AccountBalanceContext from './accountBalanceContext.js';
import {useContext} from 'react';
import Card from './card';
import styles from './styles/style4withdrawal.css';
import { useState } from 'react';
import Deposit from './deposit.js';
const now = new Date();
export default function WithdrawFromAccount(){
    const [withdrawalAmt, setwithdrawalAmt] = useState(0);
    const [currentAcctBalance, setcurrentAcctBalance] = useState(0);
    const [userName, setUserName] = useState("");
    const [isValidOwner, setIsValidOwner] = useState(false);
    const [statusMessag, setStatusMessage] = useState('');
    const [isAmountValid, setIsAmountValid] = useState(true);
    const [isExistingAcctHolder, setIsExistingAcctHolder] = useState(false);
   
    const depositAcctContext = useContext(AccountBalanceContext);
    //const withdrawUserContext = useContext(UserContext);

    function checkAcctBalance(accntHolder, withdrawAmt){
        const uItem = {};
        let amount = Number(withdrawAmt);
         let uIndex = depositAcctContext.findIndex (item => item.emailId.trim().toLowerCase().toString()==accntHolder.trim().toLowerCase().toString());
         if(uIndex>=0){
            let currentB = Number(depositAcctContext[uIndex].accountBalance);
            console.log('user account found');
            if(currentB >=amount){
                setcurrentAcctBalance(0);
                depositAcctContext[uIndex].accountBalance -=amount;
                setcurrentAcctBalance(depositAcctContext[uIndex].accountBalance);
                setStatusMessage('Cash withdrawal is success');
                setIsAmountValid(true);
                setIsValidOwner(true);
                console.log('user has sufficient fund');
            } else{
                setcurrentAcctBalance( depositAcctContext[uIndex].accountBalance);
                setStatusMessage('Insufficient fund in the account');
                setIsAmountValid(false);
                setIsValidOwner(false);
                console.log('user do not have sufficient fund');
                console.log(depositAcctContext);
            }
         } else{
            setStatusMessage('User account not found');
            setIsValidOwner(false);
            console.log('user account not found');
         }
      
    }

    function onWithdraw (emailId, withdraw){
        let getAmnt = Number(withdraw);
        if(emailId.trim()=="" || emailId==null){
            setIsValidOwner(false);
            setIsAmountValid(false);
            setStatusMessage('Email id field is empty');
        }
        else if(isValidEmailId(emailId)===false){
            setIsValidOwner(false);
            setIsAmountValid(false);
            setStatusMessage('Email id is not valid type');
        }
         else if(isUserEmailIdExist(emailId)===false){
            setIsValidOwner(false);
            setIsAmountValid(false);
            setStatusMessage('We did not find user with emailId: '+emailId+"\n contact service desk @800-90-90 if issue persists");
         }
        else if(getAmnt<=0){
            setIsAmountValid(false);
            setIsAmountValid(false);
            setStatusMessage('withdraw amount should be at least $1 or greater');
           }
        else{
            checkAcctBalance(emailId,withdraw);
           }
    }
    function isValidEmailId(email){
        const allowed=/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/;
        return allowed.test(email);
     }   

    function isUserEmailIdExist(userId){
        depositAcctContext.map((item,i)=>{
            if(item.emailId.toLowerCase()===userId.toLowerCase()){
                return true;
            }
            else{return false;}
         });

    }

    return (
        <AccountBalanceContext.Provider value={depositAcctContext}>
        <Card 
         txtcolor='black' 
         bgcolor="primary"
         header={<div className='withdraw-header'><h3>Withdrawal service is open 24x7</h3></div>} 
         title="Welcome to B&B Bank Cash withdrawl Service Center"
         text="Deposit regularly (no matter how small it could be); you will see miraculously MONEY growth"
         body={(<div className='withdraw-body'>
                  <div className=''></div>
                  <div className=''>
                  <h4><strong>Enter email ID</strong></h4>
                    <p><input placeholder='Enter email id...' type='text' value={userName} onChange={e => setUserName(e.target.value)} required/></p>
                    <h4>Enter withdrawal Amount</h4>
                    <p><input type='number' min={0} value={withdrawalAmt} onChange={e => setwithdrawalAmt(e.target.value)}/></p>
                    <button onClick={() => {setwithdrawalAmt(0); setStatusMessage(""); onWithdraw(userName, withdrawalAmt);}}>Submit</button>
                     {(!isAmountValid && !isValidOwner)&&
                        <div className="warning-status-msg">
                            <ul>
                               <li>Status: <strong>FAILURE</strong></li>
                               <li>Message:&nbsp;<strong>{statusMessag}</strong> </li>
                              <li>TimeStamp:{now.toLocaleDateString() +' '+ now.toLocaleTimeString()}</li>
                            </ul> 
                        </div>
                      }
                      {isValidOwner && isAmountValid &&
                      <div className='success-status-msg'>
                           <ul>
                               <li>Status: <strong>SUCCESS</strong></li>
                               <li>Message:&nbsp;<strong>{statusMessag}</strong> </li>
                               <li>Balance:{currentAcctBalance}</li>
                              <li>TimeStamp:{now.toLocaleDateString() +' '+ now.toLocaleTimeString()}</li>
                        </ul>
                        </div>}
                   </div>
                 </div>)}/>
                 </AccountBalanceContext.Provider>
                 );
    }