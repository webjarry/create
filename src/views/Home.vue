<template>
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
        <div class="item" v-for="(item, index) in menu" :key="index">
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

          <module v-for="(item, index) in review" :key="index"
                  :desc="item.desc"
                  :avatar="item.user.avatar" :name="item.user.name"
                  :device="item.device" :time="item.time"
                  :thumbs="item.thumb" :bar="{ like: item.active.like, comment: item.active.comment, forward: item.active.forward }"
                  @clickComment="onComment(item.id)" @clickLike="onLike(item.id)" @clickForward="onForward(item.id)">

          </module>
        </div>
        <div class="tab-index"></div>
        <div class="tab-index"></div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import Module from "../components/Module";

export default {
  name: 'home',
  components: {
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
      review: [
        {
          id: 0,
          user: {
            name: '小田田',
            avatar: require('../assets/images/avatar.jpg')
          },
          time: '10 分钟前',
          device: 'iPhone 8 Plus',
          desc: '给我来一盒，免费就行，我什么都不怕',
          active: {
            like: 333,
            comment: 12,
            forward: 555
          }
        },
        {
          id: 0,
          user: {
            name: '小猫猫',
            avatar: require('../assets/images/avatar1.jpg')
          },
          time: '30 分钟前',
          device: 'iPhone 4s',
          desc: '我他妈居然在皮皮虾看广告',
          active: {
            like: 333,
            comment: 12,
            forward: 555
          }
        },
        {
          id: 0,
          user: {
            name: '喂！我是狗，你说!',
            avatar: require('../assets/images/avatar2.jpg')
          },
          thumb: [
            require('../assets/images/avatar1.jpg'),
            require('../assets/images/avatar1.jpg')
          ],
          time: '30 秒前',
          device: 'iPhone 11 Pro',
          desc: '这大爷可是老演员了……',
          active: {
            like: 333,
            comment: 12,
            forward: 555
          }
        },
        {
          id: 0,
          user: {
            name: '大慧慧',
            avatar: require('../assets/images/avatar3.jpg')
          },
          thumb: [
            require('../assets/images/avatar.jpg'),
            require('../assets/images/avatar1.jpg'),
            require('../assets/images/avatar2.jpg'),
            require('../assets/images/avatar3.jpg'),
          ],
          time: '一个月前',
          device: 'iPhone 8 Plus',
          desc: '别的不说，我觉得，我的滑板鞋前奏，伴奏，确实好听',
          active: {
            like: 333,
            comment: 12,
            forward: 555
          }
        },
        {
          id: 0,
          user: {
            name: '大慧慧',
            avatar: require('../assets/images/avatar3.jpg')
          },
          thumb: [
            require('../assets/images/avatar1.jpg'),
            require('../assets/images/avatar4.jpeg')
          ],
          time: '上周',
          device: 'iPhone 8 Plus',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          active: {
            like: 333,
            comment: 12,
            forward: 555
          }
        },
        {
          id: 0,
          user: {
            name: '小慧',
            avatar: require('../assets/images/avatar1.jpg')
          },
          time: '刚刚',
          device: 'iPhone 8 Plus',
          desc: '牛逼666',
          active: {
            like: 333,
            comment: 12,
            forward: 555
          }
        },
        {
          id: 0,
          user: {
            name: '小慧',
            avatar: require('../assets/images/avatar.jpg')
          },
          time: '刚刚',
          device: 'iPhone 8 Plus',
          desc: '上次看到挺喜欢的一个医生视频，说这个地方毛细血管特别多，很复杂怕什么感染之类的，后果还特别严重！自打那以后，刮胡子这块地方我都特别小心，有痘痘也不敢挤了。以前是随便喇，不可能给他它长痘的机会。',
          active: {
            like: 333,
            comment: 12,
            forward: 555
          }
        }
      ],
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
          title: '休闲中心',
          path: '/form',
          icon: require('../assets/images/Home/talk.png'),
          subtitle: ''
        },
        {
          id: 0,
          title: '考题复习',
          path: '/review',
          icon: require('../assets/images/Home/notebook.png'),
          subtitle: ''
        },
        // {
        //   id: 0,
        //   title: '会员中心',
        //   icon: require('../assets/images/Home/userinfo.png'),
        //   subtitle: ''
        // }
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
      /**
       * 组件封装用户点赞
       * */
      onLike: function (id) {
          window.console.log('on like', id)
      },
      /**
       * 组件封装用户评论
       * */
      onComment: function (id) {
          window.console.log('on comment', id)
      },
      /**
       * 组件封装用户转发
       * */
      onForward: function (id) {
          window.console.log('on forward', id)
      }
  },
  mounted () {
  }
}

</script>
