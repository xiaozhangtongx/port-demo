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
        legend: {
          data: ['车辆行驶数量'],
          textStyle: {
            color: '#ffffff',
          },
        },
        grid: { show: 'true', borderWidth: '0' },

        calculable: false,
        tooltip: {
          trigger: 'axis',
          formatter: 'Temperature : <br/>{b}km : {c}°C',
        },
        xAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#fff',
              },
            },

            splitLine: {
              lineStyle: {
                width: 0,
                type: 'solid',
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'category',
            axisLine: { onZero: false },
            axisLabel: {
              formatter: '{value} km',
              textStyle: {
                color: '#fff',
              },
            },
            splitLine: {
              lineStyle: {
                width: 0,
                type: 'solid',
              },
            },
            boundaryGap: false,
            data: ['0', '10', '20', '30', '40', '50', '60', '70', '80'],
          },
        ],
        series: [
          {
            name: '车辆行驶数量',
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  shadowColor: 'rgba(0,0,0,0.4)',
                },
              },
            },
            data: [15, 0, 20, 45, 22.1, 25, 70, 55, 76],
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