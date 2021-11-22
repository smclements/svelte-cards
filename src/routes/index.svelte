<script>
	import Card from './card.svelte';
	import { onMount } from 'svelte';
	import { FooterType } from '../app';

	let questions = [
		{
			id: 1,
            heading: "Politics",
			text: "Should Auckland come out of lockdown? Auckland and parts of Waikato are at Alert Level 3 Step 2. Settings for Auckland will be reviewed on Monday 22 November 2021",
			owner: "Dylan",
			responses: 1000,
			expires: "02:00:00",
			footerType: FooterType.YESNO,
			info: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempus neque, sociis fusce leo aptent purus vestibulum aliquet blandit facilisis felis quam, sodales porta justo montes dui litora ac nisl lacinia."
		},
		{
			id: 2,
            heading:"Etiquette",
            text: "Should pineapple go on pizza? The truth is that this sweet fruit has no business on pizza, and everyone knows it, but for those who need explained in detail...",
            owner: "Concerned Chef",
			responses: 10000,
			expires: "00:06:00",
			footerType: FooterType.YESNO,
			info: "Nullam integer scelerisque tortor cum eget tempus vulputate iaculis curabitur, molestie vitae ac dapibus natoque aliquam orci duis, congue porta metus fames at potenti ligula mollis."
		},
		{
			id: 3,
            heading:"Education",
			text: "Should schools be closed for the rest of the year?",
            owner: "Department of Education",
			responses: 200,
			expires: "00:00:05",
			footerType: FooterType.YESNO,
			info: "Vestibulum nec augue diam tempor ante a ultricies suspendisse mus tortor id, lacus elit dis commodo curae fermentum ligula eget montes proin."
		},
		{
			id: 4,
            heading: "Public Health",
			text: "Is 90% vaccination rate high enough? The 90 percent vaccination milestone is higher than what we would have initially imagined but we need to keep going, he says, it is not a target - it is a milestone.",
			owner: "Dylan",
			responses: 1620,
			expires: "02:30:00",
			footerType: FooterType.RANGE,
			info: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempus neque, sociis fusce leo aptent purus vestibulum aliquet blandit facilisis felis quam, sodales porta justo montes dui litora ac nisl lacinia."
		},
		{
			id: 5,
            heading:"Public Health",
            text: "Will you take a booster shot? Ultimately the booster shots will be available to everyone, though those initially seeking a third shot will be the over-65s, border workers and medical staff - the first cohort to be vaccinated earlier this year.",
            owner: "CDHB",
			responses: 400,
			expires: "00:06:00",
			footerType: FooterType.MULTICHOICE,
			info: "Nullam integer scelerisque tortor cum eget tempus vulputate iaculis curabitur, molestie vitae ac dapibus natoque aliquam orci duis, congue porta metus fames at potenti ligula mollis."
		},
		{
			id: 6,
            heading:"Public Health",
			text: "Is the government backtracking? It is looking increasingly likely the whole country will move to the Covid-19 traffic light system before every district health board (DHB) has hit 90 percent fully vaccinated.",
            owner: "Department of Education",
			responses: 1350,
			expires: "00:00:05",
			footerType: FooterType.RANGE,
			info: "Vestibulum nec augue diam tempor ante a ultricies suspendisse mus tortor id, lacus elit dis commodo curae fermentum ligula eget montes proin."
		}

	];	

	/*let questions = []

	onMount(async () => {
		const response = await fetch('https://localhost:44335/api/survey/questions')

		questions = await response.json()
	})*/

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

</style>
