

import {BrowserRouter, Routes, Route, Link, HashRouter} from 'react-router-dom/dist';
//export const TasksDispatchContext = createContext(null);

export default function Card(props){
   function classes(){
     const bg = props.bgcolor ? ' bg-' + props.bgcolor:'';
     const txt = props.txtcolor ? 'text-'+ props.textcolor:'text-white';
     return 'card mb-3' + bg + txt;
  }
 return (
    <div className="home-card" style={{maxWidth: "18rem"}}>
      <div className="card-header">{props.header}</div>
      <div key={1} className="">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id="createStatus">{props.status}</div>)}
      </div>
    </div>
  );
}