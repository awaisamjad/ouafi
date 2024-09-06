<script>
	import { getClothingItemByID } from '$lib/utils.js';
	let item = getClothingItemByID(3);
    console.log(item);
</script>

<h1>About page {item?.category}</h1>

