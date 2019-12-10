<template>
    <div class="login-views">
        <main class="login-main">
            <div class="login-main-submit">
                <el-form>
                    <el-form-item>
                        <van-password-input
                                :length="4"
                                :value="code"
                                :mask="false"
                                :focused="showKeyboard"
                                @focus="showKeyboard = true"/>
<!--                        <el-input type="text" v-model="phone" prefix-icon="el-icon-chat-dot-square" placeholder="请输入您收到的短信验证码"></el-input>-->
                        <div class="desc">
                            <span>未注册的手机号码验证后自动创建安欣驾校账号</span>
                        </div>
                    </el-form-item>

                    <el-form-item>
                        <el-button :style="{ width: '100%', marginTop: '0.5rem' }"
                                   type="primary" size="medium"
                                   @click="onSubmit('user')">立即登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="login-main-help">
                <router-link to="/">密码登录</router-link>
                <router-link to="/">遇到问题</router-link>
            </div>
        </main>

        <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false"/>
    </div>
</template>

<script>
export default {
    name: "Password",
    data () {
        return {
            code: '',
            showKeyboard: false
        }
    },
    methods: {
        onSubmit: function () {
        },
        onInput(key) {
            this.code = (this.code + key).slice(0, 4);
        },
        onDelete() {
            this.code = this.code.slice(0, this.code.length - 1);
        }
    },
    mounted () {
    }
}
</script>
