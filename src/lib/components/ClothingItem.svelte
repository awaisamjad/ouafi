<script lang="ts">
	import { goto } from '$app/navigation';
	/**
	 * Represents an item with an image, name, and price.
	 * @typedef {Object} Item
	 * @property {string} image - The image of the item.
	 * @property {string} name - The name of the item.
	 * @property {number} price - The price of the item.
	 */

	// /** *@type {Item} */
	// export let item;

	let ClothingItemData = [
		{
			image: 'shirt.jpg',
			name: 'Shirt',
			price: 320
		},
		{
			image: 'shirt.jpg',
			name: 'Shirt',
			price: 320
		},
		{
			image: 'shirt.jpg',
			name: 'Shirt',
			price: 320
		},
		{
			image: 'shirt.jpg',
			name: 'Shirt',
			price: 320
		}
	];

	/**
	 *
	 * @param {string} clothing_item_name
	 */

	function navigateTo(clothing_item_name: string) {
		goto(`/${clothing_item_name.toLowerCase()}`);
	}
</script>

{#each ClothingItemData as clothing_item_page}
	<button
		class=" w-64 h-64 outline outline-1 outline-red-400"
		on:click={() => navigateTo(clothing_item_page.name)}
	>
		<img src={clothing_item_page.image} alt={clothing_item_page.name} class="w-full h-full object-cover" />
		<div class="flex items-center justify-center flex-col">
			<p class="text-2xl">{clothing_item_page.name}</p>
			<p class="text-2xl">£{clothing_item_page.price}</p>
		</div>
	</button>
{/each}
