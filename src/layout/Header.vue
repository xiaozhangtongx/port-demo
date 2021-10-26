<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-26 09:34:46
-->
<template>
  <div>
    <header class="header">
      <div class="header-left">
        <ul>
          <li v-for="item in nav_left" :key="item.title" :class="item.liclass">
            <i :class="item.class"></i><a :href="item.router">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <div class="header-center">
        <h2><strong>船舶进出港一体化智能监管平台</strong></h2>
      </div>
      <div class="header-right">
        <ul>
          <li v-for="item in nav_right" :key="item.title">
            <i :class="item.class"></i><a :href="item.router">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      nav_left: [
        {
          title: '数据概要',
          router: '/home',
          class: 'nav_1 ',
          liclass: 'nav_active',
        },
        {
          title: '地图界面',
          router: '/map',
          class: 'nav_3',
        },
        {
          title: '航道监控',
          router: '/ship',
          class: 'nav_2',
        },
      ],
      nav_right: [
        {
          title: '拖轮调度',
          router: '/tuolun',
          class: 'nav_4 ',
        },
        {
          title: '锚地检测',
          router: '/maodi',
          class: 'nav_5',
        },
        {
          title: '查询统计',
          router: '/data',
          class: 'nav_6',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped lang='less'>
.header {
  width: 100%;
  background-color: #030829;
  height: 10vh;
  display: flex;
  .header-left,
  .header-right {
    width: 35%;
    display: flex;
    ul {
      height: 100%;
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      li {
        width: 120px;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        margin-left: 8px;
        color: #ffffff;
        i {
          width: 18px;
          height: 18px;
          display: inline-block;
          position: relative;
          top: 3px;
          margin-right: 5px;
        }
        a {
          color: #ffffff;
          font-size: 14px;
        }
        &:hover {
          box-shadow: -10px 0px 15px #034c6a inset, 0px -10px 15px #034c6a inset,
            10px 0px 15px #034c6a inset, 0px 10px 15px #034c6a inset;
        }
      }
    }
  }

  .header-right {
    justify-content: flex-end;
    ul {
      justify-content: flex-end;
    }
  }

  .header-center {
    width: 30%;
    margin: 0px auto;
    text-align: center;
    height: 10vh;
    background-image: url('../assets/images/header/logoBg.png');
    background-size: 100% 100%;
    h2 {
      color: #ffffff;
      line-height: 10vh;
      font-size: 22px;
    }
  }
}

.nav_1 {
  background-image: url('../assets/images/header/shouye.png');
}
.nav_2 {
  background-image: url('../assets/images/header/yujing.png');
}
.nav_3 {
  background-image: url('../assets/images/header/ditu.png');
}
.nav_4 {
  background-image: url('../assets/images/header/hujiaotiaodu.png');
}
.nav_5 {
  background-image: url('../assets/images/header/gaojingpandushezhi.png');
}
.nav_6 {
  background-image: url('../assets/images/header/shujutongji.png');
}

.nav_active {
  border-bottom: 4px solid #4b8df8;
  box-shadow: -10px 0px 15px #034c6a inset, 0px -10px 15px #034c6a inset,
    10px 0px 15px #034c6a inset, 0px 10px 15px #034c6a inset;
  box-sizing: border-box;
}
</style>