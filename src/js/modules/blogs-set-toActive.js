const firstOfCount = document.querySelector('.firstOfCount')
const secondOfCount = document.querySelector('.secondOfCount')
const thirdOfCount = document.querySelector('.thirdOfCount')

firstOfCount.addEventListener('click', function() {
	firstOfCount.classList.toggle('blogs-button--active')
	secondOfCount.classList.remove('blogs-button--active')
	thirdOfCount.classList.remove('blogs-button--active')
})

secondOfCount.addEventListener('click', function() {
	secondOfCount.classList.toggle('blogs-button--active')
	firstOfCount.classList.remove('blogs-button--active')
	thirdOfCount.classList.remove('blogs-button--active')
})

thirdOfCount.addEventListener('click', function() {
	thirdOfCount.classList.toggle('blogs-button--active')
	firstOfCount.classList.remove('blogs-button--active')
	secondOfCount.classList.remove('blogs-button--active')
})

