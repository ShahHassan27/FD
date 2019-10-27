import React from 'react';
import './Frec.css';

const Frec = ({iUrl,bx}) => {
  return (
    <div className = 'center ma'>
	    <div className = 'absolute mt2'>
	    	<img id = 'iImg' alt = 'Arab' src = {iUrl} width = '500px' height = 'auto' />
	    	<div className='bbx' style={{top: bx.tR, right:bx.rC, bottom: bx.bR, left: bx.lC}}>
	    	</div>
	    </div>
    </div>
  );
}

export default Frec;
