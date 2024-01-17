import { BASE_URL } from '../../api/constants.js'
import { getItemsCatalog } from '../../api/api.js'
import { createProductElements } from './createCatalog.js'
import { handleSearch } from '../../search/js/search.js'
import { debounce } from '../../search/js/search.js'


const product = await getItemsCatalog()
const productList = document.querySelector('.product__list')
const headerSearch = document.querySelector('.header__search')

const handleError = (message) => {
	const errorMessage = document.createElement('p')
	errorMessage.classList.add('error-message')
	errorMessage.textContent = message
	productList.append(errorMessage)
}

if (product.error) {
	handleError('Произошла ошибка при загрузке данных')
} else {
	const productElements = createProductElements(product.data, BASE_URL, productList)
	productList.append(...productElements)
}

headerSearch.addEventListener('input', debounce((event) => handleSearch(event, product.data, productList), 1000))