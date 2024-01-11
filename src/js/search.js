const headerSearch = document.querySelector('.header__search')

const handleSearch = (event) => {
	event.preventDefault()

	const searchInput = document.querySelector('.header__search-input')
	const trimmedSearchValue = searchInput.value.trim().toLowerCase()
	const productElements = document.querySelectorAll('.product__element')

	productElements.forEach((product) => {
		const productName = product.querySelector('.product__name')
		const productText = productName.textContent.toLowerCase()

		if (productText.includes(trimmedSearchValue)) {
			product.style.display = 'block'
		} else {
			product.style.display = 'none'
		}
	})
	searchInput.value = ''
}

headerSearch.addEventListener('submit', handleSearch)
