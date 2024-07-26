import React from 'react';
import { Link } from 'react-router-dom';


function NavBar (){
    return (
        <div className='navlist'>
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = '/students'>Students</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;