<script lang="ts">
    import ClothingItem from "$lib/components/ClothingItem.svelte";
</script>

<ClothingItem item={{ image: "shirt.jpg", name: "Shirt", price: "230" }} />


<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>