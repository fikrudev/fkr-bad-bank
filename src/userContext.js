import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
const UserContext = createContext([{usrEmail:"", usrPassCode:"", usrAddDate:""}]);
export default UserContext;