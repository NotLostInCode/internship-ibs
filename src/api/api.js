import { BASE_URL } from './constants.js'

export const getItemsCatalog = async () => {
	try {
		const response = await fetch(`${BASE_URL}/item`)
		const data = await response.json()
		return data.content
	} catch (error) {
		console.error('Ошибка при получении данных:', error)
	}
}

export const getItemDetail = async (id) => {
	try {
		const response = await fetch(`${BASE_URL}/item/${id}`)
		const data = await response.json()
		return data.content
	} catch (error) {
		console.error('Ошибка при получении данных:', error)
	}
}
