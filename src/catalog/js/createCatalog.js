export const createProductElements = (products, baseUrl, like) => {
	const productElements = products.map((product) => {
		const productElement = document.createElement('article')
		productElement.classList.add('product__element')
		productElement.innerHTML = `
            <button class="product__favorite-button">
                <img class="product__favorite-icon" src="${like}" alt="like" />
            </button>
            <a href="/detail.html" class="product__content">
                <img class="product__img" src="${baseUrl}${product.picture.path}" alt="${product.picture.alt}" />
                <div class="product__name">${product.name}</div>
                <div class="product__price">$${product.price.value}</div>
            </a>
        `
		return productElement
	})
	return productElements
}
