let defaultTheme = true

export const changeBackground = () => {
	console.log("hello world (changeBackground.js)")
	let root = document.documentElement
	if (defaultTheme) {
		root.style.setProperty('--background', 'lightseagreen')
		root.style.setProperty('--text', 'rgba(0, 0, 0, 0.5)')
		defaultTheme = !defaultTheme
	} else {
		root.style.setProperty('--background', 'black')
		root.style.setProperty('--text', 'white')
		defaultTheme = !defaultTheme
	}
}
