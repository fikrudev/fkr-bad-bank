import React from "react";
import {useContext} from 'react';
import Card from './card';
import images from './bank.png';
import styles from './styles/style4home.css'
export default function Home(){
  return(
   <Card 
         txtcolor="black" 
         bgcolor="primary"
         header="B&B Bank" 
         title="Welcome to B&B Bank"
         text="Start saving today. Long journey starts with small steps"
         body={(<img src={images} className="img-fluid" alt="Response image"/>)}
    />
  );
}
