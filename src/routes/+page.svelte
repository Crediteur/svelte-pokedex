<script>
	import { navigating } from '$app/stores';
	import { loading } from '$lib/loading';
	$: $loading = !!$navigating;

	import Loader from '../components/loader.svelte';
	import Card from '../components/card.svelte';
	export let data;

	let searchText = '';
	let filteredPokemon = [];

	$: {
		if (searchText) {
			filteredPokemon = data.loadedPokemon.filter((mon) =>
				mon.name.toLowerCase().includes(searchText.toLowerCase())
			);
		} else {
			filteredPokemon = [...data.loadedPokemon];
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>
<h1 class="my-8 text-center text-4xl font-semibold">Svelte Pokedex</h1>

{#if $loading}
	<div class="pointer-events-none fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
		<Loader size={120} />
	</div>
{/if}

<input
	class="h-14 w-full rounded-md border-2 border-gray-200 p-4 text-lg"
	bind:value={searchText}
	placeholder="Search Pokemon"
/>

<div class="custom-col grid gap-4 py-4">
	{#each filteredPokemon as mon}
		<Card {mon} />
	{/each}
</div>

<style>
	.custom-col {
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	}
</style>
