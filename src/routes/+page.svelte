<script>
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

<!-- html -->
<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>
<h1 class="my-8 text-center text-4xl">Svelte Pokedex</h1>

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

<!-- css -->
<style>
	.custom-col {
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	}
</style>
