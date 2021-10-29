<!--
 * @Description: 数据概要
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-29 08:57:04
-->
<template>
  <div class="con_div">
    <div class="con_div_text ">
      <div class="con_div_text01 ">
        <img src="../../assets/img/info_1.png" class=" text01_img" />
        <div class="text01_div">
          <p>今日进港船舶总数(艘)</p>
          <p>12356</p>
        </div>
      </div>
      <div class="con_div_text01">
        <img src="../../assets/img/info_2.png" class=" text01_img" />
        <div class="text01_div">
          <p>今日出港船舶总数(艘)</p>
          <p>12356</p>
        </div>
      </div>
    </div>
    <div class="con_div_text ">
      <div class="con_div_text01 ">
        <img src="../../assets/img/info_4.png" class=" text01_img" />
        <div class=" text01_div">
          <p>在锚船舶总数(艘)</p>
          <p class="sky">12356</p>
        </div>
      </div>
      <div class="con_div_text01 ">
        <img src="../../assets/img/info_5.png" class=" text01_img" />
        <div class=" text01_div">
          <p>在泊船舶总数(艘)</p>
          <p class="sky">12356</p>
        </div>
      </div>
    </div>
    <div class="con_div_text ">
      <div class="con_div_text01 ">
        <img src="../../assets/img/info_6.png" class=" text01_img" />
        <div class=" text01_div">
          <p>工作拖轮总数(艘)</p>
          <p class="org">12356</p>
        </div>
      </div>
      <div class="con_div_text01 ">
        <img src="../../assets/img/info_7.png" class=" text01_img" />
        <div class="text01_div">
          <p>休闲拖轮总数(艘)</p>
          <p class="org">12356</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang='less'>
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
    width: 31.4%;
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
</style>