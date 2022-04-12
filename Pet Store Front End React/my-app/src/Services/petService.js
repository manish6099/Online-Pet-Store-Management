import axios from 'axios';

const getAll=()=>{
    return axios.get(`http://localhost:8080/api/pets`)
};
const create = (data) =>{
    return axios.post(`http://localhost:8080/api/pets/add`, data)
};
const get=(id)=>{
    return axios.get(`http://localhost:8080/api/pets/${id}`)
};
const getByCategory=(id)=>{
    return axios.get(`http://localhost:8080/api/pets/category/${id}`)
};
const update = (data, id)=>{
    return axios.put(`http://localhost:8080/api/pets/update/${id}`, data)

};
const remove = (id)=>{
    return axios.delete(`http://localhost:8080/api/pets/delete/${id}`)
};
export default{getAll, getByCategory, create, get, update, remove};