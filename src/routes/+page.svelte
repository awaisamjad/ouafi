<script lang="ts">
	import { goto } from '$app/navigation';
	import ClothingItem from '$lib/components/ClothingItem.svelte';

	// import { goto } from "svelte-spa-router";

	// Array of button names
	let buttons = ['Button1', 'Button2', 'Button3'];

	// Function to handle button click
	function handleButtonClick(name: string) {
		// Navigate to the new page using the dynamic route
		goto(`/page/${name}`);
	}
</script>

<div class="flex flex-row">
	{#each buttons as button, index}
		<ClothingItem item={{ image: 'shirt.jpg', name: 'Shirt', price: '230' }} />
		<button on:click={() => handleButtonClick(button)}>
			{button}
		</button>
	{/each}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>


<!-- <script>
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
  
	/**
	 * @type {any[]}
	 */
	let buttons = [];
	let currentPage = '';
  
	function addButton() {
	  const name = prompt('Enter button name:');
	  if (name && !buttons.some(btn => btn.name === name)) {
		buttons = [...buttons, { name }];
	  } else {
		alert('Button name must be unique and not empty.');
	  }
	}
  
	/**
	 * @param {string} name
	 */
	function navigateToPage(name) {
	  currentPage = name;
	  // In a real app, you'd use a router library here
	  window.history.pushState({}, '', `/${name}`);
	}
  
	onMount(() => {
	  // Handle back/forward navigation
	  window.onpopstate = () => {
		const path = window.location.pathname.substring(1);
		currentPage = buttons.some(btn => btn.name === path) ? path : '';
	  };
	});
  </script>
  
  <main>
	<h1>Button Navigation App</h1>
	
	<div>
	  {#each buttons as button}
		<Button name={button.name} onClick={() => navigateToPage(button.name)} />
	  {/each}
	  <button on:click={addButton}>Add New Button</button>
	</div>
  
	{#if currentPage}
	  <div>
		<h2>Page: {currentPage}</h2>
		<p>This is the content for the {currentPage} page.</p>
	  </div>
	{:else}
	  <p>Click a button to navigate to a page.</p>
	{/if}
  </main> -->