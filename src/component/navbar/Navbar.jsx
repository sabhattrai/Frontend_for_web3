import React from 'react'
import "./navbar.css"
import {FaSearchPlus} from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Navbar_Links'>
            <div className='Logo'>
                <h1>Sandesh</h1>
            <div className='search_icon'>
                <FaSearchPlus className='icon' />
            <input
            className='Search' type='text'
            placeholder='Search'
            />
            </div>
            </div>
            <div className='Navbar_containers'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
        </div>
        <div className='buttons'>
           <button type='button' className='connect'>Connect</button>
        </div>
    </div>
  )
}

export default Navbar
