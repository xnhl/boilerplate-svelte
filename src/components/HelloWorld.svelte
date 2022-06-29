<script>
	export let msg = ""
	console.log("hello world (HelloWorld.svelte)")
</script>

<style type="text/sass">
#hello
	padding: 1rem
	cursor: pointer
	font-size: 2rem
	line-height: 2rem
	letter-spacing: 0.25rem
</style>

<p id="hello">{msg}</p>
