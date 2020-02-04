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
     
      <Link to="/change-password" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Change Password</Link>
      <Link to="/sign-out" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Sign Out</Link>
      <Link to="/create" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Add Clinc</Link>
      <Link to="/waiting" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Waiting</Link>
      <Link to="/clinics" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Clinics</Link>
  
  
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
      <h1 style={{
    position: "absolute",
    left: "15px",
    top: "15px"}}>ReQueue</h1>
      
        { user && <span>Welcome, {user.email}</span>}
        { user ? (user.admin ? authenticatedOptions : 
      <div>     
      {this.props.allClinics.map((clinic,index) =>(
      <Menu>
        <Menu.Item>
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
      <div className="signOut">
      <Link to="/sign-out" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Sign Out</Link>
      <Link to="/waiting" className="btn btn-light" style={{backgroundColor:"#bac7a7"}}>Waiting</Link>
      </div>

        </div> ):''}
        { alwaysOptions }
  
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