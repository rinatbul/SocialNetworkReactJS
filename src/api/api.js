import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': 'a4d5ab55-a246-4ba2-979e-ceaeeae3a94a'
    }
});

export const usersAPI = {
    getUsers(currentPage=1, pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>{
            return response.data;
        })
    }
}

// export const getUsers2=(currentPage=1, pageSize=10)=>{
//     return instance.get(`follow/${u.id}`).then(response =>{
//         return response.data;
//     })
// }
