import http from "./axiosContext"

const create = (data) => {
    return http.post("/infos/", data)
    }
const getAll = () => {
    return http.get("/infos/")
    }
const update = (id, data) => {
    return http.put(`/infos/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/infos/${id}`)
    }
const getOne = (id) => {
    return http.get(`/infos/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }