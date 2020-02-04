import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import apiUrl from '../../apiConfig'
import {index,next,show} from '../clinics/api'
import { Header, Table, Rating } from 'semantic-ui-react'

class Show extends Component {



    componentDidMount(){
        const user = this.props.user
        const clinicId = this.props.match.params.id
        show(user,clinicId)
        .then(res => {
        const clinic = res.data
        this.props.setClinic(clinic.clinc)
        })
    }

    handleTurn = (clinicId) => {
        const user = this.props.user
        console.log(user,clinicId)
        next(user,clinicId)
        .then((response)=>{
            console.log(response)
            const turn = response.data
            this.props.incTurn(turn)
            index(user)
            .then(res => {
            this.props.setAllClinics(res.data.clincs)
            })
            show(user,clinicId)
            .then(res => {
            const clinic = res.data
            this.props.setClinic(clinic.clinc)
            })
        })
        .catch(err=>console.log(err))
        }

    render() { 
        return (
        <div>

<Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><h3 style={{textAlign:"center"}}>{this.props.clinic.name}</h3></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
       
        <Table.Cell singleLine><span style={{fontSize:"25px"}}>Patients:</span><p style={{textAlign:"center"}}>{this.props.clinic.counter}</p></Table.Cell>
      
      
       
      </Table.Row>
      <Table.Row>
     
        <Table.Cell singleLine><span style={{fontSize:"25px"}}>Now Serving:</span><p style={{textAlign:"center"}}>{this.props.clinic.turn}</p></Table.Cell>
       
      </Table.Row>

      <Table.Row>
     
      <button class="ui icon right labeled button" onClick={() => this.handleTurn(this.props.clinic._id)}>
      <i aria-hidden="true" class="right arrow icon"></i>
       Next Patient
      </button>
       
      </Table.Row>

    </Table.Body>
  </Table>
        </div> 
        );
    }
}


const getState = state => {
    return{
        clinic: state.clinic
    }
}

const setState = dispatch => {
    return{
        incCounter:(addCounter)=>{
            return dispatch({
                type:"ADD_COUNTER",
                value:addCounter
            })
        },
        incTurn:(addTurn)=>{
            return dispatch({
                type:"ADD_TURN",
                value:addTurn
            })
        },
        setClinic:(oneClinic)=>{
            return dispatch({
                type:"ONE_CLINIC",
                value:oneClinic
            })
        },
        setAllClinics:(arrAllClinics)=>{
            return dispatch({
                type:"ALL_CLINICS",
                value:arrAllClinics
            })
        },

    }   

}
 
 
export default connect(getState,setState)(withRouter(Show))