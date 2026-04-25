import React from 'react';  
import './HeadNav.css';
function HeadNav({value}) {
  return (
    <div className='Navbar'>
      <div class="container">
        <h1 class="">Dhule Hotels</h1>
        <ul>
         {value ? ( <li>
            <a href="/">Home</a>
          </li>):""}
        </ul>
      </div>
  </div>
  )
}

export default HeadNav