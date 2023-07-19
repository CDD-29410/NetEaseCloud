
<template>
    <div>
        <div @click="clickHandler">
        <div v-if="visible" class="bg-black opacity-20 absolute top-0 bottom-0 left-0 right-0 z-[998]" ref="drawerMask">
        </div>
        <div>
            <transition name="btt">
                <div v-show="visible" :style="[drawerContent]"
                    class="w-screen h-[54vw] bg-[#F5F5F5] fixed rounded-t-[5vw] z-[999]">
                    <!-- <slot name="header"> header slot default value </slot> -->
                    <slot name="header">
                        <div class="flex justify-between items-center h-[10vw] border-b px-[5vw]">
                            <p class="text-[#8E9097]">{{ title }}</p>
                            <Icon @click.native="closeDrawer" icon="ph:x" width="5vw" height="5vw"
                                class="bg-[#E5E7EB] rounded-[50%]" />
                        </div>
                    </slot>
                    <div class="p-[5vw] pt-[0vw]">
                        <slot>
                            <li class="flex items-center h-[12vw]"><Icon class="mr-[5vw]" icon="uiw:like-o" width="7vw" height="7vw" /> 优先推荐</li>
                            <li class="flex items-center h-[12vw]"><Icon class="mr-[5vw]" icon="ion:heart-dislike-outline" width="7vw" height="7vw" :horizontalFlip="true" />减少推荐</li>
                            <li class="flex items-center h-[12vw]"><Icon class="mr-[5vw]" icon="icon-park-outline:more-two" width="7vw" height="7vw" :rotate="1" />更多内容</li>
                        </slot>
                    </div>
                </div>
            </transition>
        </div>
        </div>
    </div>
</template>
<script >
export default {
    //计算属性
    computed: {
        drawerContent() {
            if (this.direction === 'btt') {
                return {
                    width: '100vw',
                    left: 0,
                    bottom: 0,
                };
            } else if (this.direction === 'ttb') {
                return {
                    width: '100vw',
                    left: 0,
                    top: 0,
                };
            } else if (this.direction === 'ltr') {
                return {
                    height: '100vh',
                    left: 0,
                    top: 0,
                };
            } else if (this.direction === 'rtl') {
                return {
                    height: '100vh',
                    right: 0,
                    top: 0,
                };
            }
        },
    },
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            default: '听过爱过的华语经典',
        },
        direction: {
            type: String,
            default: 'btt', //从下到上
            validator(direction) {
                return ['ttb', 'btt', 'ltr', 'rtl'].includes(direction);
                //从上到下 从下到上 从左到右 从右到左
            },
        },
        width:{
            type:[Number,String],
            default:'80vw',
        },
    },
    methods: {
        closeDrawer() {
            this.$emit('update:visible', false);
        },
        clickHandler(e) {
            if (e.target === this.$refs.drawerMask) {
                // this.visible=false
                // 使用vm.$emit给父组件传递数据
                this.closeDrawer();
            }
        },
    },
};
</script>
<style scoped>
.btt-enter-active {
    transition: all ease-in-out 0.7s;
}

.btt-leave-active {
    transition: all ease-in-out 0.2s;
}

.btt-enter-to,
.btt-leave {
    transform: translateY(0);
}

.btt-leave-to,
.btt-enter {
    transform: translateY(100%);
}
</style>