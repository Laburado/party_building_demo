<template>
	<div id="container" ref="container"></div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import mapJson from './jiaxing1.json'
import { GeoJSONSourceInput } from 'echarts/types/src/coord/geo/geoTypes'
import border from '@/assets/images2/border1.png'
import { Scatter, Region, Scatter2 } from '@/entity/mapjx'
type EchartsType = echarts.EChartsType
import scatter1 from '@/assets/images/组 4(1).png'
import scatter2 from '@/assets/images/组 4(2).png'
import scatter3 from '@/assets/images/组 4(3).png'
import scatter2_1 from '@/assets/images/矩形 11(1).png'
import scatter2_2 from '@/assets/images/矩形 11(2).png'
import scatter2_3 from '@/assets/images/矩形 11(3).png'
const scatterImg = ['image://' + scatter1, 'image://' + scatter2, 'image://' + scatter3]
const scatterImg2 = ['image://' + scatter2_1, 'image://' + scatter2_2, 'image://' + scatter2_3]
let regionData: Region[] = []
//地图容器
const container = ref<HTMLImageElement>()
const GridColor: string[] = ['rgba(45,218,255,0.3)', 'rgba(45,218,255,1)', 'rgba(45,109,255,0.6)']
const dataMap = new Map()
let scatterData: Scatter[] = []
let scatterData2: Scatter2[] = []
let myCharts: EchartsType | null = null
onMounted(() => {
	initMap()
})
const initMap = () => {
	if (container.value) {
		//echarts初始化
		myCharts = echarts.init(container.value)
		//显示加载动画效果，可以在加载数据前手动调用
		myCharts.showLoading('default', {
			text: '统计中，请稍后...',
			maskColor: '#2957a2',
			textColor: '#fff'
		})
		//注册地图 geojson
		// echarts.registerMap('jiaxing', mapJson.data as GeoJSONSourceInput)
		echarts.registerMap('jiaxing', mapJson as GeoJSONSourceInput)
		//隐藏加载动画效果
		myCharts.hideLoading()
		//初始化数据
		setOptions()
		//echarts地图适配
		window.addEventListener('resize', handleResize)
	}
}
const handleResize = (option: any) => {
	myCharts?.setOption(option)
	myCharts?.resize()
}
const setOptions = () => {
	if (mapJson) {
		mapJson.features.forEach(item => {
			const { name, gridLevel, centericon, center, text } = item.properties
			dataMap.set(name, center)
			scatterData.push({
				name: name,
				value: [centericon[0], centericon[1] - 0.01],
				gridLevel: gridLevel,
				img: scatterImg[gridLevel - 1]
			})
			scatterData2.push({
				name: name,
				value: [centericon[0], centericon[1] + 0.03],
				girdLevel: gridLevel,
				text: text,
				// partyMemberNumber: partyMemberNumber,
				// registeredPopulationNumber: registeredPopulationNumber,
				img: scatterImg2[gridLevel - 1]
			})
			regionData.push({
				name: name,
				gridLevel: gridLevel,
				itemStyle: {
					areaColor: GridColor[gridLevel - 1]
				}
			})
		})
	}
	const options = {
		geo: [
			{
				map: 'jiaxing',
				aspectScale: 0.75,
				layoutCenter: ['53%', '50%'],
				regions: regionData,
				label: {
					show: true,
					color: '#fff',
					// offset: [-10, -10],
					fontSize: 12
				},
				// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
				layoutSize: '70%',
				itemStyle: {
					borderColor: '#000',
					borderWidth: 1,
					areaColor: 'rgba(45,218,255,0.3)'
				},
				emphasis: {
					itemStyle: {
						color: 'rgba(27, 68, 161, 0.7)'
					},
					label: {
						color: '#fff'
					}
				},
				z: 1
			}
		],
		series: [
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				symbol: (value: string, params: { data: { img: string } }) => {
					console.log('scatter===========', value, params)
					return params.data.img
				},
				symbolSize: [30, 35],
				symbolOffset: [0, 0],
				data: scatterData,
				z: 2
			},
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				label: {
					show: true,
					formatter: (params: { data: { text: string } }) => {
						return params.data.text
					},
					rich: {
						a: {
							color: '#fff',
							fontsize: 25,
							lineHeight: 25
						}
					}
				},
				symbol: (value: string, params: { data: { img: string } }) => {
					return params.data.img
				},
				symbolSize: [100, 50],
				symbolOffset: [0, 0],
				data: scatterData2,
				z: 3
			}
		]
	}
	myCharts?.setOption(options)
}
</script>
<style scoped lang="scss">
#container {
	width: 100%;
	height: 100%;
	//background-color: #11d290;
	position: absolute;
	z-index: 1;
}
</style>
