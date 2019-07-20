
<script>
	import { spring } from 'svelte/motion';
	import { onMount, onDestroy } from 'svelte';

	let coords = spring({ x: Math.random()*50+100, y: Math.random()*100+100 }, {
		stiffness: 0.05,
		damping: 0.5
	});
	const size = 10;
	let dotPause= false;
	const detectRange = 40;
	const minDistance = 300;
	let timeout;

	onDestroy(()=>{
		clearTimeout(timeout);
	});

	function random(current, max, minDistance){

		let found = false;
		let result = null;

		while(!found){
			// get random coords
			const x = Math.random() * max.x;
			const y = Math.random() * max.y;
			// find out distance to current coords
			const dx = x-current.x;
			const dy = y-current.y;
			const distance = Math.sqrt(Math.pow(dx,2)+ Math.pow(dy,2));
			if(distance > minDistance){
				result= {x,y};
				break;
			}
		}

		return result;
	}

	function handleMouseMove(e){

		// console.log(e.layerX);
		// console.log($coords.x);

		if(dotPause){
			return;
		}
		if(Math.abs(e.pageX - $coords.x) < detectRange 
			&& Math.abs(e.pageY - $coords.y) < detectRange){
			console.log("triggered");
			dotPause = true;
			const max = {x: e.view.innerWidth, y: e.view.innerHeight};
			const {x, y} = random($coords, max, minDistance);
			coords.set({x,y});
			timeout = setTimeout(()=>dotPause=false, 300);
		}
	}
</script>

<!-- shouldn't use grid -->
<!-- TODO, do it again in another way -->
<style>
	.wrapper {
		width: 100%;
	}
	svg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
	}
	circle { 
		fill: #ff3e00 
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<!-- <h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p> -->

<div class="wrapper">
	
</div>

<svelte:window on:mousemove="{handleMouseMove}" />

<svg>
	<circle cx={$coords.x} cy={$coords.y} r={size}/>
</svg>
