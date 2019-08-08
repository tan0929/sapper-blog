<script>
	import FlyingWords from '../components/flyingWords.svelte';
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

<SEO />

<div class="wrapper">
	<FlyingWords {text} large />
	<FlyingWords text={name} large/>
	<a href={`mailto: ${email}`}>
		<FlyingWords text={email}/>
	</a>
</div>

