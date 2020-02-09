<template>
    <div class="module-components ">
        <div class="user-info">
            <div class="avatar">
                <img :src="avatar" alt="" />
            </div>

            <div class="info">
                <div class="title">
                    <span>{{name}}</span>
                    <div class="subtitle">
                        <span class="time">{{time}}</span>
                        <span class="device">发布自 {{device}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <p v-html="desc"></p>

            <div class="thumb">
                <div class="thumb-item" v-for="(o, i) in thumbs" :key="i" @click="showImage(thumbs, i)">
                    <img :src="o" alt="">
                </div>
            </div>

            <div class="video">
                <video :src="require('../assets/video/mp4.mp4')" controls :style="{ backgroundImage: `url('${require('../assets/images/WechatIMG461.png')}` }"></video>
            </div>
        </div>
        <div class="footer">
            <div class="item" @click="clickLike">
                <div class="icon"><van-icon name="good-job-o" /></div>
                <div class="text">{{bar.like}}</div>
            </div>

            <div class="item" @click="clickComment">
                <div class="icon"><van-icon name="chat-o" /></div>
                <div class="text">{{bar.comment}}</div>
            </div>

            <div class="item" @click="clickForward">
                <div class="icon"><van-icon name="share" /></div>
                <div class="text">{{bar.forward}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';

export default {
    name: "Module",
    props: {
        avatar: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        time: {
            type: String,
            default: ''
        },
        device: {
            type: String,
            default: '未知设备'
        },
        desc: {
            type: String,
            default: ''
        },
        thumbs: {
            type: Array,
            default: Array
        },
        bar: {
            type: Object,
            default: () => {
                return {
                    like: 0,
                    comment: 0,
                    forward: 0
                }
            }
        },

    },
    data () {
        return {}
    },
    methods: {
        clickComment: function () {
            this.$emit("clickComment")
        },
        clickLike: function () {
            this.$emit("clickLike")
        },
        clickForward: function () {
            this.$emit("clickForward")
        },
        showImage: function (list, index) {
            const showImage =  ImagePreview({
                images: list,
                asyncClose: true,
                startPosition: index,
                closeOnPopstate: true,
                onClose: function () {
                    showImage.close()
                }
            });

        }
    },
    mounted() {
    }
}
</script>
