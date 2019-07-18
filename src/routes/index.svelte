<script>
	import FlyWords from '../components/flyWords.svelte';

	let email = "contact@jamestan.me";
	let text = "Hello, This is James Tan's blog";

</script>

<style>
	.wrapper {
		width: 100%;
		min-height: 450px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
</style>

<svelte:head>
	<title>James Tan</title>
</svelte:head>

<div class="wrapper">
	<FlyWords option={{text, large: true}}/>
	<a href={`mailto: ${email}`}>
		<FlyWords option={{text: email}}/>
	</a>
</div>

