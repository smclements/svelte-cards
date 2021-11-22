<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script>
    import Card from './card.svelte';
    import { FooterType } from '../app';

    let question = {
        id: 1,
        heading:"Etiquette",
        text: "Should pineapple go on pizza? The truth is that this sweet fruit has no business on pizza, and everyone knows it, but for those who need explained in detail...",
        owner: "Concerned Chef",
        responses: 10000,
        expires: "00:06:00",
        footerType: FooterType.YESNO,
        info: "Nullam integer scelerisque tortor cum eget tempus vulputate iaculis curabitur, molestie vitae ac dapibus natoque aliquam orci duis, congue porta metus fames at potenti ligula mollis."
    }
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>
        The purpose of this app is to quickly poll the user on a variety of topics / interests. The poll is intended to be a low friction way to quickly assemble a variety of inputs from the target audience. 
    </p>

	<p>
        Please refer to our <a href="./privacy">Privacy Policy</a> for a simple breakdown on how we use the data that you supply to us. 
    </p>

    <h1>Using this app</h1>
    <p>
        The application will show you a series of questions. You choose whether you would like to respond to the question. An interactive example of our question card is shown below. As you interact with the example, we will show you a description of what the element does, and how to interpret what is shown.
    </p>

    <p>
        <i>Make the following card report back details of what the user has touched, show the details below.</i>
    </p>

    <div class="wrapper">
        <div class="innerWrapper">
            <Card {question} numberSections={true}/>
        </div>
    </div>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

    .wrapper {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .innerWrapper{
        display: flex;
        max-width: 350px;
    }
</style>