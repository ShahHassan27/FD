import React, {Component} from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import jd from './jd.png';


class Logo extends Component {
  render() {
    return (
    	<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 51 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner">
 					<img src={jd} alt='profile' style={{height:150}}/>
 				</div>
			</Tilt>
    	</div>
  );
}
}

export default Logo;