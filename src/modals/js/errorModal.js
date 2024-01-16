export const displayErrorModal = (message) => {
	const body = document.querySelector('body')
	const modal = document.createElement('div')
	modal.id = 'snackbar'
	modal.classList.add('show')
	modal.textContent = message
	body.append(modal)

	setTimeout(() => {
		modal.classList.remove('show')
		modal.remove()
	}, 3000)
}
