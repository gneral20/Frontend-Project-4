import React, {Component} from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import messages from '../../auth/messages'
import { signIn } from '../../auth/api'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './Home.scss'




class Home extends Component {

    constructor () {
        super()
    
        this.state = {
          email: '',
          password: ''
        }
      }
    
      handleChange = event => this.setState({
        [event.target.name]: event.target.value
      })
    
      onSignIn = event => {
        event.preventDefault()
    
        const { alert, history, setUser } = this.props
    
        signIn(this.state)
          .then(res => setUser(res.data.user))
          .then(() => alert(messages.signInSuccess, 'success'))
          .then(() => history.push('/clinics'))
          .catch(error => {
            console.error(error)
            this.setState({ email: '', password: '' })
            alert(messages.signInFailure, 'danger')
          })
      }

      render(){
        const { email, password } = this.state
          return (
           <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                <Form onSubmit={this.onSignIn}>
                  <Form.Input
                    required
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    required
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
        
                  <Button className="btn btn-light" style={{backgroundColor:"#698474"}} content='Login' primary />
                </Form>
              </Grid.Column>
        
              <Grid.Column verticalAlign='middle'>
              <Button onClick={() => this.props.history.push('/sign-up')} content='Sign up' icon='signup' size='big' />

              </Grid.Column>
            </Grid>
        
            <Divider vertical>Or</Divider>
          </Segment>

          )
      }

}

export default withRouter(Home)
