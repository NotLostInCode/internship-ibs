import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:3006',
})

export const getItemsCatalog = async () => {
    try {
        const response = await instance.get('/item')
        return {data: response.data.content}
    } catch (error) {
        console.error('Ошибка при получении данных')
        return {error: true}
    }
}

export const getItemDetail = async (id: any) => {
    try {
        const response = await instance.get(`/item/${id}`)
        return {data: response.data.content}
    } catch (error) {
        console.error('Ошибка при получении данных')
        return {error: true}
    }
}

