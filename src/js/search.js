import { getItemsCatalog } from '../api/api.js'
import { createProductElements } from './catalog.js'

const product = await getItemsCatalog()
const productList = document.querySelector('.product__list')
const headerSearch = document.querySelector('.header__search')
const headerInput = document.querySelector('.header__search-input')

if (product.error) {
	console.error('Ошибка при получении данных')
} else {
	const productElements = createProductElements(product.data.content)
	productList.append(...productElements)
}

const handleSearch = (event) => {
	event.preventDefault()

	const searchInput = headerInput.value

	const filteredProducts = product.data.content.filter((product) =>
		product.name.toLowerCase().includes(searchInput.toLowerCase())
	)

	const productElements = createProductElements(filteredProducts)
	productList.innerHTML = ''
	productList.append(...productElements)
}

headerSearch.addEventListener('submit', handleSearch)
