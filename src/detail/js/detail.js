import { BASE_URL } from '../../api/constants.js'
import { getItemDetail } from '../../api/api.js'
import {createDetailProduct} from './createDetail.js'
import increment from '/src/assets/icons/increment.svg'
import decrement from '/src/assets/icons/decrement.svg'
import like from '/src/assets/icons/like.svg'


const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const product = await getItemDetail(id)
const main = document.querySelector('.main')


if (product.error) {
	const errorMessage = document.createElement('p')
	errorMessage.classList.add('error-message')
	errorMessage.textContent = 'Произошла ошибка при загрузке данных'
	main.append(errorMessage)
	console.error('Ошибка при получении данных')
} else {
	if ([product.data].length === 0) {
		const noProductMessage = document.createElement('p')
		noProductMessage.classList.add('product__list_no-products')
		noProductMessage.textContent = 'Товар отсутствует'
		main.append(noProductMessage)
	}
	const detailProduct = createDetailProduct(product.data, BASE_URL, increment, decrement, like)
	main.append(detailProduct)
}
