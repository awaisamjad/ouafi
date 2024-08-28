<script>
	import '../app.css';
</script>

<nav class="flex flex-row bg-slate-300 p-2">
    <div class="flex items-center justify-center">
        <a href="/">LOGO</a>
    </div>
    <div class="flex-grow flex justify-end">
        <a href="/about">About</a>
        <a href="/account">Account</a>
    </div>
</nav>

<slot />
