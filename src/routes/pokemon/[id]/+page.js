export async function load({ params }) {
	const id = params.id;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json(); //individual pokemon data, passed to 'data
	return { pokemon };
}
