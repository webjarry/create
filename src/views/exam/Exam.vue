<template>
    <div class="exam-views">
        <header class="exam-header">
            <div class="title">
                <span>{{title}}</span>
            </div>
        </header>
        <div class="exam-main">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import { post } from '../../plugin/axios'

    export default {
    name: "Sign",
    data () {
        return {
            title: '科目一考试测试'
        }
    },
    methods: {
        initExamList: function () {
            let params = new FormData();

            params.append('subject', '1')
            params.append('model', 'c1')
            params.append('testType', '100')
            params.append('key', '9306fd6a2c588e933b6b8fcc9592cd90')

            post('/jztk/query', params).then(res => {
                if (res.error_code === 0) {
                    window.console.log(res)
                }
            })
        }
    },
    mounted() {
        this.initExamList()
    }
}
</script>
