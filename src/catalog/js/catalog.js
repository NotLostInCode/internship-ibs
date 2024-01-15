import { BASE_URL } from '../../api/constants.js'
import { getItemsCatalog } from '../../api/api.js'
import { createProductElements } from './createCatalog.js'
import { handleSearch } from '../../search/js/search.js'
import { debounce } from '../../search/js/search.js'
import like from '/src/assets/icons/like.svg'

const product = await getItemsCatalog()
const productList = document.querySelector('.product__list')
const headerSearch = document.querySelector('.header__search')


if (product.error) {
	const errorMessage = document.createElement('p')
	errorMessage.classList.add('error-message')
	errorMessage.textContent = 'Произошла ошибка при загрузке данных'
	productList.append(errorMessage)
	console.error('Ошибка при получении данных')
} else {
	if (product.data.length === 0) {
		const noProductMessage = document.createElement('p')
		noProductMessage.classList.add('product__list_no-products')
		noProductMessage.textContent = 'Товары отсутствует'
		productList.append(noProductMessage)
	}
	const productElements = createProductElements(product.data, BASE_URL, like)
	productList.append(...productElements)
}

headerSearch.addEventListener('input', debounce((event) => handleSearch(event, product.data, productList), 1000))
