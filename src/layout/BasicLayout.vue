<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-26 09:25:38
-->
<template>
  <div class="main">
    <a-layout>
      <a-layout-header class="header">
        <Header />
      </a-layout-header>
      <a-layout-content class="main">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import Header from '@/layout/Header'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    Header,
  },
}
</script>

<style scoped lang='less'>
.main {
  height: 100vh;
  width: 100vw;
  .main {
    height: 90vh;
    background-color: #081832;
  }
  .ant-layout-header {
    background: #7d92b1;
    height: 10vh;
    padding: 0;
  }
}
</style>