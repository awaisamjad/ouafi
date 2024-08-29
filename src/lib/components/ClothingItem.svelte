<script lang="ts">
	/**
	 * Represents an item with an image, name, and price.
	 * @typedef {Object} Item
	 * @property {string} image - The image of the item.
	 * @property {string} name - The name of the item.
	 * @property {number} price - The price of the item.
	 */

	/** *@type {Item} */
	export let item;
</script>

<button class=" w-64 h-64 outline outline-1 outline-red-400">
	<img src={item.image} alt={item.name} class="w-full h-full object-cover" />
    <div class="flex items-center justify-center flex-col">
        <p class="text-2xl">{item.name}</p>
		<p class="text-2xl">£{item.price}</p>
    </div>
</button>
