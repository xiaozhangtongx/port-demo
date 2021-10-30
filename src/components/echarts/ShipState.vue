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
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: { show: 'true', borderWidth: '0' },
        legend: {
          data: ['行驶', '停车', '熄火', '离线'],
          textStyle: {
            color: '#ffffff',
          },
        },

        calculable: false,
        xAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff',
              },
            },
            splitLine: {
              lineStyle: {
                color: ['#f2f2f2'],
                width: 0,
                type: 'solid',
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'category',
            data: ['客运车', '危险品车', '网约车', '学生校车'],
            axisLabel: {
              show: true,
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
        series: [
          {
            name: '行驶',
            type: 'bar',
            stack: '总量',
            itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
            data: [320, 302, 301, 334],
          },
          {
            name: '停车',
            type: 'bar',
            stack: '总量',
            itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
            data: [120, 132, 101, 134],
          },
          {
            name: '熄火',
            type: 'bar',
            stack: '总量',
            itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
            data: [220, 182, 191, 234],
          },
          {
            name: '离线',
            type: 'bar',
            stack: '总量',
            itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
            data: [150, 212, 201, 154],
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