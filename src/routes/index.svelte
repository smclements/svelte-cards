<script>
	import Card from './card.svelte';
	import ThemeToggler from '$lib/ThemeToggler.svelte';

	let questions = [
		{
			id: 1,
            heading: "Politics",
			text: "Should Auckland come out of lockdown? Auckland and parts of Waikato are at Alert Level 3 Step 2. Settings for Auckland will be reviewed on Monday 22 November 2021",
			owner: "Dylan",
			responses: 1000,
			expires: "02:00:00",
			info: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempus neque, sociis fusce leo aptent purus vestibulum aliquet blandit facilisis felis quam, sodales porta justo montes dui litora ac nisl lacinia."
		},
		{
			id: 2,
            heading:"Etiquette",
            text: "Should pineapple go on pizza? The truth is that this sweet fruit has no business on pizza, and everyone knows it, but for those who need explained in detail...",
            owner: "Concerned Chef",
			responses: 10000,
			expires: "00:06:00",
			info: "Nullam integer scelerisque tortor cum eget tempus vulputate iaculis curabitur, molestie vitae ac dapibus natoque aliquam orci duis, congue porta metus fames at potenti ligula mollis."
		},
		{
			id: 3,
            heading:"Education",
			text: "Should schools be closed for the rest of the year?",
            owner: "Department of Education",
			responses: 200,
			expires: "00:00:05",
			info: "Vestibulum nec augue diam tempor ante a ultricies suspendisse mus tortor id, lacus elit dis commodo curae fermentum ligula eget montes proin."
		},
		{
			id: 4,
            heading: "Public Health",
			text: "Is 90% vaccination rate high enough? The 90 percent vaccination milestone is higher than what we would have initially imagined but we need to keep going, he says, it is not a target - it is a milestone.",
			owner: "Dylan",
			responses: 1620,
			expires: "02:30:00",
			info: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempus neque, sociis fusce leo aptent purus vestibulum aliquet blandit facilisis felis quam, sodales porta justo montes dui litora ac nisl lacinia."
		},
		{
			id: 5,
            heading:"Public Health",
            text: "Will you take a booster shot? Ultimately the booster shots will be available to everyone, though those initially seeking a third shot will be the over-65s, border workers and medical staff - the first cohort to be vaccinated earlier this year.",
            owner: "CDHB",
			responses: 400,
			expires: "00:06:00",
			info: "Nullam integer scelerisque tortor cum eget tempus vulputate iaculis curabitur, molestie vitae ac dapibus natoque aliquam orci duis, congue porta metus fames at potenti ligula mollis."
		},
		{
			id: 6,
            heading:"Public Health",
			text: "Is the government backtracking? It is looking increasingly likely the whole country will move to the Covid-19 traffic light system before every district health board (DHB) has hit 90 percent fully vaccinated.",
            owner: "Department of Education",
			responses: 1350,
			expires: "00:00:05",
			info: "Vestibulum nec augue diam tempor ante a ultricies suspendisse mus tortor id, lacus elit dis commodo curae fermentum ligula eget montes proin."
		}

	];

	let displayDate = new Date();
</script>

<svelte:head>
	<title>Abhi's App</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
	/>
</svelte:head>

<div class="content">
	<div class="preamble">
		<div class="login">
			<button class="logo">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="64"
					height="64"
					viewBox="0 0 512 512"
					style="enable-background:new 0 0 512 512"
					xml:space="preserve"
					><path
						style="fill:#c3e678"
						d="M238.345 189.773h247.172c14.626 0 26.483 11.857 26.483 26.483v158.897c0 14.626-11.857 26.483-26.483 26.483H344.276v29.116c0 5.544-6.702 8.32-10.622 4.399l-33.516-33.515h-61.793c-14.626 0-26.483-11.857-26.483-26.483V216.256c0-14.626 11.857-26.483 26.483-26.483z"
					/><path
						style="fill:#a5d76e"
						d="M211.862 216.256v158.897c0 1.9.218 3.746.599 5.534 61.705-24.77 105.332-85.043 105.332-155.603 0-12.122-1.353-23.918-3.795-35.31h-75.654c-14.625-.001-26.482 11.856-26.482 26.482z"
					/><path
						style="fill:#ff6464"
						d="M300.138 225.083c0-82.881-67.188-150.069-150.069-150.069S0 142.202 0 225.083c0 72.598 51.555 133.146 120.05 147.054l45.199 45.199c4.171 4.171 11.303 1.217 11.303-4.682v-39.978c70.228-12.525 123.586-73.764 123.586-147.593z"
					/><circle style="fill:#d2555a" cx="150.069" cy="225.125" r="114.759" /><path
						style="fill:#fff"
						d="M150.074 304.582h-.011c-4.875 0-8.833-3.957-8.833-8.833v-.012c0-4.875 3.957-8.833 8.833-8.833h.011c4.875 0 8.833 3.957 8.833 8.833v.01c.001 4.878-3.957 8.835-8.833 8.835zM361.931 348.67a8.801 8.801 0 0 1-6.242-2.585l-44.138-44.138a8.825 8.825 0 0 1 0-12.483 8.827 8.827 0 0 1 12.483 0l37.897 37.895 82.034-82.034a8.827 8.827 0 0 1 12.483 0 8.825 8.825 0 0 1 0 12.483l-88.276 88.276a8.794 8.794 0 0 1-6.241 2.586zM150.069 269.261a8.829 8.829 0 0 1-8.828-8.828v-2.637c0-11.743 7.631-21.921 18.989-25.327 14.806-4.44 25.148-18.349 25.149-33.826.001-9.183-3.741-17.983-10.536-24.778-6.794-6.794-15.592-10.536-24.775-10.536h-.003c-19.469.001-35.308 15.841-35.308 35.31a8.829 8.829 0 0 1-17.656 0c0-29.203 23.758-52.963 52.962-52.966h.004c13.898 0 27.128 5.578 37.258 15.706 10.13 10.13 15.708 23.363 15.706 37.262-.002 23.211-15.518 44.074-37.732 50.735-3.831 1.149-6.406 4.531-6.406 8.416v2.637a8.822 8.822 0 0 1-8.824 8.832z"
					/></svg
				>
			</button>
			<div style="display:flex">
				<button class="signin">Sign in</button>
				<ThemeToggler />
			</div>			
		</div>

		<h2>
			{displayDate.toLocaleDateString('nz-NZ', { weekday: 'long' })}, {displayDate.toLocaleDateString()}
		</h2>

		<h2>You have questions!</h2>
	</div>

	<ul class="cards">
		{#each questions as question, index (question.id)}
			<li class="cards__item">
				<Card {question} />
			</li>
		{/each}
	</ul>
</div>


<style>
	.login {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.cards {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
		background-color: var(--bg);
		transition: background-color 0.6s;
	}

	.cards__item {
		display: flex;
		padding: 1rem;
		width: 100%;
		
	}

	@media (min-width: 40rem) {
		.cards__item {
			width: 44%;
		}
	}

	@media (min-width: 80rem) {
		.cards__item {
			width: 30%;
		}
	}

	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	ul {
		padding: 0;
	}

	li {
		list-style: none;
		margin-bottom: 1em;
		width: 100%;
	}

	.preamble {
		margin-left: 2rem;
		color: var(--fg-light);
	}

	.preamble > .login {
		display: flex;
		justify-content: space-between;
	}

	button.logo {
		border: none;
		background-color: transparent;
	}

	button.signin {
		border: none;
		background-color: transparent;
		color: var(--fg);
		font-size: 1.75em;
		margin-right: 1.75rem;
	}
</style>
