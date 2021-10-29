<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-26 09:16:12
-->
<template>
  <div>
    <!----------------------------------数据概要---------------------------------->
    <ConText />
    <!----------------------------------统计分析图---------------------------------->
    <div class="div_any">
      <div class="div_any01">

        <div class="div_any_child">
          <div class="div_any_title">
            <img src="../assets/img/title_1.png" />
            <router-link to="/data">船舶类型统计</router-link>
          </div>
          <p id="char1" class="p_chart"></p>
        </div>

        <div class="div_any_child">
          <div class="div_any_title">
            <img src="../assets/img/title_2.png" />
            <router-link to="/tuolun">拖轮状态统计</router-link>
          </div>
          <p id="char2" class="p_chart"></p>
        </div>
      </div>

      <div class="div_any02">
        <div class="div_any_child div_height">
          <div class="div_any_title any_title_width">
            <img src="../assets/img/title_3.png" />
            <router-link to="/map">港口地图</router-link>
          </div>
          <div id="map_div">
            <Map class="map" />
          </div>
        </div>
      </div>

      <div class="right div_any01">
        <div class="div_any_child">
          <div class="div_any_title">
            <img src="../assets/img/title_4.png" />
            <router-link to="/data">船舶航行统计</router-link>
          </div>

        </div>
        <div class="div_any_child">
          <Scroll class="scroll" />
          <div class="div_any_title">
            <img src="../assets/img/title_5.png" />
            <router-link to="/ship">安全报警统计</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConText from '@/components/home/ConText'
import vueSeamlessScroll from 'vue-seamless-scroll'
import Scroll from '@/components/home/Scroll'
import Map from '@/views/Map'
export default {
  name: 'Home',
  components: {
    Map,
    vueSeamlessScroll,
    Scroll,
    ConText,
  },
}
</script>

<style lang="less" scoped>
// 这些css样式是原来的html文档里面的太难改了，所以就不改了！！！！
.div_any {
  width: 100%;
  height: 72vh;
  display: flex;
  justify-content: space-evenly;
}
.div_any01 {
  width: 23%;
}
.div_any02 {
  width: 48%;
}
.div_any_child {
  width: 100%;
  height: 31vh;
  box-shadow: -10px 0px 15px #034c6a inset, 0px -10px 15px #034c6a inset,
    10px 0px 15px #034c6a inset, 0px 10px 15px #034c6a inset;
  border: 1px solid #034c6a;
  box-sizing: border-box;
  position: relative;
  margin-top: 25px;
}
.div_any_child01 {
  width: 48%;
  box-shadow: -10px 0px 15px #034c6a inset, 0px -10px 15px #034c6a inset,
    10px 0px 15px #034c6a inset, 0px 10px 15px #034c6a inset;
  border: 1px solid #034c6a;
  box-sizing: border-box;
  position: relative;
  margin-right: 2%;
}
.div_any_child01_wh {
  width: 98% !important;
}
.div_height01 {
  height: auto !important;
  padding: 5px;
}
.char_table {
  height: 200px;
}
.p_chart {
  padding: 5px 10px;

  margin-top: 15px;
}
#map_div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .map {
    width: 98%;
    height: 98%;
  }
}
.div_height {
  height: 65.4vh;
}
.div_any_title {
  background-color: #034c6a;
  border-radius: 18px;
  position: absolute;
  height: 35px;
  width: 60%;
  top: -15px;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  left: 20%;
  line-height: 35px;
  text-align: center;
  z-index: 1000;
}
.div_any_title img {
  width: 18px;
  height: 18px;
  position: relative;
  top: 2px;
  margin-right: 5px;
}
.any_title_width {
  width: 30% !important;
  left: 35% !important;
}
.scroll {
  width: 98%;
}
a {
  color: #ffffff;
}
</style>
