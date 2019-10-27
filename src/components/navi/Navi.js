import React from 'react';
import './Navi.css';

const Navi = ({oRC, iSI}) =>{
    if (iSI) {
    return (
    <nav style={{display:'flex', justifyContent:'flex-end'}}>
      <p onClick = {() => oRC('sout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>      
    </nav>
  );
}
	else {
		return(

			<nav style={{display:'flex', justifyContent:'flex-end'}}>
      		<p onClick = {() => oRC('Sgn')} className='f3 link dim black underline pa3 pointer'>Sign In</p>      
      		<p onClick = {() => oRC('register')} className='f3 link dim black underline pa3 pointer'>Register</p>      
    		</nav>

			);
	}
    
}

export default Navi;
