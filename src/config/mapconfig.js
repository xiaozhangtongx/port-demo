/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-28 08:56:38
 */

import TileLayer from 'ol/layer/Tile'
import TileArcGISRest from 'ol/source/TileArcGISRest'
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'
import {
  defaults,
  FullScreen,
  ScaleLine,
  MousePosition,
  // OverviewMap,
} from 'ol/control'
import { createStringXY } from 'ol/coordinate'

let maptype = 0 //0表示部署的海图，1表示OSM,2表示使用Arcgis在线午夜蓝地图服务

var streetmap = function() {
  var maplayer = null
  switch (maptype) {
    case 0:
      maplayer = new TileLayer({
        source: new XYZ({
          url: 'http://m12.shipxy.com/tile.c?l=Na&m=o&y={y}&x={x}&z={z}',
        }),
      })
      break
    case 1:
      maplayer = new TileLayer({
        source: new OSM(),
      })
      break
    case 2:
      maplayer = new TileLayer({
        source: new TileArcGISRest({
          url:
            'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer',
        }),
      })
      break
    case 3:
      maplayer = new TileLayer({
        source: new XYZ({
          url:
            'http://webrd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8',
        }),
      })
      break
  }
  return [maplayer]
}

var controls = defaults().extend([
  new FullScreen(), // 全屏
  new MousePosition({
    className: 'mosuePosition',
    //投影坐标格式，显示小数点后边多少位
    coordinateFormat: createStringXY(3),
    //指定投影
    projection: 'EPSG:4326',
  }), // 显示鼠标当前位置的经纬度
  new ScaleLine(), // 显示比例尺
  // new OverviewMap(),
])
var mapconfig = {
  x: 117.947, //中心点经度和纬度
  y: 38.75,
  zoom: 12, //地图缩放级别
  streetmap: streetmap,
  controls: controls,
}

export default mapconfig
