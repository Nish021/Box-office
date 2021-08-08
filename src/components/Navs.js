import React from 'react';
import {Link} from 'react-router-dom';

//to make navbar Home and starred
const LINKS = [ {to:'/' , text: 'Home'} , {to:'/starred', text:'Starred'}];
const Navs = () => {
  return (
    <div>
      <ul>
        {/* <li><Link to="/starred">Go to starred page</Link></li> */
            LINKS.map( (item) => {
             return (
             <li key={item.to}> 
                <Link to={item.to}>{item.text}</Link>
              </li>
            )})
        }
      </ul>
    </div>
  );
};

export default Navs;