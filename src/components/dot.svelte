<script>
    import { spring } from 'svelte/motion';
    import { onMount, onDestroy } from 'svelte';
    
    let coords = spring({ x: 0, y: 0 }, {
		stiffness: 0.05,
		damping: 0.5
	});
	const size = spring(0);
	let dotPause= false;
	const detectRange = 60;
	const minDistance = 300;
	let timeout;

	onMount(()=>{
		const max = {x: window.innerWidth, y: window.innerHeight};
		coords.set(random($coords, max, minDistance));
		size.set(10);
	});

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
			// find out the distance to current coords
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

		if(dotPause){
			return;
		}

		if(Math.abs(e.x - $coords.x) < detectRange 
			&& Math.abs(e.y - $coords.y) < detectRange){
			dotPause = true;
			const max = {x: e.view.innerWidth, y: e.view.innerHeight};
			const {x, y} = random($coords, max, minDistance);
			coords.set({x,y});
			timeout = setTimeout(()=>dotPause=false, 300);
		}
	}
</script>

<style>
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

<svelte:window on:mousemove="{handleMouseMove}" />
<svg>
	<circle cx={$coords.x} cy={$coords.y} r={$size}/>
</svg>