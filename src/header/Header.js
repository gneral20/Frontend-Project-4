import React from 'react'
import { Link } from 'react-router-dom'
import {Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'
import {index} from '../components/clinics/api'


import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
   
    <Link to="/change-password" className="btn btn-light" style={{backgroundColor:"#958a5f"}}>Change Password</Link>
    <Link to="/sign-out" className="btn btn-light" style={{backgroundColor:"#958a5f"}}>Sign Out</Link>
    <Link to="/create" className="btn btn-light" style={{backgroundColor:"#958a5f"}}>Add Clinc</Link>
    <Link to="/waiting" className="btn btn-light" style={{backgroundColor:"#958a5f"}}>Waiting</Link>
    <Link to="/clinics" className="btn btn-light" style={{backgroundColor:"#958a5f"}}>Clinics</Link>


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
    <Link to="/" className="btn btn-light" style={{backgroundColor:"#958a5f"}}>Home</Link>
  </React.Fragment>
)


const Header = ({ user }) => (
  <div className="nav">
    <h1>ReQueue</h1>
    
      { user && <span>Welcome, {user.email}</span>}
      { user ? (user.admin ? authenticatedOptions : <div>
         <h2>Clinc Name</h2>
         <h4>Waiting: 5</h4>
         <h4>Turn: 2</h4>
         <h2>Clinc Name</h2>
         <h4>Waiting: 5</h4>
         <h4>Turn: 2</h4>
         <h2>Clinc Name</h2>
         <h4>Waiting: 5</h4>
         <h4>Turn: 2</h4>
         
      </div> ): '' }
      { alwaysOptions }

    </div>
  
)

export default Header
