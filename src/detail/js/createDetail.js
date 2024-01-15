export const createDetailProduct = (product, baseUrl, increment, decrement, like) => {
	const productDetailElement = document.createElement('div')
	productDetailElement.classList.add('detailed-product')
	productDetailElement.innerHTML = `
                <div class="detailed-product__image">
                    <img class="detailed-product__img" src=${baseUrl}${product.picture.path} alt="${product.picture.alt}">
                </div>

                <div class="detailed-product__details">
                    <div class="detailed-product__description">
                        <h1 class="description__title">${product.name}</h1>
                        <p class="description__text">${product.info}</p>

                        <h2 class="description__subtitle">Details</h2>
                        <p class="description__text">${product.details}</p>
                    </div>

                    <div class="detailed-product__add">
                        <div class="detailed-product__price">$${product.price.value}</div>
                        <div class="detailed-product__controls">
                            <div class="detailed-product__number-goods">
                                <button class="detailed-product__decrement">
                                    <img src="${decrement}" alt="decrement">
                                </button>
                                <div class="detailed-product__number">1</div>
                                <button class="detailed-product__increment ">
                                    <img src="${increment}" alt="increment">
                                </button>
                            </div>
                            <button class="detailed-product__add-to-cart">Add to cart</button>
                            <button class="detailed-product__favorite">
                                <img src="${like}" alt="like" class="detailed-product__favorite-icon">
                            </button>
                        </div>
                    </div>
                </div>
`
	return productDetailElement
}
