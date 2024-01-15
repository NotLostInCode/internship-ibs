import { createProductElements } from '../../catalog/js/createCatalog.js'
import { BASE_URL } from '../../api/constants.js'
import like from '/src/assets/icons/like.svg'

const headerInput = document.querySelector('.header__search-input')

export const handleSearch = (event, product, productList) => {
	event.preventDefault()

	const searchInput = headerInput.value

	const filteredProducts = product.filter((product) =>
		product.name.toLowerCase().includes(searchInput.toLowerCase())
	)

	const productElements = createProductElements(filteredProducts, BASE_URL, like)
	productList.innerHTML = ''
	productList.append(...productElements)
}

export const debounce = (func, delay) => {
	let timeoutId

	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId)
		}

		timeoutId = setTimeout(() => {
			func(...args)
		}, delay)
	}
}