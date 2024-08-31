<script lang="ts">
    import { goto } from '$app/navigation';

    let ClothingItemData = [
        {
            image: 'shirt.jpg',
            name: 'Shirt',
            price: 320
        },
        {
            image: 'shirt.jpg',
            name: 'Shirt2',
            price: 320
        },
        {
            image: 'shirt.jpg',
            name: 'Shirt3',
            price: 320
        },
        {
            image: 'shirt.jpg',
            name: 'Shirt4',
            price: 320
        }
    ];

    function navigateTo(clothing_item_name: string) {
        goto(`/${clothing_item_name.toLowerCase()}`);
    }
</script>

{#each ClothingItemData as clothing_item_page}
    <button
        class="w-64 h-64 outline outline-1 outline-red-400"
        on:click={() => navigateTo(clothing_item_page.name)}
    >
        <img src={clothing_item_page.image} alt={clothing_item_page.name} class="w-full h-full object-cover" />
        <div class="flex items-center justify-center flex-col">
            <p class="text-2xl">{clothing_item_page.name}</p>
            <p class="text-2xl">£{clothing_item_page.price}</p>
        </div>
    </button>
{/each}