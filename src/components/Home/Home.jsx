import React, {Component} from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import messages from '../../auth/messages'
import { signIn } from '../../auth/api'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './Home.scss'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home';





class Home extends Component {

    constructor () {
        super()
    
        this.state = {
          email: '',
          password: ''
        }

      }
      
   

      createNotification = (type) => {
        return () => {
          switch (type) {
            case 'info':
              NotificationManager.info('Info message');
              break;
            case 'success':
              NotificationManager.success('Success message', 'Title here');
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
          }
        };
      };


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

      notify = () => {
        const {email} = this.state
        toast.success(`Welcome ${email}`, {
          position: toast.POSITION.TOP_LEFT
        });

      };

      render(){
        const { email, password } = this.state
          return (
            <div>
              <div style={{textAlign: "center", color:"#698474", fontWeight:"bold"}}>
              <h2>Increase Customer Service Efficiency by Reducing Waiting Times</h2>
              <hr/>
              </div>

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
        
                  <Button className="btn btn-light" onClick={this.notify} style={{backgroundColor:"#698474"}} content='Login' primary />
                  <ToastContainer />

                </Form>
              </Grid.Column>
        
              <Grid.Column verticalAlign='middle'>
              <Button onClick={() => this.props.history.push('/sign-up')} content='Sign up' icon='signup' size='big' />

              </Grid.Column>
            </Grid>
        
            <Divider vertical>Or</Divider>
          </Segment>

          <NotificationContainer/>



{/* 
    <div>
        <button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>
 
        <NotificationContainer/>
    </div> */}
    
</div>
          )
      }

}

export default withRouter(Home)
