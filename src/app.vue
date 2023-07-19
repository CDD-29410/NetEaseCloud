<template>
    <div class=" w-screen h-screen" >
        <router-view />
        <!-- 播放器 -->
        <Player class=" z-[999]"/>
        <!-- 菜单 -->
        

        <Dialog/>
    </div>

</template>

<script>
    import router from "@/router"
    import Player from "./components/Play/Player.vue";
    export default {
        components:{ Player },
        created(){

        }
    }
</script>