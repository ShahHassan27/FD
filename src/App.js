import React, {Component} from 'react';
import Particles from 'react-particles-js';
// import Clarifai from 'clarifai';
import Navi from './components/navi/Navi';
import Logo from './components/logo/Logo';
import Rgst from './components/rgst/Rgst';
import Rank from './components/rank/Rank';
import Frm from './components/frm/Frm';
import Frec from './components/frec/Frec';
import Sgn from './components/sign/Sgn';
import './App.css';

/*const app = new Clarifai.App({
 apiKey: '1f2da7a4fd3542d1a4e44413de75345e'
}); moved to server img.js*/

const initState = {
			input:'',
			iUrl:'' ,
			box: {} ,
			route: 'Sgn' ,
			iSI: false ,
			user: {
					id: '',
					name: '',
					email: '',
					entries: 0,
					joined: ''
					}
		}

class App extends Component {
	constructor(){
		super();
		this.state = initState;
	}

	/* This was removed becuse it was to show how this works
	componentDidMount(){
		fetch('http://localhost:3000')
		.then(response=>response.json())
		.then(console.log)
	}
	*/

	lodUser = (dta) => {
		this.setState({user: {
			id: dta.id,
			name: dta.name,
			email: dta.email,
			entries: dta.entries,
			joined: dta.joined
		}
		})

	}

	cFL = (data) =>{
		const clair = data.outputs[0].data.regions[0].region_info.bounding_box;
		const img = document.getElementById('iImg');
		const width = Number(img.width);
		const height = Number(img.height);
		return{
			lC: clair.left_col * width,
			tR: clair.top_row * height,
			rC: width - (clair.right_col * width),
			bR: height - (clair.bottom_row * height)
		}
	}

	dFB = (bo) => {
		this.setState({box : bo});
	}

	oIC =(event)=>{
		this.setState({input: event.target.value});
	}

	oSb = () => {
		this.setState({iUrl:this.state.input});  /* will move to img.js
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input) */ 
		fetch('https://quiet-retreat-78161.herokuapp.com/imageUrl',{
			    method: 'post',
			    headers: {'Content-Type':'application/json'},
			    body: JSON.stringify({
			    input: this.state.input
			    })
	         })
		.then(response => response.json())
		.then(response => {
	    	if (response) {
	    		fetch('https://quiet-retreat-78161.herokuapp.com/image',{
	    			method: 'put',
	    			headers: {'Content-Type':'application/json'},
	    			body: JSON.stringify({
	    				id: this.state.user.id
	    			})
	    		})
	    		 .then(response => response.json())
	    		 .then(count => {
	    		 	this.setState(Object.assign(this.state.user,{entries:count}))
	    		 })
	    		 .catch(console.log)
	    		}
	    		this.dFB(this.cFL(response))
	    		})
	    .catch(err => console.log(err));
	    }

	oRC = (way) => {
		if (way === 'sout') {
			this.setState(initState/*{iSI:false}*/)
		} else if (way === 'home') {
			this.setState({iSI: true})
		}
			this.setState({route: way});
	}
	    
  render() {
  	const {iSI, box, iUrl, route} = this.state;
    return (
    <div className="App">
    	<Particles className='prt'/> 
      	<Navi iSI={iSI} oRC={this.oRC}/>
      {
      	this.state.route === 'home' ?
      	<div>
      	<Logo/>
      	<Rank name={this.state.user.name} entries={this.state.user.entries}/>
      	<Frm oIC={this.oIC} oSb={this.oSb}/>
      	<Frec bx={box} iUrl={iUrl}/>
      	</div>
      	:
      	(
      	route === 'Sgn'?
      	<Sgn oRC = {this.oRC} lodUser = {this.lodUser}/>
      	:
      	<Rgst oRC = {this.oRC} lodUser = {this.lodUser}/>
      	)
      	     	
      }    
    </div>
  );
}
}

export default App;