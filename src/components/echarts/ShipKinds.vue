<!--
 * @Description: 船舶种类
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-29 22:12:22
-->
<template>
  <div class="Echarts">
    <div ref="main1" id="main1"></div>
  </div>
</template>

<script>
export default {
  name: 'Echarts',
  methods: {
    myEcharts() {
      var myChart = this.$echarts.init(this.$refs.main1)

      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          textStyle: {
            color: '#ffffff',
          },
          data: ['邮轮', '渔船', '散货船', '集装箱船'],
        },

        calculable: false,
        series: [
          {
            name: '船舶类型',
            type: 'pie',
            radius: ['40%', '70%'],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
              emphasis: {
                label: {
                  show: true,
                  position: 'center',
                  textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold',
                  },
                },
              },
            },
            data: [
              { value: 335, name: '集装箱船' },
              { value: 310, name: '散货船' },
              { value: 234, name: '邮轮' },
              { value: 135, name: '渔船' },
            ],
          },
        ],
      }

      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
  },
  mounted() {
    this.myEcharts()
  },
}
</script>

<style lang="less" scoped>
#main1 {
  width: 100%;
  height: 30vh;
}
</style>