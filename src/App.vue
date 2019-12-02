<template>
    <div id="container-box">
        <router-view/>
        <Tabbar/>
    </div>
</template>

<script>
    import Tabbar from "./components/Tabbar";

    export default {
        name: 'app',
        components: {
            Tabbar
        }
    }
</script>

<style>
    #container-box {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
