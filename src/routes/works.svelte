<script>
    import Typewriter from '../components/typewriter.svelte';
    import WorkCard from '../components/workCard.svelte';

    const works = [
        {
            name: "Petalimn",
            url: "https://petalimn.com",
            src: "works/screenshot-petalimn.jpg",
        },
        {
            name: "CSCY",
            url: "https://cscytw.com",
            src: "works/screenshot-cscy.jpg",
            option: {
                dark : true,
            }
        },
        {
            name: "Triple M",
            url: "https://triplem.netlify.com",
            src: "works/screenshot-triplem.jpg",
            option: {
                dark: true,
            }
        },
    ];
</script>

<style>
    .wrapper{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>

<svelte:head>
	<title>Works</title>
</svelte:head>

<h1>Works <Typewriter backward>in progress</Typewriter></h1>

<div class="wrapper">
    {#each works as work, index}
        <WorkCard 
            url={work.url}
            src={work.src}
            option={work.option}
        >
            {work.name}
        </WorkCard>
    {/each}
</div>