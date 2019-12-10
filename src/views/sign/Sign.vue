<template>
    <div class="sign-views">
        <header class="sign-header">
            <div class="title">
                <span>{{title}}</span>
            </div>
        </header>
        <div class="sign-main">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sign",
    data () {
        return {
            title: '欢迎登陆安欣驾校'
        }
    },
    mounted () {
    },
    methods: {
    }
}
</script>
