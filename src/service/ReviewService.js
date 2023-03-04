import http from "./axiosContext"

const create = (data) => {
    return http.post("/reviews/", data)
    }
const getAll = () => {
    return http.get("/reviews/")
    }
const update = (id, data) => {
    return http.put(`/reviews/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/reviews/${id}`)
    }
const getOne = (id) => {
    return http.get(`/reviews/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }