<template>
    <div class="login-views">
        <main class="login-main">
            <div class="login-main-submit">
                <el-form :model="login" :rules="rules" ref="login">
                    <el-form-item prop="phone">
                        <el-input type="tel" v-model="login.phone" prefix-icon="el-icon-phone-outline"></el-input>
                        <div class="desc">
                            <span>未注册的手机号码验证后自动创建安欣驾校账号</span>
                        </div>
                    </el-form-item>

                    <el-form-item>
                        <el-button :style="{ width: '100%', marginTop: '0.5rem' }"
                                   type="primary" size="medium"
                                   @click="onSubmit('login')">获取短信验证码</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <div class="login-main-help">
                <router-link to="/">密码登录</router-link>
                <router-link to="/">遇到问题</router-link>
            </div>
        </main>
    </div>
</template>

<script>
import { Toast } from 'vant'

export default {
    name: "Phone",
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
