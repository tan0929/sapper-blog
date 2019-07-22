
<!-- TODO, tag filter , pagination, and search bar -->

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`/blog/api/all.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import SEO from '../../components/seo.svelte';
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
		padding: 0;
	}

	li {
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		padding: 10px 10px;
		margin: 20px 0;
		border-bottom: 1px solid #222;
		box-shadow: 3px 3px 5px #222;
		transition: 0.3s;
	}

	li:hover {
		background-color: #DDD;
		box-shadow: 1px 1px 1px #222;
	}

	.date {
		margin-left: auto;
	}

	a {
		text-decoration: none;
	}

	@media (min-width: 480px) {
		ul {
			padding: 0 40px;
		}
	}

</style>

<SEO data={{title: "Blog"}}/>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<a rel='prefetch' href='blog/{post.slug}'>
			<li>
				{post.title}
				<div class="date">{post.dateString}</div>
			</li>
		</a>
	{/each}
</ul>