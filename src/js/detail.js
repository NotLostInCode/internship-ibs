import { BASE_URL } from '../api/constants.js'
import { getItemDetail } from '../api/api.js'

const pathname = window.location.pathname
const id = pathname.split('/').pop()
const product = await getItemDetail(id)
const main = document.querySelector('.main')

const createDetailProduct = (product) => {
	const productDetailElement = document.createElement('div')
	productDetailElement.classList.add('detailed-product')
	productDetailElement.innerHTML = `
                <div class="detailed-product__image">
                    <img class="detailed-product__img" src=${BASE_URL}${product.picture.path} alt="${product.picture.alt}">
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
                                    <img src="src/assets/icons/decrement.svg" alt="decrement">
                                </button>
                                <div class="detailed-product__number">1</div>
                                <button class="detailed-product__increment ">
                                    <img src="src/assets/icons/increment.svg" alt="increment">
                                </button>
                            </div>
                            <button class="detailed-product__add-to-cart">Add to cart</button>
                            <button class="detailed-product__favorite">
                                <img src="src/assets/icons/like.svg" alt="like" class="detailed-product__favorite-icon">
                            </button>
                        </div>
                    </div>
                </div>
`
	return productDetailElement
}

if (product.error) {
	console.error('Ошибка при получении данных')
} else {
	const detailProduct = createDetailProduct(product.data.content)
	main.append(detailProduct)
}
