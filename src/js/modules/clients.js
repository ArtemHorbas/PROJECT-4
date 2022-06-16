const topBtn = document.querySelector('#clients-top--button');
const bottomBtn = document.querySelector('#clients-bottom--button');

const FirstItemInClients = document.querySelector('#FirstItemInClients');
const SecondItemInClients = document.querySelector('#SecondItemInClients');
const ThirdItemInClients = document.querySelector('#ThirdItemInClients')

topBtn.addEventListener('click', function() {
	FirstItemInClients.classList.toggle('none')
	ThirdItemInClients.classList.toggle('none')
})

bottomBtn.addEventListener('click', function() {
	SecondItemInClients.classList.toggle('none')
	ThirdItemInClients.classList.toggle('none')
})