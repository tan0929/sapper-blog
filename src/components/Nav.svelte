<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(63, 20, 6, 0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 5px;
	}

	ul::after {
		content: '';
		display: block;
	}

	li {
		display: inline-block;
		padding: 0px 10px;
	}

	@keyframes fadeIn {
		0% {
			box-shadow: 2px 1px 2px #666;
		}
		100% {
			box-shadow: 5px 2px 5px #222;
		}
	}

	@keyframes fadeOut {
		0% {
			box-shadow: 5px 2px 5px #222;
		}
		100% {
			box-shadow: 2px 1px 2px #666;
		}
	}

	.unselected {
		position: relative;
	}

	.selected{
		position: relative;
	}

	.selected::after{
		position: absolute;
		content: '';
		top: 15px;
		bottom: 10px;
		right: 1px;
		left: 1px;
		box-shadow: 2px 1px 2px #666;
		animation: fadeOut 0.2s;
	}

	.unselected::after {
		position: absolute;
		content: '';
		top: 15px;
		bottom: 10px;
		right: 1px;
		left: 1px;
		box-shadow: 6px 3px 6px #222;
		animation: fadeIn 0.2s;
	}

	a {
		-webkit-tap-highlight-color: transparent;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : "unselected"}' href='.'>home</a></li>
		<li><a class='{segment === "about" ? "selected" : "unselected"}' href='about'>about</a></li>

		<!-- using rel=prefetch to prefetches the blog data
		     when hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "works" ? "selected" : "unselected"}' href='works'>works</a></li>
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : "unselected"}' href='blog'>blog</a></li>
		
	</ul>
</nav>