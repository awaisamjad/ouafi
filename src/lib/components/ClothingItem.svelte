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
        class="w-64 h-80 rounded-md bg-slate-200 p-4 m-5 
        hover:bg-slate-300 hover:h-96"
        on:click={() => navigateTo(clothing_item_page.name)
        }
    >
    <div class="">
        <img src={clothing_item_page.image} alt={clothing_item_page.name} class="flex items-center justify-center" />
        <div class="flex items-center justify-center flex-col">
            <p class="text-lg font-semibold m-1">{clothing_item_page.name}</p>
            <p class="text-m">£{clothing_item_page.price}</p>
        </div>
    </div>
    </button>
{/each}