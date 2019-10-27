import React from 'react';

/* Converting this function to class 
  const Rgst = ({oRC}) => {
  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f3 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="txt" name="name"  id="name"/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input onClick= { () => oRC('home') } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
    </div>
  </div>
</main>
</article>
    
  );

  */

class Rgst extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        emil : '',
        pass : '',
        nam : ''
      }
    }

    oNC = (event)=>{
      this.setState({nam:event.target.value})
    }

    oEC = (event) =>{
      this.setState({emil:event.target.value})
    }

    oPC = (event) =>{
      this.setState({pass:event.target.value})
    }

    onSubmitSgnIn = () =>{

        fetch('https://quiet-retreat-78161.herokuapp.com/register',{
          method: 'post',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
            email: this.state.emil,
            password: this.state.pass,
            name: this.state.nam
          })
        })
          .then(response => response.json())
          .then(user =>{
            if (user.id){
              this.props.lodUser(user);
              this.props.oRC('home');
            }
          })        
      }
    
  render () {
  return (
  	<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
  	<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f3 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
               type="txt"
              name="name"  
              id="name"
              onChange={this.oNC}
              />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
               type="email" 
               name="email-address"  
               id="email-address"
               onChange={this.oEC}
               />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
               type="password" 
               name="password"  
               id="password"
               onChange={this.oPC}
               />
      </div>
    </fieldset>
    <div className="">
      <input onClick= {this.onSubmitSgnIn} 
             className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
             type="submit" value="Register"/>
      </div>
    </div>
</main>
</article>    
  );
  }
}

export default Rgst;