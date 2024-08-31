<script lang="ts">
	import { goto } from '$app/navigation';
	import ClothingItem from '../lib/components/ClothingItem.svelte';


	
</script>

<div class="flex flex-row">
	<ClothingItem/>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
