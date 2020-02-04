import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import apiUrl from '../../apiConfig'
import { Grid, Embed } from 'semantic-ui-react'
import {index} from '../clinics/api'



class Waiting extends Component {
    componentDidMount(){
        const user = this.props.user
        index(user)
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
            </div>

            {/* {this.props.allClinics.map((clinic,index) =>(
                <div class="col-md-9 col-md-push-3">
                <h1>{clinic.name}</h1>
                <h1>{clinic.counter}</h1>
                <h1>{clinic.turn}</h1>
            </div>
            ))} */}
           
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