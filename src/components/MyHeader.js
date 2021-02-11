import React from 'react'
import '../App.css';
import MyNav from './MyNav';

function MyHeader(){
  return(
    <header class='App-header fill-window'>
      Here is my header!
      <MyNav />
    </header>
  )
}

export default MyHeader;
