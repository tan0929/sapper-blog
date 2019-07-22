<script>
    import { fly } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';

    export let option;

    let enable = false;
    const delay = 0;
    const duration = 2000;
    const range = 300;

    const words = option.text.split(' ');
    const large = option.large === true;

    const size = "1.4em";
    const mobileLarge = "1.4em";
    const tabletLarge = "2.5em";

    onMount(()=>{
        enable=true;
    });

    function random(){
        return (Math.random() * range) * (Math.random() > 0.5 ? 1 : -1) ;
    }
    
</script>
    
<style>
    div {
        display: inline-block;
        font-weight: 500;
    }

    .wrapper {
        padding: 20px;
    }
    .character {
        font-size: var(--mobileSize);
    }

    .word::after {
        content: "\00a0\00a0";
    }

    .character:hover {
        color: red;
    }

    @media (min-width: 480px) {
		.character {
			font-size: var(--tabletSize);
		}
	}
</style>

{#if enable}
    <div class="wrapper">
        {#each words as word, index}
            <div class="word">
                {#each word as character}
                    <div 
                        class="character"
                        style={`
                            --mobileSize: ${large ? mobileLarge : size};
                            --tabletSize: ${large ? tabletLarge : size};
                        `}
                        in:fly="{{
                            delay: delay,
                            duration: duration,
                            x: random(), 
                            y: random(),
                        }}"
                    >
                        {character}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
{/if}
