import { BASE_URL } from '../../api/constants.js'
import { getItemDetail } from '../../api/api.js'
import { createDetailProduct } from './createDetail.js'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const product = await getItemDetail(id)
const main = document.querySelector('.main')

console.log();

if (product.error) {
	const errorMessage = document.createElement('p')
	errorMessage.classList.add('error-message')
	errorMessage.textContent = 'Произошла ошибка при загрузке данных'
	main.append(errorMessage)
} else {
	if (!Object.keys(product.data).length) {
		const noProductMessage = document.createElement('p')
		noProductMessage.classList.add('product__list_no-products')
		noProductMessage.textContent = 'Товар отсутствует'
		main.append(noProductMessage)
	}
	const detailProduct = createDetailProduct(product.data, BASE_URL)
	main.append(detailProduct)
}
