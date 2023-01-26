export const load = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
	const res = await fetch(url);
	const data = await res.json(); //convert response data into an object
	const loadedPokemon = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	return { loadedPokemon }; //set map data to store space
};
