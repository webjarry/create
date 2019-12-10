<template>
  <views>
    <div class="home-views">
      <header class="home-header">
        <div class="user-card shadow" :class="user.level === 0 ? 'pt' : user.level === 1 ? 'gj' : 'zx'">
          <div class="text-bg">
            <span>{{levelBg}}</span>
          </div>

          <div class="user-level">
            <div class="title">
              <h2>{{user.name}}</h2>

              <div class="subtitle">
                <span>有效期至：{{user.over}}</span>
              </div>
            </div>
          </div>

          <div class="desc">
            <i>会员权益</i>
          </div>
        </div>

        <div class="menu">
          <div class="item" v-for="(item, index) in menu" :key="index" :class="index == 0 ? 'active' : ''">
            <div class="icon">
              <img :src="item.icon" alt="" />
            </div>

            <div class="text">
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
      </header>
      <main class="home-main">
        <div class="tab-box">
          <div class="tab-index">
            <div class="ke1-ad shadow" @click="$router.replace('/form')">
              <div class="title">
                <div class="text">
                  <h2>实力派  更信赖</h2>
                </div>
                <div class="subtitle">
                  <span>一对一练车 35 天拿证</span>
                </div>
              </div>
            </div>
            <module v-for="(item, index) in 10" :key="index">
              <div class="user-info">
                <div class="avatar shadow">
                  <img :src="require('../assets/images/avatar.jpg')" alt="" />
                </div>

                <div class="info">
                  <div class="title">
                    <span>WEBJARRY</span>
                    <div class="subtitle">
                      <span class="time">22分钟前</span>
                      <span class="device">发布自 iPhone X</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content">
                <p>阖家安康老实交代拉克丝记得拉开始就达拉斯肯德基爱丽丝肯德基阿斯利康多久啊来看待静安寺来看待静安寺了肯德基阿拉丁卡阖家安康老实交代拉克丝记得拉开始就达拉斯肯德基爱丽丝肯德基阿斯利康多久啊来看待静安寺来看待静安寺了肯德基阿拉丁卡</p>
              </div>
              <div class="footer">
                <div class="item">
                  <div class="icon"><van-icon name="good-job-o" /></div>
                  <div class="text">24</div>
                </div>

                <div class="item">
                  <div class="icon"><van-icon name="chat-o" /></div>
                  <div class="text">31</div>
                </div>

                <div class="item">
                  <div class="icon"><van-icon name="share" /></div>
                  <div class="text">10</div>
                </div>
              </div>
            </module>
          </div>
          <div class="tab-index"></div>
          <div class="tab-index"></div>
        </div>
      </main>
    </div>
  </views>
</template>

<script>
// @ is an alias to /src
// import Module from "../components/Module";

import Module from "../components/Module";
import Views from "../components/Views";

export default {
  name: 'home',
  components: {
    Views,
    Module
    // Module
  },
  data () {
    return {
      user: {
        level: 2,
        name: 'WEBJARRY',
        over: '2020-11-20'
      },
      value: '',
      menu: [
        {
          id: 0,
          title: '预约学车',
          icon: require('../assets/images/Home/reservation.png'),
          subtitle: ''
        },
        {
          id: 0,
          title: '休闲中心',
          icon: require('../assets/images/Home/talk.png'),
          subtitle: ''
        },
        {
          id: 0,
          title: '考题复习',
          icon: require('../assets/images/Home/notebook.png'),
          subtitle: ''
        },
        {
          id: 0,
          title: '会员中心',
          icon: require('../assets/images/Home/userinfo.png'),
          subtitle: ''
        }
      ]
    }
  },
  computed: {
    levelBg: function () {
      let level = '';
      switch (this.user.level) {
        case 0:
          level = "普通";
          break
        case 1:
          level = "高级";
          break
        case 2:
          level = "尊享";
          break
        default:
          level = "未知";
          break
      }

      return level;
      // return this.user.level.substring(0, 2);
    }
  },
  methods: {
  },
  mounted () {
  }
}

</script>
