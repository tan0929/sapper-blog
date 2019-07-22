<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/api/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	// if change this, remember to change the background and normal color below
	import 'highlight.js/styles/gruvbox-dark.css';
	import SEO from '../../components/seo.svelte';
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/

	.content :global(img) {
		display: block;
		/* margin: auto;  */
		max-width: 100%;
	}

	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		/* highlight background color */
		background-color: #282828;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	
	.content :global(pre) :global(code) {
		background-color: transparent;
		/* highlight normal text color */
		color: antiquewhite;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	#date {
		text-align: right;
	}

</style>

<SEO data={{
		title: post.frontmatter.title,
		description: post.frontmatter.description,
	}} 
/>

<h1>{post.frontmatter.title}</h1>
<p id="date">{post.frontmatter.dateString}</p>

<div class='content'>
	{@html post.html}
</div>
