import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
const AccountBalanceContext = createContext([{emailId:"", accountBalance:0}]);
export default AccountBalanceContext;