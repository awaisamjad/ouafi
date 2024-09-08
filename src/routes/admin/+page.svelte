<script>
	import { goto } from '$app/navigation';
  let username = '';
  let password = '';
  
  function authenticate() {
    if (username == "Awais" && password == "Amjad"){
      goto('/admin/dashboard')
    }
    else{
      alert("Unsuccessful")
    }
  }
  
</script>

<div class="w-full max-w-xs">
	<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Name </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="username"
				type="text"
				placeholder="Username"
        bind:value={username}
			/>
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
			<input
				class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				type="text"
        bind:value={password}
			/>
			<p class="text-red-500 text-xs italic">Please choose a password.</p>
		</div>
		<div class="flex items-center justify-between">
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="button"
				on:click={authenticate}
			>
				Sign In
			</button>
		</div>
	</form>
</div>
