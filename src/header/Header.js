import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Icon, Image, Segment, Sidebar} from 'semantic-ui-react'
import {index} from '../components/clinics/api'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button, Card,Menu } from 'semantic-ui-react'




import './Header.scss'



  const authenticatedOptions = (
    <React.Fragment>
    <div className="nav2">
    <h1 id="name" style={{
    position: "absolute",
    left: "15px",
    top: "15px"}}>ReQueue</h1>

      <div>
          <h3 ><Link to="/change-password">Change Password</Link></h3>
          <hr/>
          <h3><Link to="/create">Add Clinc</Link></h3>
          <hr/>
          <h3><Link to="/waiting">Informations</Link></h3>
          <hr/>
          <h3><Link to="/clinics">Clinics</Link></h3>
          <hr/>
          <h3><Link to="/sign-out">Sign Out</Link></h3>
          <hr/>
      </div>

      <div className="social1">
          <a style={{display: "inline",bottom:"10px", right: "60px", marginLeft:"30px"}} href="https://www.google.com/" target="_blank">
            <button class="ui facebook circular icon button">
              <i aria-hidden="true" class="facebook icon"></i>
            </button>
          </a>

          <a style={{display: "inline",bottom:"10px", right: "60px"}} href="https://twitter.com/meshal_qahtani" target="_blank">
          <button class="ui twitter circular icon button">
            <i aria-hidden="true" class="twitter icon"></i>
          </button>
          </a>

          <a style={{display: "inline",bottom:"10px", right: "60px"}} href="https://www.linkedin.com/in/mer-alqahtani/" target="_blank">
          <button class="ui linkedin circular icon button">
            <i aria-hidden="true" class="linkedin icon"></i>
          </button>
          </a>

          <a style={{display: "inline",bottom:"10px", right: "60px"}} href="https://www.google.com/" target="_blank">
          <button class="ui google plus circular icon button">
          <i aria-hidden="true" class="google plus icon"></i>
          </button>
          </a>
</div>


    </div>
  
    </React.Fragment>
  )
  
  const unauthenticatedOptions = (
    <React.Fragment>
      {/* <Link to="/sign-up" className="btn btn-warning">Sign Up</Link>
      <Link to="/sign-in" className="btn btn-warning">Sign In</Link> */}
    </React.Fragment>
  )
  
  const alwaysOptions = (
    <React.Fragment>
      <Link to="/" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Home</Link>

    </React.Fragment>
  )
 
  class Header extends Component {
   
    componentDidMount(){
      const user = this.props.user
      if (user){
      index(user)
      .then(res => {
      
       this.props.setAllClinics(res.data.clincs)
      })
    }
  }

  render(){
    const user = this.props.user
    console.log(user)
    return(
      <div className="nav">
      <h1 id="name" style={{
    position: "absolute",
    left: "15px",
    top: "15px"}}>ReQueue</h1>
      
        {/* { user && <div style={{textAlign:"center"}}><span style={{fontFamily:"Roboto"}}>Welcome, {user.email}</span><hr/></div>} */}
      
      { user ? (user.admin ? authenticatedOptions : 
      <div>     
      {this.props.allClinics.map((clinic,index) =>(
      <Menu style={{margin: "10px 30px"}}>
        <Menu.Item style={{backgroundColor:"#e5e4cc"}}>
         {clinic.name}
        </Menu.Item>

        <Menu.Item>
         {clinic.counter}
        </Menu.Item>

        <Menu.Item>
         {clinic.turn}
        </Menu.Item>
      </Menu>        
      
                        ))}
      {/* <div className="signOut">
      <Link to="/sign-out" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Sign Out</Link>
      <Link to="/waiting" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Waiting</Link>
      <Link to="/" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Home</Link>
      </div> */}
      <br/>
      <div>
      <h3><Link to="/clinics">Home</Link></h3>
      <hr/>
      <h3><Link to="/waiting">Informations</Link></h3>
      <hr/>
      <h3><Link to="/sign-out">Sign Out</Link></h3>
      <hr/>
      </div>
        </div> ): 
<div className="nav2">
    <h1 id="name" style={{
    position: "absolute",
    left: "15px",
    top: "15px"}}>ReQueue</h1>
<div>
          <h3>
          <Link to="/">About</Link>
          </h3>
          <hr/>
          <h3><Link to="/">Contacts</Link></h3>
          <hr/>
          <h3><Link to="/">Support</Link></h3>
          <hr/>
          <h3><Link to="/">FAQ</Link></h3>
          <hr/>
          <h3><Link to="/">Terms</Link></h3>
          <hr/>
          <h3><Link to="/">Home</Link></h3>
          <hr/>
</div>
<div className="social1">
          <a style={{display: "inline",bottom:"10px", right: "60px", marginLeft:"30px"}} href="https://www.google.com/" target="_blank">
            <button class="ui facebook circular icon button">
              <i aria-hidden="true" class="facebook icon"></i>
            </button>
          </a>

          <a style={{display: "inline",bottom:"10px", right: "60px"}} href="https://twitter.com/meshal_qahtani" target="_blank">
          <button class="ui twitter circular icon button">
            <i aria-hidden="true" class="twitter icon"></i>
          </button>
          </a>

          <a style={{display: "inline",bottom:"10px", right: "60px"}} href="https://www.linkedin.com/in/mer-alqahtani/" target="_blank">
          <button class="ui linkedin circular icon button">
            <i aria-hidden="true" class="linkedin icon"></i>
          </button>
          </a>

          <a style={{display: "inline",bottom:"10px", right: "60px"}} href="https://www.google.com/" target="_blank">
          <button class="ui google plus circular icon button">
          <i aria-hidden="true" class="google plus icon"></i>
          </button>
          </a>
</div>

{/* { alwaysOptions }
        <Link to="/waiting" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>About</Link>
        <Link to="/waiting" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Contact US</Link>
        <Link to="/waiting" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Home</Link> */}
</div> }
        
  
      </div>
    )
  }
}

const getState = state => {
  return{
      allClinics: state.clinics
  }
}
const setState = dispatch => {
  return{
      setAllClinics:(arrAllClinics)=>{
          return dispatch({
              type:"ALL_CLINICS",
              value:arrAllClinics
          })
      }

  }   

}

export default connect(getState,setState)(withRouter(Header))