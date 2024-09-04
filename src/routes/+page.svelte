<script lang="ts">
	import { goto } from '$app/navigation';
	import ClothingItem from '../lib/components/ClothingItem.svelte';
	import { Button } from "$lib/components/ui/button";
</script>

<div class="flex flex-col items-center">
	<video autoplay
	class="w-full "
	>
		<track kind="captions" />
		<source src="paris.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<h1 class="text-4xl">New Arrivals</h1>
	<div class="flex flex-row">
		<ClothingItem />
	</div>
	<h1 class="text-4xl">New Arrivals</h1>
	<Button>Hello</Button>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
