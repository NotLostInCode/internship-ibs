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

export const getItemsCatalog = () => {
    return instance.get<GetCatalogType>('/item')
}

export const getItemDetail = (id: any) => {
    return instance.get<GetDetailType>(`/item/${id}`)
}
