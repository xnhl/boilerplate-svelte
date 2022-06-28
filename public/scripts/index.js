import { changeBackground } from './changeBackground.js'

document.addEventListener('DOMContentLoaded', () => {
	console.log("hello world (index.js)")
	let hello = document.getElementById("hello")
	hello.addEventListener("click", changeBackground)
})
