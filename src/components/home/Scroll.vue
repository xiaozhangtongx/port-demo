<template>
  <div>
    <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="defaultOption">
      <ul class="item">
        <li v-for="item in listData" :key="item.index">
          <span class="title" v-text="item.title"></span><span class="date"
            v-text="item.date"></span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        {
          title: '无缝滚动第一行无缝滚动第一行',
          date: '2017-12-16',
        },
        {
          title: '无缝滚动第二行无缝滚动第二行',
          date: '2017-12-16',
        },
        {
          title: '无缝滚动第三行无缝滚动第三行',
          date: '2017-12-16',
        },
        {
          title: '无缝滚动第四行无缝滚动第四行',
          date: '2017-12-16',
        },
        {
          title: '无缝滚动第五行无缝滚动第五行',
          date: '2017-12-16',
        },
        {
          title: '无缝滚动第六行无缝滚动第六行',
          date: '2017-12-16',
        },
        {
          title: '无缝滚动第七行无缝滚动第七行',
          date: '2017-12-16',
        },
        {
          title: '无缝滚动第八行无缝滚动第八行',
          date: '2017-12-16',
        },
        {
          title: '无缝滚动第九行无缝滚动第九行',
          date: '2017-12-16',
        },
      ],
    }
  },
  computed: {
    defaultOption() {
      return {
        step: 0.6, // 数值越大速度滚动越快
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
        limitMoveNum: this.listData.length, // 开始无缝滚动的数据量
      }
    },
  },
}
</script>
<style lang="less" scoped>
.seamless-warp {
  height: 31vh;
  // width: 36vh;
  overflow: hidden;
  li {
    width: 95%;
    display: flex;
    justify-content: space-around;
    height: 40px;
    span {
      font-size: 16px;
      color: aliceblue;
    }
  }
}
</style>