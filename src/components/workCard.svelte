<script>
    export let url;
    export let src;
    export let option;
    const dark = option && option.dark;
</script>

<style>

    p {
        padding: 0;
        margin: 0;
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 280px;
        margin: 20px 0;
    }

    .card {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 180px;
        box-shadow: 12px 12px 12px #222;
        transition: 0.5s;
    }

    .card:hover {
        width: 280px;
    }

    .card:hover .bg{
        opacity: 1;
        filter: none;
    }
    
    .bg {
        z-index: 1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: 280px 180px;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.3;
        filter: grayscale(80%);
        transition: 0.5s;
    }

    .text {
        line-height: 1em;
        position: relative;
        font-size: 60px;
        font-weight: 900;
        padding: 10px;
        color: transparent;
        background-size: 280px 180px;
        background-position: center;
        background-clip: text;
        -webkit-background-clip: text;
        white-space: nowrap;
    }

    a {
        text-decoration: none;
    }

</style>

<a href={url} target="_blank">
    <div class="wrapper">
        <div class="card" >
            <div 
                class="bg" 
                style={`
                    background-image: url('${src}');
                `}
            />
            <p 
                class="text" 
                style={`
                    background-image: url('${src}');
                    ${dark ? `text-shadow: 0px 0px rgba(20,20,20,0.5);` : ``}
                `}
            >
                <slot>Test Work</slot>
            </p>
        </div>
    </div>
</a>
