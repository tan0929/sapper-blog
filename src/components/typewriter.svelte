<script>
    import { onMount } from 'svelte';
    export let backward;

    let enable = false;
    let cursor = true;
    let timeout;

    onMount(()=>{
        enable = true;
    });

    function handleEnd(){
        timeout = setTimeout(()=>{
            cursor=false;
        }, 1000);
    }

	function typewriter(node, { speed = 200 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === 3
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

        const delay = 1500;
		const text = node.textContent;
		const duration = text.length * speed;

		return {
            delay,
			duration,
			tick: t => {
                const i = ~~(text.length * t);
                node.textContent = 
                    backward && i === 0 ? text :
                    text.slice(0, backward? -i : i);
			}
		};
	}
</script>

<style>
    .cursor {
        height: 1em;
        margin-left: -0.2em;
        display: inline-block;
        border-left: 2px solid black;
    }
</style>

{#if enable}
	<span 
        in:typewriter
        on:introend="{handleEnd}"
    >
		<slot>Typewriter is typing typing typing.</slot>
	</span>
    {#if cursor}
        <div class="cursor" />
    {/if}
{/if}
