<script>
	import { navigating } from '$app/stores';
	import { loading } from '$lib/loading';
	$: $loading = !!$navigating;

	import Loader from '../../../components/loader.svelte';
	import FlipCard from '../../../components/flipCard.svelte';
	import FlipBook from '../../../components/flipBook.svelte';
	import CarouselCard from '../../../components/carouselCard.svelte';

	export let data; // pokemon json parsed in +page.js
	const mon = data.pokemon;

	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	let showCardBack = false;
	const toggleShowBack = () => (showCardBack = !showCardBack);

	//key toggle
	function onKeyDown(key) {
		if (key.keyCode == 32) {
			toggleShowBack();
		}
	}
</script>

<svelte:head>
	<title>{capitalize(mon.name)} Page</title>
</svelte:head>
<svelte:window on:keydown|preventDefault={onKeyDown} />

{#if $loading}
	<div class="pointer-events-none fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
		<Loader size={120} />
	</div>
{/if}

<div class="py-8" />
<!-- big-card component -->
<div class="click-card" on:click={toggleShowBack} on:keydown={onKeyDown}>
	<button />
	1. Flip card
	<div class="flip-box">
		<div class="flip-box-inner" class:flip-it={showCardBack}>
			<FlipCard {mon} {showCardBack} />
		</div>
	</div>
</div>

<!-- divider for demonstration purposes only -->
<div class="py-[350px] sm:py-[450px]" />

<div class="click-card" on:click={toggleShowBack} on:keydown={onKeyDown}>
	2. Book style
	<div class="flip-box">
		<div class="flip-box-inner" class:flip-it={showCardBack}>
			<FlipBook {mon} {showCardBack} />
		</div>
	</div>
</div>

<!-- divider for demonstration purposes only -->
<div class="py-[350px] sm:py-[500px]" />

<div>
	3. Carousel images
	<CarouselCard {mon} />
</div>

<style>
	.flip-box {
		background-color: transparent;
		perspective: 2500px; /* change parallax effect*/
	}

	.flip-box-inner {
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip on button click */
	.flip-it {
		transform: rotateY(180deg);
	}

	.click-card {
		cursor: pointer;
	}
</style>
