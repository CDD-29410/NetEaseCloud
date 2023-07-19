<template>
    <div class="w-[50px] h-[15px] bg-[#ee0a24]"  :class="`${ value ? '' : ''}`">
        <div class="w-[30px] h-[15px] bg-white transition-all" :class= "`${ value ? 'translate-x-[20px]' : 'translate-x-0'}`"></div>
        
    </div>
</template>
<script>
    export default{
        props:{
            value:{
                type:Boolean,
                required:true
            }
        }
    }
</script>