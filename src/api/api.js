import { BASE_URL } from './constants.js'

export const getItemsCatalog = async () => {
	try {
		const response = await fetch(`${BASE_URL}/item`)
		const data = await response.json()
		return {data}
	} catch (error) {
		return {error: true}
	}
}

export const getItemDetail = async (id) => {
	try {
		const response = await fetch(`${BASE_URL}/item/${id}`)
		const data = await response.json()
		return {data}
	} catch (error) {
		return {error: true}
	}
}
