
import AccountBalanceContext from './accountBalanceContext.js';
import {useContext} from 'react';
import Card from './card';
import styles from './styles/style4deposit.css';
import { useState } from 'react';
const now = new Date();
export default function Deposit(){
    const [deposit, setDeposit] = useState(0);
    const [currentAcctBalance, setcurrentAcctBalance] = useState(0);
    const [userName, setUserName] = useState("");
    const [isValidOwner, setIsValidOwner] = useState(false);
    const [statusMessag, setStatusMessage] = useState('');
    const [isAmountValid, setIsAmountValid] = useState(true);
    const [isExistingAcctHolder, setIsExistingAcctHolder] = useState(true);
   
    const depositAcctContext = useContext(AccountBalanceContext);
    
    function findAccountHolder(accntHolder, depositAmt){
        let amount = Number(depositAmt);
        let index = depositAcctContext.findIndex(item=>item.emailId.trim().toString().toLowerCase()==accntHolder.trim().toLowerCase().toString());
        if(index>=0){
            depositAcctContext[index].accountBalance +=amount;
            setcurrentAcctBalance(depositAcctContext[index].accountBalance);
            setStatusMessage('Deposit is successfully added for existing account owner');
            console.log('adding deposit for existing user....');
            console.log(depositAcctContext);;
        } else{
            const uItem = {};
            uItem.emailId = accntHolder;
            uItem.accountBalance=amount;
            depositAcctContext.push(uItem);
            setStatusMessage('Deposit is successfully added to new account owner');
            setcurrentAcctBalance(amount);
            console.log('adding deposit for new user...');
            console.log(depositAcctContext);
        }
      
    }
    function onDeposit (emailId, deposit){
        let dpAmnt = Number(deposit);
        if(emailId.trim()=="" || emailId==null){
            setIsValidOwner(false);
            setStatusMessage('Email id field is empty');
        }
        else if(isValidEmailId(emailId)===false){
            setIsValidOwner(false);
            setStatusMessage('Email id is not valid type');
        }
         else if(isUserEmailIdExist(emailId)===false){
            setIsValidOwner(false);
            setStatusMessage('We did not find user with emailId: '+emailId+"\n contact service desk @800-90-90 if issue persists");
         }
        else if(dpAmnt<1){
            setIsAmountValid(false);
            setStatusMessage('Deposit amount should be at least $1 or greater');
           }
        else{
            findAccountHolder(emailId,deposit);
            setIsAmountValid(true);
            setIsValidOwner(true);
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
         header={<div className='deposit-header'><h3>Deposit to B&B Bank, open 24x7</h3></div>} 
         title="Welcome to Cash Deposit Service Center"
         text="Deposit regularly (no matter how small it could be); you will see miraculously MONEY growth"
         body={(<div className='deposit-body'>
                  <div className=''></div>
                  <div className=''>
                  <h4><strong>Enter email ID</strong></h4>
                    <p><input placeholder='Enter email id...' type='text' value={userName} onChange={e => setUserName(e.target.value)} required/></p>
                    <h4>Enter Deposit Amount</h4>
                    <p><input type='number' min={0} value={deposit} onChange={e => setDeposit(e.target.value)}/></p>
                    <button onClick={() => {setDeposit(0); setStatusMessage(""); onDeposit(userName, deposit);}}>Submit</button>
                    {(!isAmountValid || !isValidOwner)&&<div className="infoTouser">{statusMessag}</div>}
                    {isValidOwner && isAmountValid && <div className='deposit-status-cls'>
                        <ul>
                          <li>Status: Success</li>
                          <li>CurrentBalance:{currentAcctBalance}</li>
                          <li>TimeStamp:{now.toLocaleDateString() +' '+ now.toLocaleTimeString()}</li>
                        </ul>
                        </div>}
                   </div>
                 </div>)}/>
                 </AccountBalanceContext.Provider>
                 );
    }