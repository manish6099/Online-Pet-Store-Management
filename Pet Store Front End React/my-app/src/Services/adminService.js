import axios from 'axios';

const checkAdmin=(data)=>{
    return axios.post(`http://localhost:8080/api/adminlogin`,data)
};
export default {checkAdmin};