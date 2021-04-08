import {userConstants} from '../constants/user_constatnts'
import axios from 'axios';
import qs from 'qs'

const register = (user) => {
    axios.post('api/singup', qs.stringify(user))
    .then(res => {
        console.log(res.data)
    })
}

const singIn = (auth) => {
    axios.post('api/singin', qs.stringify(auth))
    .then(res => {
        console.log(res.data)
    })
}

export const services = {
    register,
    singIn
}