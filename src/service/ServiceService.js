import http from "./axiosContext"

const create = (data) => {
    return http.post("/services/", data)
    }
const getAll = () => {
    return http.get("/services/")
    }
const update = (id, data) => {
    return http.put(`/services/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/services/${id}`)
    }
const getOne = (id) => {
    return http.get(`/services/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }