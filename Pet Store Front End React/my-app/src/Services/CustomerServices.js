import axios from 'axios';

const getAll=()=>{
    return axios.get(`http://localhost:8080/api/customers`)
};
const create = (data) =>{
    return axios.post(`http://localhost:8080/api/customers/add`, data)
};
const checkCustomer = (data) =>{
    return axios.post(`http://localhost:8080/api/customerlogin`, data)
};
const get=(id)=>{
    return axios.get(`http://localhost:8080/api/customers/${id}`)
};
const update = (data, id)=>{
    return axios.put(`http://localhost:8080/api/customers/update/${id}`, data)

};
const remove = (id)=>{
    return axios.delete(`http://localhost:8080/api/customers/delete/${id}`)
};
export default{getAll, create, get, update, remove, checkCustomer};