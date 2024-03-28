import React from "react";
import {useContext} from 'react';
import Card from './context';
import images from './bank.png';
import ContextProvider from './context-provider';
export default function Home(){
//const ctx = useContext(ContextProvider);
  return(
   <Card 
         txtcolor="black" 
         bgcolor="primary"
         header="B&B Bank" 
         title="Store Jewelries from Moon"
         text="store non-precious items here"
         body={(<img src={images} className="img-fluid" alt="Response image"/>)}
    />
  );
}
