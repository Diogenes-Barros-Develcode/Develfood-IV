import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react';

const api = axios.create({
    baseURL: 'https://gorest.co.in'
})

export const useDelete= async<T = unknown>(url: string, body: T) => {
    try {
        const response = await api.delete(url, body)
        console.log(response)
        return{response}
    } catch (error) {
        console.log(error)
    }finally{

    }
}