import axios from 'axios'
import {DetailType, ProductType} from "../types";

export const instance = axios.create({
    baseURL: 'http://localhost:3006',
})

type GetCatalogType = {
    content: ProductType[]
}
type GetDetailType = {
    content: DetailType
}

export const getItemsCatalog = async () => {
    try {
        const response = await instance.get<GetCatalogType>('/item')
        return {data: response.data.content}
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.message)
            return {error: error.message}
        } else {
            console.error('Ошибка при получении данных')
            return {error: true}
        }
    }
}

export const getItemDetail = async (id: any) => {
    try {
        const response = await instance.get<GetDetailType>(`/item/${id}`)
        return {data: response.data.content}
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.message)
            return {error: error.message}
        } else {
            console.error('Ошибка при получении данных')
            return {error: true}
        }
    }
}

