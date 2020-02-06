import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import apiUrl from '../../apiConfig'
import {index,destroy,counter} from './api'
import { Button, Icon, Label, Grid,Image } from 'semantic-ui-react'

class Clinics extends Component {

  
    componentDidMount(){
        const user = this.props.user
        index(user)
        .then(res => {
         this.props.setAllClinics(res.data.clincs)
        })
    }

    hadleDelete = (clincId) => {
    const user = this.props.user
    destroy(user,clincId)
    .then(()=>{alert('Delete')})
    .then(()=>{ 
        const clinics = this.props.allClinics.filter(clinic=>clinic._id !== clincId)
        this.props.setAllClinics(clinics)
    })
    .catch(err=>console.log(err))
    }

    handleCounter = (clinicId) => {
    const user = this.props.user
    console.log(user,clinicId)
    counter(user,clinicId)
    .then((response)=>{
        const counter = response.data
        this.props.incCounter(counter)
        index(user)
        .then(res => {
         this.props.setAllClinics(res.data.clincs)
        })
    })
    .catch(err=>console.log(err))
    }

    render() { 
        return ( 
<div>
<div style={{textAlign: "center", color:"#698474", fontWeight:"bold"}}>
<h2>Welcome to General Assembly</h2>
<hr/>
</div>
<Grid doubling columns={5}>
    <Grid.Row>
      
        
      <div class="card-group" style={{justifyContent:"space-between",alignContent:"space-between",padding:"100px"}}>
                    
                    {this.props.allClinics.map((clinic,index) => (
                    <Grid.Column>
                        <div className="card" style={{backgroundColor:"#698474", textAlign:"center", margin:"10px"}}>
                            <Link to={`/clinics/${clinic._id}`}><span style={{color:"white"}}>Show</span></Link>
                              <div className="card-body" style={{backgroundColor:"white"}}>
                                    <h4 key={index} class="card-title">{clinic.name}</h4>
                                        {
                                            this.props.user.admin ? 
                                            <div className="ui buttons">
                                            <button onClick={() => this.hadleDelete(clinic._id)} class="ui button" style={{color:"#971919"}}>Delete</button>
                                            <div className="or"></div>
                                            <button onClick={() => this.props.history.push(`/${clinic._id}/edit`)} class="ui positive button" style={{backgroundColor:"#bac7a7"}}>Edit</button>
                                            </div>
                                        :
                                            <Button as='div' labelPosition='right'>
                                            <Button color='#bac7a7' onClick={() => this.handleCounter(clinic._id)}>
                                            {/* <Icon name='heart' /> */}
                                            Ticket
                                            </Button>
                                            <Label as='a' basic color='#bac7a7' pointing='left'>
                                                {clinic.counter}
                                            </Label>
                                            </Button>
                                        }
                                </div>
                        </div>
                     </Grid.Column>
                    ))}
        </div> 


     
    </Grid.Row>
  </Grid>
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
        },
        incCounter:(addCounter)=>{
            return dispatch({
                type:"ADD_COUNTER",
                value:addCounter
            })
        },

    }   

}
 
export default connect(getState,setState)(withRouter(Clinics))