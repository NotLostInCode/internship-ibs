import { BASE_URL } from '../api/constants.js'

export const createProductElements = (products) => {
	const productElements = products.map((product) => {
		const productElement = document.createElement('article')
		productElement.classList.add('product__element')
		productElement.innerHTML = `
            <button class="product__favorite-button">
                <img class="product__favorite-icon" src="src/assets/icons/like.svg" alt="like" />
            </button>
            <a href="/detail.html" class="product__content">
                <img class="product__img" src="${BASE_URL}${product.picture.path}" alt="${product.picture.alt}" />
                <div class="product__name">${product.name}</div>
                <div class="product__price">$${product.price.value}</div>
            </a>
        `
		return productElement
	})

	return productElements
}
