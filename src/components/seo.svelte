<script context="module">
    const def = {
        title: "James Tan",
        description: "James Tan's blog",
        image: "https://jamestan.me/jt-192.png",
        keywords: [
            "James Tan",
            "web",
            "developer"
        ],
    }
</script>

<script>
    export let data = {};
    
    const metaTitle = data.title || def.title;
    const metaDescription = data.description || def.description;
    const metaImage = data.image || def.image;
    const metaKeywords = 
        data.keywords 
        ? data.keywords.split(",").map(word=>word.trim()).concat(def.keywords).join(", ")
        : def.keywords.join(", ");

</script>

<svelte:head>

    <title>{metaTitle}</title>

    <meta name="title" content={metaTitle}>
    <meta name="description" content={metaDescription}>
    <meta name="image" content={metaImage}>
    <meta name="keywords" content={metaKeywords}>

    <meta property="og:title" content={metaTitle}>
    <meta property="og:description" content={metaDescription}>
    <meta property="og:image" content={metaImage}>
    <meta property="og:type" content="article">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content={metaTitle}>
    <meta name="twitter:description" content={metaDescription}>
    <meta name="twitter:image" content={metaImage}>
    <meta name="twitter:creator" content="James Tan">

</svelte:head>