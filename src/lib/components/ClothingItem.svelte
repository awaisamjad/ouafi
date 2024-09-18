<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	export let id : number = 0;
	export let name = '';
	export let price = 0;
	export let image = '';
</script>
<!-- ? The only reason we are doing this is so the url doesnt have spaces in it -->
<!-- TODO the href causes the error as when we turn the name to lowercase and replace whitespace,
 that modified name is used for the url path but that doesnt match whats in the json 
 so to fix that we could reverse the operations on name (might not work unless specific rules are applied to the name)
 -->
<!-- <a
	class="w-64 h-80 rounded-md bg-slate-200 p-4 m-5
        hover:bg-slate-300 hover:h-96"
        
	href={`/${name.replaceAll(" ", "_")}`}
  
> -->
<a
	class=" w-96 h-[450px] rounded-md bg-slate-200 p-4 m-5
        hover:bg-slate-300 hover:h-[500px]"
        
	href={`/${name}`}
  
>
<div class="">
		<img src={image} alt={name} class="" />
		<div class="flex items-center justify-center flex-col">
			<p class="text-lg font-semibold m-1">{name}</p>
			<p class="text-m">£{price}</p>
		</div>
	</div>
</a>

<!-- <Carousel.Root
  opts={{
    align: "start"
  }}
  class="w-full"
>
  <Carousel.Content class = "">
    {#each ClothingItemData as clothing_item_page}
      <Carousel.Item class=" pl-6 md:basis-1/3 lg:basis-1/5">
        <div class="p-1">
            <button
            class="w-64 h-80 rounded-md bg-slate-200 p-4 m-5 
            hover:bg-slate-300"
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
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root> -->
