import axios from 'axios';

const getAll=()=>{
    return axios.get(`http://localhost:8080/api/cart`)
};
const create = (data) =>{
    return axios.post(`http://localhost:8080/api/cart/add`, data)
};
const get=(id)=>{
    return axios.get(`http://localhost:8080/api/cart/${id}`)
};

const update = (data, id)=>{
    return axios.put(`http://localhost:8080/api/cart/update/${id}`, data)

};
const remove = (id)=>{
    return axios.delete(`http://localhost:8080/api/cart/delete/${id}`)
};
export default{getAll, create, get, update, remove};