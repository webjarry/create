<template>
    <cls-views is-bar :tab-bar-item="menu">
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </cls-views>
</template>

<script>
    export default {
        name: "Index",
        data () {
            return {
                menu: [
                    {
                        id: 0,
                        title: '预约学车',
                        path: '/',
                        icon: require('../assets/images/Home/reservation.png'),
                        subtitle: ''
                    },
                    {
                        id: 0,
                        title: '考题复习',
                        path: '/form',
                        icon: require('../assets/images/Home/talk.png'),
                        subtitle: ''
                    },
                    {
                        id: 0,
                        title: '个人中心',
                        path: '/account',
                        icon: require('../assets/images/Home/notebook.png'),
                        subtitle: ''
                    }
                ]
            }
        }
    }
</script>
