<template>
    <div class="views">
        <div class="views-main" :style="{ marginBottom: isiPhoneX && isBar ? '1.98rem' : isBar ? '1.5rem' : '0' }">
            <slot></slot>
        </div>
        <nav class="bar" :style="{ paddingBottom: isiPhoneX ? '0.68rem' : '0.2rem' }" v-if="isBar">
            <div class="item" v-for="(item, index) in bar" :key="index">
                <div class="icon">
                    <img :src="item.icon" alt="" />
                </div>
                <div class="text">{{item.title}}</div>
            </div>
        </nav>
    </div>
</template>

<script>
import {isIPhoneX} from "../plugin/plugin";

export default {
    name: "Views",
    props: {
        isBar: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            isiPhoneX: isIPhoneX(),
            bar: [
                {
                    id: 0,
                    title: '首页',
                    icon: require('../assets/images/Home/home.png')
                },
                {
                    id: 0,
                    title: '消息',
                    icon: require('../assets/images/Home/message.png')
                },
                {
                    id: 0,
                    title: '会员中心',
                    icon: require('../assets/images/Home/user.png')
                }
            ]
        }
    }
}
</script>
