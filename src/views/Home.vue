<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-26 09:16:12
-->
<template>
  <div>
    <!-- 数据概要 -->
    <div class="con_div">
      <div class="con_div_text ">
        <div class="con_div_text01 ">
          <img src="../assets/img/info_1.png" class=" text01_img" />
          <div class="text01_div">
            <p>今日进港船舶总数(艘)</p>
            <p>12356</p>
          </div>
        </div>
        <div class="con_div_text01">
          <img src="../assets/img/info_2.png" class=" text01_img" />
          <div class="text01_div">
            <p>今日出港船舶总数(艘)</p>
            <p>12356</p>
          </div>
        </div>
      </div>
      <div class="con_div_text ">
        <div class="con_div_text01 ">
          <img src="../assets/img/info_4.png" class=" text01_img" />
          <div class=" text01_div">
            <p>在锚船舶总数(艘)</p>
            <p class="sky">12356</p>
          </div>
        </div>
        <div class="con_div_text01 ">
          <img src="../assets/img/info_5.png" class=" text01_img" />
          <div class=" text01_div">
            <p>在泊船舶总数(艘)</p>
            <p class="sky">12356</p>
          </div>
        </div>
      </div>
      <div class="con_div_text ">
        <div class="con_div_text01 ">
          <img src="../assets/img/info_6.png" class=" text01_img" />
          <div class=" text01_div">
            <p>工作拖轮总数(艘)</p>
            <p class="org">12356</p>
          </div>
        </div>
        <div class="con_div_text01 ">
          <img src="../assets/img/info_7.png" class=" text01_img" />
          <div class="text01_div">
            <p>休闲拖轮总数(艘)</p>
            <p class="org">12356</p>
          </div>
        </div>
      </div>
    </div>

    <!--统计分析图-->
    <div class="div_any">
      <div class="left div_any01">
        <div class="div_any_child">
          <div class="div_any_title">
            <img src="../assets/img/title_1.png" />车辆类型统计
          </div>
          <p id="char1" class="p_chart"></p>
        </div>
        <div class="div_any_child">
          <div class="div_any_title">
            <img src="../assets/img/title_2.png" />车辆状态统计
          </div>
          <p id="char2" class="p_chart"></p>
        </div>
      </div>
      <div class="div_any02 left">
        <div class="div_any_child div_height">
          <div class="div_any_title any_title_width">
            <img src="../assets/img/title_3.png" />车辆行驶地图
          </div>
          <div id="map_div">
            <Map />
          </div>
        </div>
      </div>
      <div class="right div_any01">
        <div class="div_any_child">
          <div class="div_any_title">
            <img src="../assets/img/title_4.png" />车辆行驶统计
          </div>
          <p id="char3" class="p_chart"></p>
        </div>
        <div class="div_any_child">
          <div class="div_any_title">
            <img src="../assets/img/title_5.png" />车辆报警统计
          </div>
          <p id="char4" class="p_chart"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/views/Map'
export default {
  name: 'Home',
  data() {
    return {
      port_data: [{}],
    }
  },
  components: {
    Map,
  },
}
</script>

<style lang="less" scoped>
.con_div {
  height: 14vh;
  display: flex;
  justify-content: space-evenly;
  margin: 2vh 0;
  .con_div_text {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    background-color: #034c6a;
    width: 30%;
    .con_div_text01 {
      display: flex;
      justify-content: space-evenly;
      width: 50%;
      height: 100%;
      .text01_img {
        width: 40px;
        height: 40px;
        margin-top: 35px;
      }
      .text01_div {
        margin-top: 15px;
        text-align: center;
      }
      .text01_div p {
        line-height: 35px;
        margin: 0;
      }
      .text01_div p:nth-child(1) {
        font-size: 13px;
        color: #ffffff;
      }
      .text01_div p:nth-child(2) {
        font-size: 28px;
        color: #ffff43;
        font-weight: 600;
      }

      .red {
        color: red !important;
      }
      .sky {
        color: #25f3e6 !important;
      }
      .org {
        color: #ff4e4e !important;
      }
    }
  }
}
.div_any {
  width: 98%;
  margin-left: 1%;
  margin-bottom: 25px;
  height: 72vh;
  display: flex;
}
.div_any01 {
  width: 23%;
  margin-right: 2%;
}
.div_any02 {
  width: 48%;
  margin-right: 2%;
}
.div_any03 {
  width: 98%;
  margin: 15px auto;
}
.div_any_child {
  width: 100%;
  height: 31vh;
  box-shadow: -10px 0px 15px #034c6a inset, /*å·¦è¾¹é˜´å½±*/ 0px -10px 15px #034c6a inset,
    /*ä¸Šè¾¹é˜´å½±*/ 10px 0px 15px #034c6a inset, /*å³è¾¹é˜´å½±*/ 0px 10px 15px #034c6a inset;
  border: 1px solid #034c6a;
  box-sizing: border-box;
  position: relative;
  margin-top: 25px;
}
.div_any_child01 {
  width: 48%;

  box-shadow: -10px 0px 15px #034c6a inset, /*å·¦è¾¹é˜´å½±*/ 0px -10px 15px #034c6a inset,
    /*ä¸Šè¾¹é˜´å½±*/ 10px 0px 15px #034c6a inset, /*å³è¾¹é˜´å½±*/ 0px 10px 15px #034c6a inset;
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
  // height: 250px;

  padding: 5px 10px;

  margin-top: 15px;
}
#map_div {
  width: 96%;
  height: 30vh;
  // margin: 4% auto;
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
</style>
