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

<Grid doubling columns={5}>
    <Grid.Row>
      
        
      <div class="card-group" style={{justifyContent:"space-between",alignContent:"space-between",padding:"100px"}}>
                    
                    {this.props.allClinics.map((clinic,index) => (
                    <Grid.Column>
                        <div class="card" style={{backgroundColor:"rgb(13, 140, 96)", textAlign:"center", margin:"10px"}}>
                            <Link to={`/clinics/${clinic._id}`}><span style={{color:"white"}}>Show</span></Link>
                              <div class="card-body" style={{backgroundColor:"#958a5f"}}>
                                    <h4 key={index} class="card-title">{clinic.name}</h4>
                                        {
                                            this.props.user.admin ? 
                                            <div class="ui buttons">
                                            <button onClick={() => this.hadleDelete(clinic._id)} class="ui button" style={{color:"red"}}>Delete</button>
                                            <div class="or"></div>
                                            <button onClick={() => this.props.history.push('/edit')} class="ui positive button">Edit</button>
                                            </div>
                                        :
                                            <Button as='div' labelPosition='right'>
                                            <Button color='green' onClick={() => this.handleCounter(clinic._id)}>
                                            {/* <Icon name='heart' /> */}
                                            Ticket
                                            </Button>
                                            <Label as='a' basic color='green' pointing='left'>
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