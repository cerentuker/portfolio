import './App.css';
import React from "react";
import Introduction from './components/Introduction'
import MyHeader from './components/MyHeader';
import MyLogo from './components/MyLogo';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div class='fill-window'>
      <div className='contentWrap'>
        <MyHeader />
        <MyLogo />
        <Introduction />
      </div>
      <MyFooter />
    </div>
  )
}

export default App;
