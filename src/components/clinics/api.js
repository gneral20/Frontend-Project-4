import apiUrl from '../../apiConfig'
import Axios from 'axios'


export const index = (user) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/clincs',
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const show = (user, clincId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/clincs/${clincId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const create = (user, newClinc) => {
    console.log(user.token, newClinc)
    return Axios({
        method:'POST',
        url: apiUrl + '/clincs',
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            name:newClinc
        }
    })
}


export const destroy = (user,clincId) => {
    return Axios({
        method:"DELETE",
        url:apiUrl + `/clincs/${clincId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const update = (user,updateClinc,clincId) => {
    return Axios({
        method:'patch',
        url:apiUrl + `/clincs/${clincId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            clinc:{ name: updateClinc}
        }
    })
}


// The Call for Patients and Turn
export const counter = (user,clincId) => {
    return Axios({
        method:'post',
        url: apiUrl + `/clincs/${clincId}/counter`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            
        }
    })
}

export const next = (user,clincId) => {
    return Axios({
        method:'POST',
        url:apiUrl + `/clincs/${clincId}/next`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
        }
    })
}