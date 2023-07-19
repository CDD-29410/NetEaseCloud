<!-- 面板 -->
<template>
    <div>
        <div>
            <h2>{{label}}</h2>
        </div>
        <div ref="wrapper">
            <div>
                <slot name="h2"  />
                <slot name="h3"  />
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core';
    export default{
        mounted() {
            // 滑块
            // new BScroll('.wrapper')
            new BScroll(this.$refs.wrapper,{
                scrollX:true,
                scrollY:false
            })
        },
        props:{
            label:{
                required:true,
                type:String
            }
        }
    }
</script>
