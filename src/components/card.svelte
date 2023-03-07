<script>
	import { base } from '$app/paths';
	export let mon;
</script>

<a
	href="{base}/pokemon/{mon.id}"
	class="flex h-64 flex-col items-center justify-center rounded-md bg-lime-200 shadow-md hover:bg-emerald-100"
>
	<img src={mon.image} class="h-40 w-40" alt="sprite image of {mon.name}" />
	<p class="text-center text-lg font-semibold capitalize tracking-wide">
		{mon.name}
	</p>
</a>
