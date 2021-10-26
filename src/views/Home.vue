<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-26 09:16:12
-->
<template>
  <div class="con_div">
    <div class="con_div_text ">
      <div class="con_div_text01 ">
        <img src="../assets/../assets/img/info_1.png" class=" text01_img" />
        <div class=" text01_div">
          <p>车辆总数(辆)</p>
          <p>12356</p>
        </div>
      </div>
      <div class="con_div_text01 right">
        <img src="../assets/img/info_2.png" class=" text01_img" />
        <div class=" text01_div">
          <p>车辆使用数(辆)</p>
          <p>12356</p>
        </div>
      </div>
    </div>
    <div class="con_div_text ">
      <div class="con_div_text01 ">
        <img src="../assets/img/info_4.png" class=" text01_img" />
        <div class=" text01_div">
          <p>行驶里程总数(km)</p>
          <p class="sky">12356</p>
        </div>
      </div>
      <div class="con_div_text01 right">
        <img src="../assets/img/info_5.png" class=" text01_img" />
        <div class=" text01_div">
          <p>行驶里程平均数(km)</p>
          <p class="sky">12356</p>
        </div>
      </div>
    </div>
    <div class="con_div_text ">
      <div class="con_div_text01 ">
        <img src="../assets/img/info_6.png" class=" text01_img" />
        <div class=" text01_div">
          <p>行驶时长总数(s)</p>
          <p class="org">12356</p>
        </div>
      </div>
      <div class="con_div_text01 right">
        <img src="../assets/img/info_7.png" class=" text01_img" />
        <div class=" text01_div">
          <p>行驶ihfj平均数(s)</p>
          <p class="org">12356</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
}
</script>

<style lang="less" scoped>
.con_div {
  height: 12vh;
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
}
.con_div_text {
  display: flex;
  height: 100%;
  background-color: #034c6a;
  width: 30%;
}
.con_div_text01 {
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;
}
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
</style>
