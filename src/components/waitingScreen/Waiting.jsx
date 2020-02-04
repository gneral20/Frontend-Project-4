import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import apiUrl from '../../apiConfig'
import { Grid, Embed } from 'semantic-ui-react'



class Waiting extends Component {
    componentDidMount(){
        const user = this.props.user
        axios({
            method:'GET',
            url:apiUrl+'/clincs',
            headers:{
                "Authorization":`Bearer ${user.token}`
            }
        })
        .then(res => {
            this.props.setAllClinics(res.data.clincs)
          })
    }
    render() { 
        return ( 

        <div class="container">
            <div class="row">
                <div class="col-md-9 col-md-push-3">
                <Embed id='O6Xo21L0ybE' placeholder='/images/image-16by9.png'source='youtube'/>
                </div>
                    <div class="col-md-3 col-md-pull-9" style={{backgroundColor:"gray"}}>
                    {this.props.allClinics.map((clinic) => (
                        <ul>
                            <label>
                            <li>{clinic.name}</li>
                            </label>
                            <li>{clinic.counter}</li>
                            <li>{clinic.counter}</li>
                        </ul>
                    ))}
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