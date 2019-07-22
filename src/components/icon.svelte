<!-- for fontawesome -->
<script>
    export let icon;
    const viewBox = `0 0 ${icon.icon[0]} ${icon.icon[1]}`
    const path = icon.icon[4];
</script>

<style>
  svg {
    width: 1em;
    height: 1em;
  }
</style>

<svg viewBox={viewBox}>
  <path fill="currentColor" d="{path}" />
</svg>