import http from "./axiosContext"

const create = (data) => {
    return http.post("/contacts/", data)
    }
const getAll = () => {
    return http.get("/contacts/")
    }
const update = (id, data) => {
    return http.put(`/contacts/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/contacts/${id}`)
    }
const getOne = (id) => {
    return http.get(`/contacts/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }