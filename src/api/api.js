import axios from 'axios'
import { displayErrorModal } from '../modals/js/errorModal'

const instance = axios.create({
	baseURL: 'http://localhost:3006',
})

export const getItemsCatalog = async () => {
	try {
		const response = await instance.get('/item')
		return { data: response.data.content }
	} catch (error) {
		console.error('Ошибка при получении данных')
		return { error: true }
	}
}

export const getItemDetail = async (id) => {
	try {
		const response = await instance.get(`/item/${id}`)
		return { data: response.data.content }
	} catch (error) {
		console.error('Ошибка при получении данных')
		return { error: true }
	}
}

instance.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		displayErrorModal(error.message)
		return Promise.reject(error)
	}
)
