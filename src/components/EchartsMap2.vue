<template>
	<div id="container" ref="container"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import mapJson from './map.json'
import { onMounted, ref } from 'vue'
import map1 from '@/assets/images2/map6.png'
import map2 from '@/assets/images2/map7.png'
import map3 from '@/assets/images2/map8.png'
import icon1 from '@/assets/images2/01.png'
import icon2 from '@/assets/images2/02.png'
import icon3 from '@/assets/images2/03.png'
import bicon1 from '@/assets/images2/icon1.png'
import bicon2 from '@/assets/images2/icon2.png'
import bicon3 from '@/assets/images2/icon3.png'
import border from '@/assets/images2/border1.png'
import { GeoJSONSourceInput } from 'echarts/types/src/coord/geo/geoTypes'
import { Bar, Region, Scatter } from '@/entity/map'

type EchartsType = echarts.EChartsType
//map容器
const container = ref<HTMLElement>()
let myCharts: EchartsType | null = null
let regionData: Region[] = []
const images = [map1, map2, map3]
let scatterData: Scatter[] = []
const iconImg = ['image://' + icon1, 'image://' + icon2, 'image://' + icon3]
const effectScatterColor = [
	new echarts.graphic.LinearGradient(1, 0, 0, 0, [
		{
			offset: 0,
			color: 'rgba(108,234,240,1)'
		},
		{
			offset: 1,
			color: 'rgba(108,234,240,0.3)'
		}
	]),
	new echarts.graphic.LinearGradient(1, 0, 0, 0, [
		{
			offset: 0,
			color: 'rgba(254,255,144,1)'
		},
		{
			offset: 1,
			color: 'rgba(254,255,144,0.3)'
		}
	]),
	new echarts.graphic.LinearGradient(1, 0, 0, 0, [
		{
			offset: 0,
			color: 'rgba(219,0,0,1)'
		},
		{
			offset: 1,
			color: 'rgba(219,0,0,0.5)'
		}
	])
]
const barColor = [
	new echarts.graphic.LinearGradient(0, 0, 0, 1, [
		{
			offset: 0,
			color: 'rgba(7,30,59,0.1)'
		},
		{
			offset: 1,
			color: 'rgba(24,255,245,1)'
		}
	]),
	new echarts.graphic.LinearGradient(0, 0, 0, 1, [
		{
			offset: 0,
			color: 'rgba(7,30,59,0.1)'
		},
		{
			offset: 1,
			color: 'rgba(254,255,144,1)'
		}
	]),
	new echarts.graphic.LinearGradient(0, 0, 0, 1, [
		{
			offset: 0,
			color: 'rgba(7,30,59,0.1)'
		},
		{
			offset: 1,
			color: 'rgba(219,0,0,1)'
		}
	])
]
const barData: Bar[] = []
const dataMap = new Map()
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
		echarts.registerMap('jiaxing', mapJson.data as GeoJSONSourceInput)
		//隐藏加载动画效果
		myCharts.hideLoading()
		//初始化数据
		setOptions()
		//echarts地图适配
		window.addEventListener('resize', handleResize)
	}
}
const setOptions = () => {
	if (mapJson) {
		mapJson.data.features.forEach(item => {
			const { name, gridLevel, CENTERX, CENTERY, partyMemberNumber, registeredPopulationNumber } = item.properties
			barData.push({
				name: name,
				value: partyMemberNumber,
				gridLevel: gridLevel
			})
			dataMap.set(name, [CENTERX, CENTERY])
			scatterData.push({
				name: name,
				value: [CENTERX, CENTERY],
				gridLevel: gridLevel,
				partyMemberNumber: partyMemberNumber,
				registeredPopulationNumber: registeredPopulationNumber,
				img: iconImg[gridLevel - 1]
			})
			console.log(scatterData)
			regionData.push({
				name: name,
				gridLevel: gridLevel,
				itemStyle: {
					areaColor: {
						image: images[gridLevel - 1],
						repeat: 'repeat'
					},
					borderColor: '#3de0fa',
					borderWidth: 2
				}
			})
		})
	}
	const options = {
		legend: {
			left: '40%',
			bottom: '40%',
			itemHeight: 40,
			itemWidth: 30,
			itemGap: 0,
			orient: 'vertical',
			data: [
				{
					name: '优秀',
					textStyle: {
						fontSize: 18,
						color: '#fff',
						padding: [0, 0, 0, 10]
					},
					icon: 'image://' + bicon1
				},
				{
					name: '平稳',
					textStyle: {
						fontSize: 18,
						color: '#fff',
						padding: [0, 0, 0, 10]
					},
					icon: 'image://' + bicon2
				},
				{
					name: '较差',
					textStyle: {
						fontSize: 18,
						color: '#fff',
						padding: [0, 0, 0, 10]
					},
					icon: 'image://' + bicon3
				}
			]
		},
		geo: [
			{
				map: 'jiaxing',
				aspectScale: 0.75,
				layoutCenter: ['50%', '40%'],
				// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
				layoutSize: '55%',
				itemStyle: {
					borderColor: 'rgba(25,50,86,0.5)',
					borderWidth: 5,
					areaColor: 'rgba(36,78,125,1)'
				},
				emphasis: {
					disabled: true
				},
				z: 1
			},
			{
				map: 'jiaxing',
				aspectScale: 0.75,
				layoutCenter: ['49.6%', '39.6%'],
				// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
				layoutSize: '55%',
				itemStyle: {
					borderColor: 'rgba(25,50,86,0.5)',
					borderWidth: 5,
					areaColor: 'rgba(36,78,125,1)'
				},
				emphasis: {
					disabled: true
				},
				z: 2
			},
			{
				map: 'jiaxing',
				aspectScale: 0.75,
				layoutCenter: ['49.2%', '39.2%'],
				// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
				layoutSize: '55%',
				itemStyle: {
					borderColor: 'rgba(25,50,86,0.5)',
					borderWidth: 5,
					areaColor: 'rgba(36,78,125,1)'
				},
				emphasis: {
					disabled: true
				},
				z: 3
			},
			{
				map: 'jiaxing',
				aspectScale: 0.75,
				layoutCenter: ['48.8%', '38.8%'],
				// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
				layoutSize: '55%',
				regions: regionData,
				itemStyle: {
					shadowColor: '#4ABCFF',
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					areaColor: {
						type: 'radial',
						x: 0.6,
						y: 0.6,
						r: 1.5,
						colorStops: [
							{
								offset: 0,
								color: 'rgba(60,194,246,0)'
							},
							{
								offset: 1,
								color: 'rgba(60,194,246,1)'
							}
						]
					}
				},
				emphasis: {
					disabled: true
				},
				z: 4
			},
			{
				map: 'jiaxing',
				aspectScale: 0.75,
				layoutCenter: ['48.8%', '38.8%'],
				layoutSize: '55%',
				label: {
					show: true,
					color: '#fff',
					fontSize: 20
				},
				itemStyle: {
					borderColor: 'none',
					areaColor: {
						type: 'radial',
						x: 0.6,
						y: 0.6,
						r: 1.5,
						colorStops: [
							{
								offset: 0,
								color: 'rgba(60,194,246,0)'
							},
							{
								offset: 1,
								color: 'rgba(60,194,246,1)'
							}
						]
					}
				},
				emphasis: {
					itemStyle: {
						areaColor: {
							type: 'radial',
							x: 0.6,
							y: 0.6,
							r: 1.5,
							colorStops: [
								{
									offset: 0,
									color: 'rgba(95,240,210,0)'
								},
								{
									offset: 1,
									color: 'rgba(95,240,210,1)'
								}
							]
						}
					},
					label: {
						color: '#fff'
					}
				},
				z: 5
			}
		],
		//lines 路径图 scatter散点图 effectScatter带有涟漪效果的散点图
		series: [
			//路径图
			{
				type: 'lines',
				lineStyle: {
					width: 7,
					color: (params: { data: { gridLevel: number } }) => {
						return barColor[params.data.gridLevel - 1]
					},
					opacity: 1,
					curveness: 0
				},
				silent: true,
				z: 9,
				data: getBarCoordData()
			},
			//飞线
			{
				type: 'lines',
				data: getLineData(),
				effect: {
					show: true,
					//箭头指向速度，值越小，速度越快
					period: 4,
					//尾迹
					trailLenght: 0.2,
					//箭头图标
					symbol: 'emptyCircle',
					symbolSize: 3
				},
				lineStyle: {
					width: 2,
					opacity: 1,
					color: (params: { data: { gridLevel: number } }) => {
						return effectScatterColor[params.data.gridLevel - 1]
					},
					type: 'dotted',
					curveness: 0.3
				},
				z: 9
			},
			//最下面标点
			{
				name: '优秀',
				type: 'scatter',
				coordinateSystem: 'geo',
				symbol: (value: string, params: { data: { img: string } }) => {
					console.log('scatter===========', value, params)
					return params.data.img
				},
				symbolSize: [36, 25],
				symbolOffset: [0, 0],
				data: scatterData,
				z: 6
			},
			{
				name: '平稳',
				type: 'scatter',
				coordinateSystem: 'geo',
				symbol: (value: string, params: { data: { img: string } }) => {
					console.log('scatter===========', value, params)
					return params.data.img
				},
				symbolSize: [36, 25],
				symbolOffset: [0, 0],
				data: scatterData,
				z: 6
			},
			{
				name: '较差',
				type: 'scatter',
				coordinateSystem: 'geo',
				symbol: (value: string, params: { data: { img: string } }) => {
					console.log('scatter===========', value, params)
					return params.data.img
				},
				symbolSize: [36, 25],
				symbolOffset: [0, 0],
				data: scatterData,
				z: 6
			},
			//信息框c
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				geoIndex: 1,
				label: {
					show: true,
					formatter: (params: { data: { partyMemberNumber: number; registeredPopulationNumber: number } }) => {
						return (
							'{a|' +
							'党员人数:' +
							params.data.partyMemberNumber +
							'}' +
							'\n' +
							'{a|' +
							'户籍人数:' +
							params.data.registeredPopulationNumber +
							'}'
						)
					},
					rich: {
						a: {
							color: '#fff',
							fontSize: 16,
							lineHeight: 25
						}
					}
				},
				symbol: 'image://' + border,
				symbolSize: [180, 70],
				symbolOffset: [0, -80],
				data: scatterData,
				z: 9
			},
			//涟漪
			{
				type: 'effectScatter',
				coordinateSystem: 'geo',
				rippleEffect: {
					//最大缩放比例
					scale: 8,
					//绘制方式 stroke fill
					brushType: 'fill'
				},
				//配置何时显示特效
				//render emphasis
				showEffectOn: 'render',
				itemStyle: {
					color: (params: { data: { gridLevel: number } }) => {
						return effectScatterColor[params.data.gridLevel - 1]
					}
				},
				symbol: 'circle',
				symbolSize: [10, 5],
				symbolOffset: [0, 0],
				data: scatterData,
				z: 7
			}
		]
	}
	myCharts?.setOption(options)
}
const getBarCoordData = () => {
	console.log(barData, dataMap, dataMap.get('第一网格'))
	const result = []
	for (const [name, coords] of dataMap) {
		console.log(name, coords)
		const coordsNumber = coords.map(parseFloat)
		console.log('这里是我不懂的' + coordsNumber)
		result.push({
			coords: [[...coordsNumber], [coordsNumber[0], coordsNumber[1] + 0.01]],
			gridLevel: barData.filter(item => item.name === name)[0].gridLevel
		})
	}
	console.log(result)
	return result
}
const getLineData = () => {
	const result = []
	for (const [fromName, fromCoords] of dataMap) {
		for (const [toName, toCoords] of dataMap) {
			if (fromName !== toName) {
				result.push({
					fromName,
					toName,
					coords: [fromCoords, toCoords],
					gridLevel: barData.filter(item => item.name === fromName)[0].gridLevel
				})
			}
		}
	}
	console.log(result)
	return result
}
const handleResize = (option: any) => {
	myCharts?.setOption(option)
	myCharts?.resize()
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
