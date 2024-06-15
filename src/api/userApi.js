import axios from 'axios'
const baseURL = `${import.meta.env.VITE_BASE_URL}/api`

const userApi = axios.create({
    baseURL
})

export const signIn = async (data)=>{
    try { 
        const result =  await userApi.post('/signIn',data) 
        return result.data 
    } catch (error) {
        console.log(error);
    }
}

export const googleAuth = async (data)=>{
    try { 
        const result =  await userApi.post('/googleAuth',data) 
        return result.data 
    } catch (error) {
        console.log(error);
    }
}

