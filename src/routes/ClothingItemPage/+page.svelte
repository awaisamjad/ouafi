<script>
	import ClothingItem from '../../lib/components/ClothingItem.svelte';
	/**
	 * @property {string} - the size of the clothing item
	 */
	let size = '';
</script>

<main class="grid grid-cols-2 outline">
	<div class="ml-32 mt-32">
		<!-- <ClothingItem item={{ image: 'shirt.jpg', name: '', price: '' }} /> -->
	</div>
	<div class = "mt-24">
		<p>Price</p>
		<p>Availability</p>
		<ul>
			<button on:click={() => { size = 'xs'; console.log(size); }}>xs</button>
			<button on:click={() => { size = 's'; console.log(size); }}>s</button>
			<button on:click={() => { size = 'm'; console.log(size); }}>m</button>
			<button on:click={() => { size = 'l'; console.log(size); }}>l</button>
		</ul>
	</div>
</main>
