<script lang="ts">
	import { goto } from '$app/navigation';
	import ClothingItem from '../lib/components/ClothingItem.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Tabs from '$lib/components/ui/tabs';
	import { onMount } from 'svelte';
	import ClothingItemData from '../data/ClothingItemData.json';
</script>

<div class="flex flex-col items-center">
	<video autoplay class="w-full">
		<track kind="captions" />
		<source src="paris.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<h1 class="text-4xl">NEW ARRIVALS</h1>
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
	<div class="flex flex-row h-[500px] mb-7"> 
		<!-- ? The 600px height adds extra room for the ClothingItem Card to grow. it should be the same as the value of the hover:height defined in the `a` tag in ClothingItem -->
		{#each ClothingItemData as item}
			<ClothingItem id={item.id} name={item.name} price={item.price} image={item.image} />
		{/each}
	</div>

	<h1 class="text-4xl">MENS</h1>
	<div class="flex flex-row h-[500px] mb-7">
		{#each ClothingItemData as item}
			<ClothingItem id={item.id} name={item.name} price={item.price} image={item.image} />
		{/each}
	</div>

	<h1 class="text-4xl">WOMENS</h1>
	<div class="flex flex-row h-[500px] mb-7">
		{#each ClothingItemData as item}
			<ClothingItem id={item.id} name={item.name} price={item.price} image={item.image} />
		{/each}
	</div>

	<h1 class="text-4xl">LIMITED EDITION</h1>
	<div class="flex flex-row h-[500px] mb-7">
		{#each ClothingItemData as item}
			<ClothingItem id={item.id} name={item.name} price={item.price} image={item.image} />
		{/each}
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
