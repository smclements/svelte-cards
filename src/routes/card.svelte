<script>
	import { fade } from 'svelte/transition';
	export let question;

	let approxCount = 0;
	
	if (!question){
		question = 		{
			id: 1,
            heading: "Politics",
			text: "Should Auckland come out of lockdown? Auckland and parts of Waikato are at Alert Level 3 Step 2. Settings for Auckland will be reviewed on Monday 22 November 2021",
			owner: "Dylan",
			responses: 1000,
			expires: "02:00:00",
			info: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempus neque, sociis fusce leo aptent purus vestibulum aliquet blandit facilisis felis quam, sodales porta justo montes dui litora ac nisl lacinia."
		}
	}
	
	Math.floor(question.responses / 100) * 100;

	let responseMsg = 'Fewer than 100 responses';
	if (approxCount > 0) {
		responseMsg = 'More than ' + approxCount + ' responses';
	}

	let showInfo = false;
	const toggleShowInfo = () => (showInfo = !showInfo);
</script>

<div class="card">
	<div class="card__content">
		<div class="card__info">
			<div class="card__info_text">{responseMsg}</div>
			<button class="btn card__btn btnInfo" on:click={toggleShowInfo}>
				<svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<circle cx="16" cy="16" r="16" fill="#999999" />
					<text
						x="16"
						y="25"
						style="font:1.5rem sans-serif;font-weight:800;fill:#fff;text-anchor:middle;vertical-align:middle"
						>i</text
					>
				</svg>
			</button>
		</div>

		<div class="card_question" transition:fade>
			<div class="card__title">{question.heading}</div>
			<p class="card__text">{question.text}</p>
		</div>

		{#if showInfo}
			<div class="card_info" transition:fade>
				<div class="card__title">Info</div>
				<p class="card__text">{question.info}</p>
			</div>
		{/if}

		<div class="card__footer">
			<button class="btn  card__btn">
				Share
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="margin-bottom: -2px">
					<path fill="currentColor" d="M9 3.88V0l6 6-6 6V8.03C2.02 7.87 2.32 12.78 4.1 16-.3 11.26.64 3.66 9 3.88z"/>
				</svg>
			</button>		<div>
				<button class="btn  card__btn">Yes</button>
				<button class="btn  card__btn">No</button>
			</div>
		</div>
	</div>
</div>

<style>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	.btn {
		background-color: var(--bg);
		border: 1px solid #cccccc;
		color: var(--fg);
		padding: 0.5rem;
		text-transform: lowercase;
		min-width: 4rem;
	}

	.card__footer .btn:hover{
		background-color: yellowgreen;
		color: var(--fg);
	}

	.btnInfo {
		height: 2rem;
		border: none;
		background-color: inherit;
	}
    
	.btnInfo > svg {
		margin-top: -16px;
	}

	.card {
		background-color: inherit;

		border-radius: 0.25rem;
		box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
		display: flex;
		flex-direction: column;
		overflow: hidden;
        flex-grow: 1;
	}

	.card__content {
		display: flex;
		flex: 1 1 auto;
		flex-direction: column;
		padding: 1rem;
		transition: transform 0.4s;
		transform-style: preserve-3d;
		background-color: var(--bg-light);
	}

	.card__footer {
		display: flex;
		justify-content: space-between;
		background: inherit;
		width: 100%;
        margin-top: auto;
	}

	.card__info {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.card__info_text {
		color: var(--fg);
		font-size: 0.7rem;
		font-weight: 300;
	}

	.card__title {
		color: var(--fg);
		font-size: 1.25rem;
		font-weight: 300;
		letter-spacing: 2px;
		text-transform: uppercase;
		margin-top: 0.5rem;
	}

	.card__text {
		flex: 1 1 auto;
		font-size: 0.875rem;
		line-height: 1.5;
		
	}
</style>
