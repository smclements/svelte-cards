<script>
	import { page, navigating } from '$app/stores';
	import Header from '$lib/header/Header.svelte';
	import ThemeToggler from '$lib/ThemeToggler.svelte';
	import '../app.css';
	import '../app.js';


	$: section = $page.path.split('/')[1];
</script>

<Header />

<main>
	<slot></slot>
</main>



<style>
	main {
		position: relative;
		max-width: 90rem;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
