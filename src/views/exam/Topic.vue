<template>
    <div class="topic-views">
        <main class="topic-main">
            <div class="topic-main-title">
                <div class="title">
                    <span>1.这个标志是何含义？</span>
                </div>

                <div class="thumb">
                    <img src="http://images.juheapi.com/jztk/c1c2subject1/49.jpg" alt="" />
                </div>
            </div>

            <div class="topic-main-answer">
                <div class="item">
                    <span>Y型交叉口</span>
                </div>

                <div class="item">
                    <span>主路让行</span>
                </div>

                <div class="item">
                    <span>主意分流</span>
                </div>

                <div class="item">
                    <span>主意合流</span>
                </div>
            </div>

            <div class="topic-main-answer">
                <el-button :style="{ width: '100%', marginTop: '0.5rem' }"
                           type="primary" size="medium"
                           @click="onSubmit('login')">下一题</el-button>
            </div>
        </main>
    </div>
</template>

<script>
    import { Toast } from 'vant'

    export default {
        name: "Topic",
        data () {
            let isPhone = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入您的手机号码'))
                } else {
                    let reg = /^1[3|4|5|7|8][0-9]\d{8}$/;

                    if (reg.test(value)) {
                        callback()
                    } else {
                        return callback(new Error('请输入正确的手机号码'))
                    }
                }
            };

            return {
                login: {
                    phone: ''
                },
                rules: {
                    phone: [
                        { required: true, message: '请输入您的手机号码', trigger: 'blur' },
                        { validator: isPhone, trigger: 'blur' }
                    ]
                },
            }
        },
        methods: {
            onSubmit: function (form) {

                this.$refs[form].validate((valid) => {
                    if (valid) {
                        let _this = this,
                            isLoading = Toast.loading({
                                duration: 0,
                                message: 'Loading...',
                                loadingType: 'spinner'
                            })

                        setTimeout( () => {
                            isLoading.clear()

                            _this.$router.push({
                                path: `/sign/password/${_this.login.phone}`
                            })
                        }, 2000)
                    } else {
                        return false;
                    }
                });
            }
        },
        mounted () {}
    }
</script>
