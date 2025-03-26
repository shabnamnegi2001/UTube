import axios from 'axios'
const API = axios.create({ baseURL: 'http://localhost:5000/' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const login = (authdata) => API.post('/user/login', authdata);
export const updatechaneldata = (id, updatedata) => API.patch(`/user/update/${id}`, updatedata)
export const fetchallchannel = () => API.get("/user/getallchannel")