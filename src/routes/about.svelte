
<script>
	import SEO from '../components/seo.svelte';
	import Icon from '../components/icon.svelte';
	import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
	import Dot from '../components/dot.svelte';

</script>

<style>
	.icon {
		font-size: 30px;
	}
</style>

<SEO data={{title: "About"}}/>
<Dot />

<h1>About this site</h1>
<p>
	This website is built for a variety of purposes, 
	including recording personal experiences and portfolios.
</p>
<p>
	Built with Sapper, a JavaScript framework based on Svelte.
</p>
<p>
	Check the source code on Github
	<a class="icon" href="https://github.com/tan0929/sapper-blog" target="_blank">
		<Icon icon={faGithub}/>
	</a>
</p>
