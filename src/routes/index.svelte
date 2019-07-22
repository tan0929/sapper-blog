<script>
	import FlyWords from '../components/flyWords.svelte';
	import SEO from '../components/seo.svelte';

	let text = `let me = works.map(({fun})=>fun)`;
	let name = "James Tan";
	let email = "contact@jamestan.me";
	

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

<SEO data={{}}/>

<div class="wrapper">
	<FlyWords option={{text, large: true}}/>
	<FlyWords option={{text: name, large: true}}/>
	<a href={`mailto: ${email}`}>
		<FlyWords option={{text: email}}/>
	</a>
</div>

