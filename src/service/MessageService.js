import http from "./axiosContext"

const create = (data) => {
    return http.post("/messages/", data)
    }
const getAll = () => {
    return http.get("/messages/")
    }
const update = (id, data) => {
    return http.put(`/messages/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/messages/${id}`)
    }
const getOne = (id) => {
    return http.get(`/messages/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }