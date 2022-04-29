import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: 'https://gorest.co.in'
})

export const usePut= async<T = unknown>(url: string, body: T) => {
    try {
        const response = await api.put(url, body)
        console.log(response.data)
        return response
    } catch (error) {
        console.log(error)
    }finally{

    }
}