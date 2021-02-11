import React from 'react'
import MyList from './MyList'

function Introduction() {
  return(
    <div class='introduction'>
      <Title />
      <AboutMe />
      <Skills />
    </div>
  )
}

function Skills() {
  return ( 
  <div>
      <MyList /> 
  </div>
  );
}

function Title() {
  const name = 'Ceren Tüker';
  return(
    <h1>
      {name}
    </h1>
  )
}

function AboutMe(){
  return(
    <p>
      I am a developer that is learning React and this here is my first attempt!
    </p>
  )
}

export default Introduction
