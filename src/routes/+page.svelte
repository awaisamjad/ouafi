<script lang="ts">
	import { goto } from '$app/navigation';
	import ClothingItem from '../lib/components/ClothingItem.svelte';
	import ClothingItem2 from '../lib/components/ClothingItem2.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Tabs from '$lib/components/ui/tabs';
	import { onMount } from 'svelte';
	let ClothingItemData: any[] = [];
	onMount(async () => {
		try {
			const response = await fetch('/clothingItemData.json');
			if (response.ok) {
				ClothingItemData = await response.json();
				console.log(ClothingItemData)
			} else {
				console.error('Failed to fetch clothing items:', response.statusText);
			}
		} catch (error) {
			console.error('Error fetching clothing items:', error);
		}
	});
</script>

<div class="flex flex-col items-center">
	<video autoplay class="w-full">
		<track kind="captions" />
		<source src="paris.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<h1 class="text-4xl">New Arrivals</h1>
	<!-- <Tabs.Root value="new-arrivals" class="w-[400px]">
		<Tabs.List>
			<Tabs.Trigger value="new-arrivals">Account</Tabs.Trigger>
			<Tabs.Trigger value="new-arrivals-2">Password</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content class="flex flex-row flex-wrap justify-center" value="new-arrivals">
				<ClothingItem />
		</Tabs.Content>
		<Tabs.Content value="new-arrivals-2">
			<ClothingItem />
		</Tabs.Content>
	</Tabs.Root>
	<h1 class="text-4xl">New Arrivals</h1>
	<Button>Hello</Button> -->
	{#each ClothingItemData as item}
		<ClothingItem id={item.id} name={item.name} price={item.price} image={item.image} />
	{/each}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
