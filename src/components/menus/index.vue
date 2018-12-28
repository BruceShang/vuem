/*
 * @Desc: 底部菜单 
 * @Author: shangzhen 
 * @Date: 2018-08-09 19:00:24 
 * @Last Modified by: Yushuizeng
 * @Last Modified time: 2018-11-27 22:52:41
 */
<template>
  <div class="menus">
    <div class="menus__wrap menus__fixed">
      <router-link tag="p" 
        class="menus__item" 
        v-for="(item, index) in menus" 
        :key="index"
        :to="{ name: item.routeName }">
       <p class="menus__icons" @click="goVip(myInfo.ifBillVip)" :class="{ 'menus__current': active === index}" v-if="index === 2">
         <!-- <em v-if="true" :style="styles"></em> -->
         <span class="menus__home">
           <img src="../../assets/images/home-iconed.png" alt="" v-if="active===2">
           <img src="~assets/images/home-icon.png" alt="" >
         </span>
         <!-- <i :class="`we-icon we-icon--${item.icon}`"></i> -->
       </p>
       <p class="menus__icons" :class="{ 'menus__current': active === index}" v-else-if="index === 4">
         <i :class="`we-icon we-icon--${item.icon}`">
           <span v-if="$store.state.global.myInfo.ifBillVip>0">
              <em v-show="myInfo && (!myInfo.signature || !myInfo.address || !myInfo.ifTags)" :style="styles"></em>
           </span>
         </i>
       </p>
       <p class="menus__icons" :class="{ 'menus__current': active === index}" v-else>
         <i :class="`we-icon we-icon--${item.icon}`">
           <em v-if="index===3 && (shoppingCartNum>0 || shoppingCartNum === '99+') " class="menus__cart-num">{{shoppingCartNum}}</em>
         </i>
       </p>
       <span class="menus__txt" :class="{ 'menus__current': active === index}">{{ item.name }}</span>
        <!-- <em v-if="index===3 && shoppingCartNum>0" class="menus__cart-num">{{shoppingCartNum}}</em> -->
      </router-link>
    </div>
  </div>
</template>

<script>
import CallApp from 'mixins/call-app'
// import Cookie from 'utils/cookie'

export default {
  mixins: [CallApp],
  data() {
    return {
      shoppingCartNum: 0,
      menus: [
        {
          name: '首页',
          icon: 'menu-index',
          routeName: 'index',
        },
        {
          name: '发现',
          icon: 'menu-find',
          routeName: 'weexLibrary',
        },
        {
          name: '',
          icon: 'menu-street',
          routeName: this.$store.state.global.myInfo.ifBillVip > 1 ? '' : 'weexHome',
        },
        {
          name: '购物车',
          icon: 'menu-shopping',
          routeName: 'carShop',
        },
        {
          name: '我的',
          icon: 'menu-my',
          routeName: 'my-center',
        },
      ],
      styles: {
        position: 'absolute',
        top: '0.05rem',
        right: '0.01rem',
        width: '10px',
        height: '10px',
        'border-radius': '50%',
        'background-color': '#EB4D3D',
      },
      active: null,
      shareMyShop: false,
    }
  },
  computed: {
    /**
     * 动态更新当前菜单
     * @return {number} null - 当前菜单的索引值
     */
    // active() {
    //   return this.$store.state.global.currentMenus || 0
    // },
    myInfo() {
      return this.$store.state.global.myInfo
    },
  },
  mounted() {
    const route = this.$route
    // 分享出来的店铺不对购物车接口请求
    // if (route.name !== 'shareMyShop') {
    setTimeout(() => {
      this.fetchShoppingNum()
    }, 300)
    // }
    this.currentMenus(route.name)
  },
  methods: {
    /**
     * 玩主跳转app
     * @param {number} num --用户标识
     */
    goVip(num) {
      if (num > 1) {
        const options = {
          title: '请前往app查看玩主主页哦～',
          default: '我再想想',
          primary: '前往app',
        }
        this.$dialog(' ', options).then((action) => {
          if (action === 'primary') {
            this.h5CallApp({
              shareType: 'h5',
            })
          }
        })
      }
    },
    /**
     * 根据路由信息判断菜单
     * @param {string} route - 当前路由
     */
    currentMenus(route) {
      switch (route) {
        case 'index':
        case 'beauty-guard':
        case 'shareMyShop':
          this.active = 0
          break
        case 'weexLibrary':
          this.active = 1
          break
        case 'weexHome':
          this.active = 2
          break
        case 'carShop':
          this.active = 3
          break
        case 'my-center':
          this.active = 4
          break
        default:
      }
    },
    /**
     * 获取购物车数量
     * param {number} param --yonghushenfen
     */
    fetchShoppingNum() {
      // 如果未登录不请求购物车信息
      // const param = this.$store.state.global.myInfo.ifBillVip
      // if (param < 0 || !Cookie.getCookie('SDSESSIONID')) return
      this.$http(`${this.$apis.shoppingCart.list}?login=nologin`).then(res => {
        if (res.success) {
          if (res.result > 99) {
            this.shoppingCartNum = '99+'
          } else {
            this.shoppingCartNum = res.result
          }
        } else {
          this.$toast(res.message || '获取购物车数量失败')
        }
      }).catch(err => {
        if (err.code !== 401) {
          this.$toast(err.data.message || '获取购物车数量失败')
        }
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variables.styl';
.menus {
  min-height: 130px;
  width: 100%;
  background: #f6f6f6;
  &__cart-num{
    position absolute;
    top:0;
    right -10px;
    border-radius 50%;
    background #EB4D3D;
    color:#fff;
    min-width 30px;
    height:30px;
    line-height 33px;
    font-size 20px;
  }
  &__wrap {
    display: flex;
    width: 100%;
    height: 130px;
    padding-top: 20px;
    text-align: center;
    background: #f6f6f6;
    color: #b5b5b5;
    font-weight: 500;
    align-items: center;
    justify-content: center;
  }

  &__fixed {
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: $z-index-topbar;   
  }
  &__home {
    // position: absolute;
    width: 100px;
    height: 100px;
    margin-top: -10px;
    // top: -10px;
    line-height: 100px;
    text-align: center;
    // border-radius: 100%;
    // background-color: #f65c5f;
    img {
      width: 100px;
      height: 90px;
      margin-top: 19px;
      margin-left: 6px;
    }  
  }
  &__item {
    flex: 1;  
    position: relative;
    height: 130px;

    span {
      display: inline-block;
      // border: 1px red solid;
      // position: absolute;
      // left: 50%;
      // bottom: 15px;
      // transform: translateX(-50%);
    }
  }
  &__txt {
    white-space: nowrap;
  }

  &__icons {
    i {
      position: relative;
      font-size: 60px;
      line-height: 1.2;
      color: #C8C8C8;
    }
    // em {
    //   position: absolute;
    //   top: 5px;
    //   right: 50px;
    //   width: 20px;
    //   height: 20px;
    //   border-radius: 50%;
    //   background-color: $color-accent;
    // }
  }
  @keyframes scaleAnimation {
    0% {
       transform: scale(1, 1);
    }  
    50% {
       transform: scale(0.8);
    }  
    100% {
       transform: scale(1, 1);
    }  
  }
  &__current {
    color: $dark;
    animation: scaleAnimation 0.5s ease;
    i {
      color: $dark;
    }  
  }
}
</style>