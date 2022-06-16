const space = '\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 '
const shortSpace  = '\u00A0 \u00A0 \u00A0'

const blogsBtn = document.querySelector('#blogs')
const crmBtn = document.querySelector('#crm')
const EduPlat = document.querySelector('#EduPlat')
const BankApps = document.querySelector('#BankApps')
const MobApps= document.querySelector('#MobApps')
const MobGames = document.querySelector('#MobGames')
const SocNetwork = document.querySelector('#SocNetwork')


const blogsText = document.querySelector('.blogs-text')
const firstOfCount = document.querySelector('.firstOfCount')
const secondOfCount = document.querySelector('.secondOfCount')
const thirdOfCount = document.querySelector('.thirdOfCount')

blogsBtn.addEventListener('click', function() {
	blogsText.innerText = 'Blogs'
	firstOfCount.innerText = `Blogs 1 ${space} `
	secondOfCount.innerText = `Blogs 2 ${space} `
	thirdOfCount.innerText = `Blogs 3 ${space} `
})



crmBtn.addEventListener('click', function() {
	blogsText.innerText = 'CRM'
	firstOfCount.innerText = `CRM 1 ${space} `
	secondOfCount.innerText = `CRM 2 ${space} `
	thirdOfCount.innerText = `CRM 3 ${space} `
})

EduPlat.addEventListener('click', function() {
	blogsText.innerText = 'Educational platform'
	firstOfCount.innerText = 'Educational platform 1'
	secondOfCount.innerText = 'Educational platform 2'
	thirdOfCount.innerText = 'Educational platform 3'
})

BankApps.addEventListener('click', function() {
	blogsText.innerText = 'Banking applications'
	firstOfCount.innerText = 'Banking applications 1'
	secondOfCount.innerText = 'Banking applications 2'
	thirdOfCount.innerText = 'Banking applications 3'
})

MobApps.addEventListener('click', function() {
	blogsText.innerText = 'Mobile applications'
	firstOfCount.innerText = 'Mobile applications 1'
	secondOfCount.innerText = 'Mobile applications 2'
	thirdOfCount.innerText = 'Mobile applications 3'
})

MobGames.addEventListener('click', function() {
	blogsText.innerText = 'Mobile games'
	firstOfCount.innerText = 'Mobile games 1'
	secondOfCount.innerText = 'Mobile games 2'
	thirdOfCount.innerText = 'Mobile games 3'
})

SocNetwork.addEventListener('click', function() {
	blogsText.innerText = 'Social networks'
	firstOfCount.innerText = 'Social networks 1'
	secondOfCount.innerText = 'Social networks 2'
	thirdOfCount.innerText = 'Social networks 3'
})