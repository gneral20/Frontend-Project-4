// // import React, { Component } from 'react';
// // import {connect} from 'react-redux'
// // import axios from 'axios'
// // import {Link} from 'react-router-dom'
// // import {withRouter} from 'react-router-dom'
// // import {create} from './api'
// // import {update} from './api'
// // import {index} from './api'




// // class ClincEdit extends Component {

// //    state = {
// //        clincForm: {
// //         name: ""
// //        }
// //    }

// //     handleChange = (event) => {
// //         //get the name of input
// //         const key = event.target.name;
// //         // get the value of input
// //         const value = event.target.value;
// //         this.setState( ({...copyState}) => {
// //             copyState.clincForm[key] = value
// //             return copyState
// //         })
        
// //     }

// //     handleSubmit = (event) => {
// //         event.preventDefault();
// //         const user = this.props.user
// //         const clincId = this.state.clincForm._id
// //         const updatedClinc = this.state.clincForm
// //         update(user,updatedClinc,clincId)
// //         .then(() => {
// //             index(user)
// //             .then(
// //                res => this.props.setAllClinics(res.data.clincs)
// //             )
// //             .catch(
// //                 err => console.log(err)
// //             )
// //         })
// //         .catch((error) => console.log(error))
// //     }
// //     render() { 
// //         console.log(this.props.user)
// //         return ( 
// //         <form onSubmit={this.handleSubmit}>
// //             <label>Name:</label>
// //             <input name="name" onChange={this.handleChange} value={this.state.clincForm.name}/>
// //             <input type="submit" />
// //         </form>
// //             );
// //     }
// // }

// // const getState = state => {
// //     return{
// //         allClinics: state.clinics
// //     }
// // }

// // const setState = dispatch => {
// //     return{
// //         setAllClinics:(arrAllClinics)=>{
// //             return dispatch({
// //                 type:"ALL_CLINICS",
// //                 value:arrAllClinics
// //             })
// //         }
// //     }   

// // }
 
// // export default connect(getState,setState)(withRouter(ClincEdit))
 
import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {update, index} from './api'




class ClincEdit extends Component {

   state = {
       clincForm: {
        name: ""
       }
   }

    handleChange = (event) => {
        //get the name of input
        const key = event.target.name;
        // get the value of input
        const value = event.target.value;
        this.setState( ({...copyState}) => {
            copyState.clincForm[key] = value
            return copyState
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = this.props.user
        const clinc = this.state.clincForm.name
        const clincId = this.props.match.params.id
        console.log("___________", clincId, "___________")
        update(user,this.state.clincForm.name,clincId)
        .then(() => {
            index(this.props.user)
            .then(
               res => this.props.setAllClinics(res.data.clincs)
            )
            .catch(
                err => console.log(err)
            )
        })
        .catch((error) => console.log(error))
    }
    render() { 
        console.log(this.props.user)
        return ( 
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input name="name" onChange={this.handleChange} value={this.state.clincForm.name}/>
                <input type="submit" />
            </form>
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
 
export default connect(getState,setState)(withRouter(ClincEdit))
 
