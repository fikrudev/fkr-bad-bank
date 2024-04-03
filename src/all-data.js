
import style from  './styles/style4createAccount.css';
import UserContext from './userContext.js';
import {useContext} from 'react';
import { useState } from 'react';
import Card from './card.js';
import { json } from 'react-router-dom';
export default function AllData(){
    const users = useContext(UserContext);
    const [isDataRequested, setIsDataRequested] = useState(false);
    function fetchData(){
        setIsDataRequested(true);
    }
     function hideData(){
        setIsDataRequested(false);
     }
  function DataTable (){

    const html = ()=> users.map((item, i)=>{
        if(item.usrEmail !="" && item.usrPassCode !="" && item.usrAddDate !=""){
        return(
          <>
            <tr><td>{item.usrEmail}</td><td>{item.usrPassCode}</td><td>{item.usrAddDate}</td></tr>
          </>
          )};
    });
      return(
        <div>
        <table>
          <thead><tr><td>user id</td><td>pass code</td><td>creation date</td></tr></thead>
          <tbody>{html()}</tbody>
        </table>
        </div>
      );
  }  
    return(
          <UserContext.Provider value={users}>
            <div className="user-context-cls">
             <Card 
                txtcolor='black' 
                bgcolor="primary"
                header={<div className='fetch-account'><h3>Welcome to B&B Bank Data Service Board</h3></div>} 
                title="Get Account History"
                text="B&B Bankers History"
                body={(<div className='allData-body'>
                        <div className=''></div>
                        <div className=''>
                            <h4>Click buttons to read or hide data</h4>
                            <button onClick={() => {setIsDataRequested(false); fetchData()}}>Fetch History</button>&nbsp; &nbsp;
                            <button onClick={() => {hideData()}}>Hide History</button>
                            <p></p>
                            {isDataRequested &&<div><DataTable/></div>}
                        </div>
                    </div>)}
                />
             </div>
         </UserContext.Provider>
     );
}