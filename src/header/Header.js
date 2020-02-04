import React from 'react'
import { Link } from 'react-router-dom'
import {Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'


import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    
    <Link to="/change-password" className="btn btn-warning">Change Password</Link>
    <Link to="/sign-out" className="btn btn-warning">Sign Out</Link>
    <Link to="/create" className="btn btn-warning">Add Clinc</Link>
    <Link to="/waiting" className="btn btn-warning">Waiting</Link>
    <Link to="/clinics" className="btn btn-warning">Clinics</Link>

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
    <Link to="/" className="btn btn-warning">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header mb-5" style={{background: "gray"}}>
    <h1>Queue Me</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
  
)

export default Header
