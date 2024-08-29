<script lang="ts">
  import ClothingItem from "$lib/components/ClothingItem.svelte";
</script>

{#each Array(10) as _}
  <ClothingItem item={{ image: "shirt.jpg", name: "Shirt", price: "230" }}/>
{/each}

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>