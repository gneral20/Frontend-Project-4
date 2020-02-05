import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import apiUrl from '../../apiConfig'
import { Grid, Embed } from 'semantic-ui-react'
import {index} from '../clinics/api'
import moment from 'moment'



class Waiting extends Component {
    state = {
        time: null
    }
    componentDidMount(){
        const user = this.props.user
        index(user)
        .then(res => {
            this.props.setAllClinics(res.data.clincs)
          })
    }

    getTime = () => {
        setInterval(() => {
            this.setState({ time: moment().format('MMMM Do YYYY, h:mm:ss a') })
        }, 1000);
    }

    render() { 
        this.getTime()
        return ( 
        <div>
           
                        <div style={{textAlign: "center", color:"#698474", fontWeight:"bold"}}>
                        <h2>Welcome to General Assembly</h2>
                        {this.state.time}
                        <hr/>
                        </div>
           
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-md-push-3">
                        <div>
                        <iframe src="https://player.vimeo.com/video/189789889" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        </div>
                    </div>  
                </div>

            
            
            </div> 
        </div>
        );
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
 
export default connect(getState,setState)(Waiting)