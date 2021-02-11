import React from 'react'
import '../App.css';

function MyNav() {
  let navbarStyle = {
      margin: 0,
      padding: 0,
  }
  return(
    <nav className='navBar'>
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
      </ul>
    </nav>
  )
}

export default MyNav;
