<template>
    <views :is-bar="false">
        <div class="join-views">
            <!--        <header class="join-header">-->
            <!--            <div class="menu" @click="onSwitchMenu">-->
            <!--                <img :src="require('../assets/images/Home/menu.png')" alt="" />-->
            <!--            </div>-->
            <!--        </header>-->

            <main class="join-main">
                <section class="join-main-thumb">
                    <div class="thumb-image">
                        <img :src="require('../assets/images/card.png')" alt="" />
                    </div>

                    <div class="thumb-text">
                        <captions title="学费仅需 5699元" subtitle="邀请学员报名再返 500元">
                            <div class="subtitle">
                                <span>一次性通过考试(科一 至 科四)返 300元</span>
                            </div>
                            <div class="subtitle">
                                <span>学车期间无需任何费用 ( 不包含补考费 )</span>
                            </div>
                        </captions>
                    </div>
                </section>

                <section class="join-main-submit">
                    <captions title="立即报名"></captions>
                    <el-form :model="user" :rules="rules" ref="user"
                             @submit.prevent="onSubmit('user')"
                             label-position="top"
                    >
                        <el-form-item label="学员姓名" prop="username">
                            <el-input v-model="user.username" type="text" prefix-icon="el-icon-user"></el-input>
                        </el-form-item>

                        <el-form-item label="手机号码" prop="phone">
                            <el-input v-model.trim="user.phone" type="Number" prefix-icon="el-icon-phone-outline"></el-input>
                        </el-form-item>

                        <el-form-item label="短信验证码" prop="code">
                            <el-row>
                                <el-col :span="12">
                                    <el-input v-model.trim="user.code" prefix-icon="el-icon-chat-line-square" type="Number"></el-input>
                                </el-col>

                                <el-col :offset="1" :span="11">
                                    <el-button :style="{ width: '100%' }" @click="onGetCode"
                                               type="primary"
                                               :disabled="code.disabled">{{code.value}}</el-button>
                                </el-col>
                            </el-row>
                        </el-form-item>

                        <el-form-item label="所在区域" prop="address">
                            <el-select v-model="user.city" placeholder="请选择" :style="{ width: '100%' }">
                                <el-option
                                        v-for="item in city"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="详细地址" prop="address">
                            <el-input v-model="user.address" type="text" prefix-icon="el-icon-location-outline"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button :style="{ width: '100%', marginTop: '0.5rem' }"
                                       type="primary" size="medium"
                                       @click="onSubmit('user')">立即提交</el-button>
                        </el-form-item>
                    </el-form>
                    <div class="desc">
                        <span>如果已经注册了账户点击<router-link to="/exam"> 考试测试 <i class="el-icon-arrow-right"></i> </router-link></span>
                    </div>
                </section>
            </main>

            <van-popup v-model="ifMenu"
                       round
                       position="bottom">
                <nav class="nav">

                </nav>
            </van-popup>
        </div>
    </views>
</template>

<script>
    // @ is an alias to /src
    import captions from '../components/Caption'
    import { Toast } from 'vant'
    import Views from "../components/Views";

    export default {
        name: 'forms',
        components: {
            Views,
            captions
        },
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
                code: {
                    value: '获取验证码',
                    disabled: false
                },
                city: [
                    {
                        value: 'songjiang',
                        label: '松江区'
                    },
                    {
                        value: 'putuo',
                        label: '普陀区'
                    },
                    {
                        value: 'qingpu',
                        label: '青浦区'
                    },
                    {
                        value: 'huangpu',
                        label: '黄浦区'
                    },
                    {
                        value: 'xuhui',
                        label: '徐汇区'
                    },
                    {
                        value: 'changning',
                        label: '长宁区'
                    },
                    {
                        value: 'jingan',
                        label: '静安区'
                    },
                    {
                        value: 'yangpu',
                        label: '杨浦区'
                    },
                    {
                        value: 'minhang',
                        label: '闵行区'
                    },
                    {
                        value: 'baoshan',
                        label: '宝山区'
                    },
                    {
                        value: 'pudong',
                        label: '浦东新区'
                    }
                ],
                user: {
                    username: '',
                    phone: '',
                    code: '',
                    address: '',
                    city: 'songjiang'
                },
                rules: {
                    username: [
                        { required: true, message: '请输入您的真实姓名', trigger: 'blur' },
                        { min: 2, max: 5, message: '真实姓名为 2-5 位字符', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输入您的手机号码', trigger: 'blur' },
                        { validator: isPhone, trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '请输入您的短信验证码', trigger: 'blur' },
                        { min: 5, max: 5, message: '短信验证码为5位字符', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入您的学车地址', trigger: 'blur' }
                    ]
                },
                ifMenu: false
            }
        },
        methods: {
            /**
             * 菜单按钮
             * */
            onSwitchMenu: function () {
                this.ifMenu = true
            },

            /**
             * 获取短信验证码
             * */
            onGetCode () {
                this.$refs.user.validateField('phone', (error) => {
                    if (!error) {
                        let loading = Toast.loading({
                            // mask: true,
                            duration: 0,
                            message: 'Loading...',
                            loadingType: 'spinner'
                        });

                        setTimeout(() => {
                            let _this = this

                            _this.code.value = 60
                            _this.code.disabled = true

                            loading.clear()

                            let timer = setInterval(() => {
                                if (_this.code.value > 0) {
                                    _this.code.value --

                                } else {

                                    _this.code.disabled = false
                                    _this.code.value = '重新获取'

                                    clearInterval(timer)
                                }
                            }, 1000)
                        }, 3000)
                    }
                })
            },

            /**
             * 提交表单
             * */
            onSubmit (form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        window.console.log('Submit!!')
                    } else {
                        window.console.log('error Submit!!');
                        return false;
                    }
                });
            }
        },
        mounted () {
        }
    }

</script>
