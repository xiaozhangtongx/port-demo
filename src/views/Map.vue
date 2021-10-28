<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-27 15:57:28
-->
<template>
  <div id="map" ref="rootmap">
  </div>
</template>
 
<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import mapconfig from '../config/mapconfig'
export default {
  data() {
    return {
      map: null,
    }
  },
  mounted() {
    var mapcontainer = this.$refs.rootmap
    mapconfig.maptype = 2
    this.map = new Map({
      target: mapcontainer,
      layers: mapconfig.streetmap(),
      view: new View({
        projection: 'EPSG:4326', //使用这个坐标系
        center: [mapconfig.x, mapconfig.y], //深圳
        zoom: mapconfig.zoom,
      }),
      controls: mapconfig.controls,
    })
  },
}
</script>
 
<style>
#map {
  height: 100%;
  position: relative;
}

.mosuePosition {
  position: absolute;
  bottom: 0;
  right: 0;
  color: blue;
  font-size: 12px;
  font-family: '微软雅黑';
}
</style>