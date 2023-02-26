import http from "./axiosContext"

const create = (data) => {
    return http.post("/projects/", data)
    }
const getAll = () => {
    return http.get("/projects/")
    }
const update = (id, data) => {
    return http.put(`/projects/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/projects/${id}`)
    }
const getOne = (id) => {
    return http.get(`/projects/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }