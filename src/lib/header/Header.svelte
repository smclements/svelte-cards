<script>
	import { page } from '$app/stores';
	import logo from './app-logo.svg';
    import ThemeToggler from '$lib/ThemeToggler.svelte';
</script>

<header>
	
    <a class="logo" href="/">
        <img src={logo} alt="AbhiApp" />
    </a>
	

	<nav>
		<ul>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/signin'}><a sveltekit:prefetch href="/signin">Sign in</a></li>
        </ul>
	</nav>

    <div class="themeToggler">
        <ThemeToggler />
    </div>  
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
        position: relative;
        width: 100%;
        z-index: 10;
        overflow: hidden;
        background-color: var(--bg);
        border-bottom: 1px solid var(--fg);
	}

	nav {
		display: flex;
		justify-content: center;
		--background: transparent;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

    .logo {
        width: 3em;
        height: 3em;
        margin-left: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .themeToggler {
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5em;
    }

</style>
