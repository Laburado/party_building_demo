// 颜色16进制转rgba颜色
// @param hex 十六进制颜色
// @param opacity 透明度
// raba(255,255,255,0.5)
// #ff ff ff
import { it } from 'element-plus/es/locale'
import eCharts from 'vue-echarts'
import * as echarts from 'echarts'
function hexToRgba(hex: string, opacity: number) {
	return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')'
}

function getCirclePoint(x0: number, y0: number, r: number, angle: number) {
	const x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
	const y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
	return {
		x: x1,
		y: y1
	}
}

// 多层圆环

export const setPieOption = (chartData: { name: string; value: number }[]) => {
	const pieData = chartData
	//第三个饼图的半径
	const radius = ['50%', '54%']
	//颜色系列
	const color = ['#37ffc9', '#ffe777', '#19d6ff', '#32a1ff', '#cccccc', '#ff1111']
	const color1: string[] = []
	const color2: string[] = []
	const color3: string[] = []
	color.forEach(item => {
		color1.push(item, 'transparent')
		color2.push(hexToRgba(item, 0.7), 'transparent')
		color3.push(hexToRgba(item, 0.4), 'transparent')
	})
	const pieDataList: any[] = []
	let sum = 0
	pieData.forEach(item => (sum += item.value))
	pieData.forEach(item => {
		pieDataList.push(item, {
			name: '',
			value: sum / 70,
			label: {
				show: false
			}
		})
	})
	// ['50%','54%']
	// ['54%','58%']
	// ['58%','62%']
	const radius2 = [Number(radius[1].split('%')[0]) + '%', Number(radius[1].split('%')[0]) + 4 + '%']
	const radius3 = [Number(radius[1].split('%')[0]) + 4 + '%', Number(radius[1].split('%')[0]) + 8 + '%']
	return {
		title: {
			text: 53,
			subtext: '党员数',
			x: 'center',
			y: '39.5%',
			itemGap: 5,
			textStyle: {
				color: '#fff',
				fontSize: 34,
				fontFamily: 'DS-DIGF'
			},
			subtextStyle: {
				color: '#42B9FE',
				fontSize: 12
			}
		},
		tooltip: {
			show: true,
			formatter: (params: { name: string; value: string; percent: string }) => {
				if (params.name !== '') {
					return params.name + ':' + params.value + '<br />' + '(' + params.percent + '%)'
				}
			}
		},
		series: [
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: radius3,
				// hoverAnimation: false,
				startAngle: 90,
				//选中模式
				selectedMode: 'single',
				selectedOffset: 0,
				itemStyle: {
					color: (params: { dataIndex: number }) => {
						console.log(params)
						return color1[params.dataIndex]
					}
				},
				label: {
					show: true,
					position: 'outside',
					color: '#fff',
					lineHeight: 20,
					formatter: (params: { name: string; percent: string }) => {
						return `${params.name}:\n${params.percent}%`
					}
				},
				//鼠标移入饼图hover效果
				emphasis: {
					scale: 0
				},
				data: pieDataList,
				z: 666
			},
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: radius2,
				// hoverAnimation: false,
				startAngle: 90,
				//选中模式
				selectedMode: 'single',
				selectedOffset: 0,
				itemStyle: {
					color: (params: { dataIndex: number }) => {
						console.log(params)
						return color2[params.dataIndex]
					}
				},
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				//鼠标移入饼图hover效果
				emphasis: {
					scale: 0
				},
				data: pieDataList,
				z: 666
			},
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: radius,
				hoverAnimation: false,
				startAngle: 90,
				//选中模式
				selectedMode: 'single',
				selectedOffset: 0,
				itemStyle: {
					color: (params: { dataIndex: number }) => {
						console.log(params)
						return color3[params.dataIndex]
					}
				},
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: pieDataList,
				z: 666
			}
		]
	}
}
export const setDashboardOptions = (angle: number) => {
	return {
		title: {
			text: '{valueStyle|' + '72' + '}{unitStyle|%',
			x: 'center',
			y: 'center',
			textStyle: {
				rich: {
					valueStyle: {
						color: '#42b9fe',
						fontSize: 34
					},
					unitStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		},
		series: [
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							//定位、形状相关的设置
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * 0.87,
							startAngle: (angle * Math.PI) / 180,
							endAngle: ((90 + angle) * Math.PI) / 180
						},
						style: {
							//样式相关的设置
							stroke: '#0cd3db',
							fill: 'transparent',
							lineWidth: 1.5
						},
						//不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							//定位、形状相关的设置
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * 0.87,
							startAngle: ((180 + angle) * Math.PI) / 180,
							endAngle: ((270 + angle) * Math.PI) / 180
						},
						style: {
							//样式相关的设置
							stroke: '#0cd3db',
							fill: 'transparent',
							lineWidth: 1.5
						},
						//不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							//定位、形状相关的设置
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * (0.87 + 0.05),
							startAngle: ((270 + angle) * Math.PI) / 180,
							endAngle: ((40 + angle) * Math.PI) / 180
						},
						style: {
							//样式相关的设置
							stroke: '#0cd3db',
							fill: 'transparent',
							lineWidth: 1.5
						},
						//不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							//定位、形状相关的设置
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * (0.87 + 0.05),
							startAngle: ((90 + angle) * Math.PI) / 180,
							endAngle: ((220 + angle) * Math.PI) / 180
						},
						style: {
							//样式相关的设置
							stroke: '#0cd3db',
							fill: 'transparent',
							lineWidth: 1.5
						},
						//不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					const x0 = api.getWidth() / 2
					const y0 = api.getHeight() / 2
					const r = (Math.min(api.getWidth(), api.getHeight()) / 2.2) * (0.87 + 0.05)
					const point = getCirclePoint(x0, y0, r, 90 - angle)
					return {
						type: 'circle',
						shape: {
							//定位、形状相关的设置
							cx: point.x,
							cy: point.y,
							r: 4
						},
						style: {
							//样式相关的设置
							stroke: '#0cd3db',
							fill: '#0cd3db'
						},
						//不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					const x0 = api.getWidth() / 2
					const y0 = api.getHeight() / 2
					const r = (Math.min(api.getWidth(), api.getHeight()) / 2.2) * (0.87 + 0.05)
					const point = getCirclePoint(x0, y0, r, 270 - angle)
					return {
						type: 'circle',
						shape: {
							//定位、形状相关的设置
							cx: point.x,
							cy: point.y,
							r: 4
						},
						style: {
							//样式相关的设置
							stroke: '#0cd3db',
							fill: '#0cd3db'
						},
						//不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'pie',
				radius: ['68%', '55%'],
				center: ['50%', '50%'],
				startAngle: 90,
				label: {
					position: 'center'
				},
				silent: true,
				z: 0,
				zlevel: 0,
				data: [
					{
						name: '',
						value: 72,
						label: {
							show: false
						},
						itemStyle: {
							color: {
								colorStops: [
									{
										offset: 0,
										color: '#4fadfd'
									},
									{
										offset: 1,
										color: '#28e8fa'
									}
								]
							}
						}
					},
					{
						name: '',
						value: 100,
						label: {
							show: false
						},
						itemStyle: {
							color: '#173164'
						}
					}
				]
			},
			{
				type: 'gauge',
				radius: '68%',
				center: ['50%', '50%'],
				startAngle: 0,
				endAngle: 360,
				splitNumber: 8,
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false
				},
				pointer: {
					show: false
				},
				splitLine: {
					length: 160,
					lineStyle: {
						width: 3,
						color: '#061740'
					}
				},
				axisLine: {
					lineStyle: {
						opacity: 0
					}
				},
				detail: {
					show: false
				},
				data: [
					{
						name: '',
						value: 0
					}
				]
			}
		]
	}
}
export const setBarOptions = (dataConfig: { xAxisData: number[]; legendData: string[]; seriesData: number[][] }) => {
	return {
		title: {
			text: '单位：万元',
			left: '1%',
			top: '10.8%',
			textStyle: {
				color: '#fff',
				fontSize: 14,
				align: 'center'
			}
		},
		xAxis: {
			type: 'category',
			data: dataConfig.xAxisData,
			axisTick: {
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#fff',
					width: 2
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16,
				margin: 10
			}
		},
		yAxis: {
			type: 'value',
			axisLine: {
				show: false
			},
			axisLabel: {
				show: true,
				color: '#fff'
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255,255,255,0.5)'
				}
			}
		},
		legend: {
			data: dataConfig.legendData,
			left: 100,
			top: 25,
			textStyle: {
				color: '#fff',
				fontSize: 14
			}
		},
		tooltip: {
			show: true
		},
		grid: {
			left: '15%',
			right: '10%',
			top: '25%',
			bottom: '20%'
		},
		series: [
			{
				type: 'bar',
				name: dataConfig.legendData[0],
				barWidth: 10,
				barCap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#43b9fe'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: dataConfig.seriesData[0]
			},
			{
				type: 'bar',
				name: dataConfig.legendData[2],
				barWidth: 10,
				barCap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#51ffc1'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: dataConfig.seriesData[1]
			},
			{
				name: '',
				type: 'bar',
				barWidth: 20,
				animationDuration: 2000,
				animationEasing: 'cubicInOut'
			},
			{
				type: 'bar',
				name: dataConfig.legendData[1],
				barWidth: 10,
				barCap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#f8af3c'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: dataConfig.seriesData[2]
			},
			{
				type: 'bar',
				name: dataConfig.legendData[2],
				barWidth: 10,
				barCap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#51ffc1'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: dataConfig.seriesData[3]
			}
		]
	}
}
//党组织活动
export const setLineOptions = (dataConfig: { seriesData: number[][] }) => {
	return {
		tooltip: {
			show: true
		},
		color: ['#43b9fe', '#51ffc1'],
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['2月', '4月', '6月', '8月', '10月', '12月'],
			axisTick: {
				show: true,
				alignWithLabel: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#fff',
					width: 2
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16,
				margin: 10
			}
		},
		yAxis: [
			{
				type: 'value',
				name: 'A',
				position: 'left',
				axisLine: {
					show: false
				},
				axisLabel: {
					show: true,
					color: '#fff'
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'rgba(255,255,255,0.5)'
					}
				}
			},
			{
				type: 'value',
				name: 'B',
				position: 'right',
				axisLine: {
					show: false
				},
				axisLabel: {
					show: true,
					color: '#fff'
				},
				splitLine: {
					show: false,
					lineStyle: {
						color: 'rgba(255,255,255,0.5)'
					}
				}
			}
		],
		legend: {
			data: ['活动次数', '党员参与率'],
			right: 38,
			top: 25,
			itemHeight: 3,
			itemWidth: 12,
			itemStyle: {
				borderWidth: 1,
				borderColor: '#fff'
			},
			icon: 'roundRect',
			textStyle: {
				color: '#fff',
				fontSize: 14
			}
		},
		series: [
			{
				name: '活动次数',
				yAxisIndex: 0,
				type: 'line',
				areaStyle: {
					opacity: 0.8,
					color: {
						type: 'linear ',
						x: 0,
						y: 0.5,
						x2: 0,
						y2: 0.9,
						colorStops: [
							{
								offset: 0,
								color: 'rgba(67,185,254,1)'
							},
							{
								offset: 1,
								color: 'rgba(67,185,254, 0)'
							}
						],
						global: false
					}
				},
				data: dataConfig.seriesData[0]
			},
			{
				name: '党员参与率',
				yAxisIndex: 1,
				type: 'line',
				areaStyle: {
					opacity: 0.8,
					color: {
						type: 'linear ',
						x: 0,
						y: 0.5,
						x2: 0,
						y2: 0.9,
						colorStops: [
							{
								offset: 0,
								color: 'rgba(81,255,193,1)'
							},
							{
								offset: 1,
								color: 'rgba(81,255,193, 0)'
							}
						],
						global: false
					}
				},
				data: dataConfig.seriesData[1]
			}
		]
	}
}
export const setBarOptions1 = (dataConfig: { seriesData: number }) => {
	return {
		grid: {
			left: '3%',
			right: '10%',
			bottom: '35%',
			top: '85%',
			containLabel: true
		},
		xAxis: {
			show: false,
			type: 'value'
		},
		yAxis: [
			{
				type: 'category',
				inverse: true,
				axisLabel: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				}
			}
		],
		series: [
			{
				name: '得分',
				type: 'bar',
				zlevel: 1,
				itemStyle: {
					normal: {
						barBorderRadius: 30,
						color: '#34a6e7'
					}
				},
				barWidth: 20,
				data: [dataConfig.seriesData]
			},
			{
				name: '总分',
				type: 'bar',
				barWidth: 20,
				barGap: '-100%',
				data: [100],
				itemStyle: {
					normal: {
						color: 'rgba(155, 255, 255,0)',
						barBorderRadius: 30
					}
				}
			}
		]
	}
}
export const setBarOptions2 = (dataConfig: { seriesData: number }) => {
	return {
		grid: {
			left: '3%',
			right: '10%',
			bottom: '35%',
			top: '85%',
			containLabel: true
		},
		xAxis: {
			show: false,
			type: 'value'
		},
		yAxis: [
			{
				type: 'category',
				inverse: true,
				axisLabel: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				}
			}
		],
		series: [
			{
				name: '得分',
				type: 'bar',
				zlevel: 1,
				itemStyle: {
					normal: {
						barBorderRadius: 30,
						color: '#34a6e7'
					}
				},
				barWidth: 20,
				data: [dataConfig.seriesData]
			},
			{
				name: '总分',
				type: 'bar',
				barWidth: 20,
				barGap: '-100%',
				data: [100],
				itemStyle: {
					normal: {
						color: 'rgba(155, 255, 255,0)',
						barBorderRadius: 30
					}
				}
			}
		]
	}
}
export const setBarOptions3 = (dataConfig: { seriesData: number }) => {
	return {
		grid: {
			left: '3%',
			right: '10%',
			bottom: '35%',
			top: '85%',
			containLabel: true
		},
		xAxis: {
			show: false,
			type: 'value'
		},
		yAxis: [
			{
				type: 'category',
				inverse: true,
				axisLabel: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				}
			}
		],
		series: [
			{
				name: '得分',
				type: 'bar',
				zlevel: 1,
				itemStyle: {
					normal: {
						barBorderRadius: 30,
						color: '#34a6e7'
					}
				},
				barWidth: 20,
				data: [dataConfig.seriesData]
			},
			{
				name: '总分',
				type: 'bar',
				barWidth: 20,
				barGap: '-100%',
				data: [100],
				itemStyle: {
					normal: {
						color: 'rgba(155, 255, 255,0)',
						barBorderRadius: 30
					}
				}
			}
		]
	}
}
export const setBarOptions4 = (dataConfig: { seriesData: number }) => {
	return {
		grid: {
			left: '3%',
			right: '10%',
			bottom: '35%',
			top: '85%',
			containLabel: true
		},
		xAxis: {
			show: false,
			type: 'value'
		},
		yAxis: [
			{
				type: 'category',
				inverse: true,
				axisLabel: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				}
			}
		],
		series: [
			{
				name: '得分',
				type: 'bar',
				zlevel: 1,
				itemStyle: {
					normal: {
						barBorderRadius: 30,
						color: '#34a6e7'
					}
				},
				barWidth: 20,
				data: [dataConfig.seriesData]
			},
			{
				name: '总分',
				type: 'bar',
				barWidth: 20,
				barGap: '-100%',
				data: [100],
				itemStyle: {
					normal: {
						color: 'rgba(155, 255, 255,0)',
						barBorderRadius: 30
					}
				}
			}
		]
	}
}
export const setLxBarOptions = (dataConfig: { seriesData: number }) => {
	return {
		grid: {
			left: '5%',
			right: '5%',
			bottom: '80%',
			containLabel: true
		},
		xAxis: {
			show: false,
			type: 'value'
		},
		yAxis: [
			{
				type: 'category',
				inverse: true,
				axisLabel: {
					show: true,
					textStyle: {
						fontSize: 16,
						color: '#fff'
					}
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				data: ['群众满意率']
			},
			{
				type: 'category',
				inverse: true,
				axisTick: 'none',
				axisLine: 'none',
				show: true,
				axisLabel: {
					textStyle: {
						color: '#ffffff',
						fontSize: '12'
					}
				},
				data: [100]
			}
		],
		series: [
			{
				name: '金额',
				type: 'bar',
				label: {
					show: true,
					position: 'insideRight',
					color: '#000'
				},
				zlevel: 1,
				itemStyle: {
					normal: {
						barBorderRadius: 30,
						color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
							{
								offset: 0,
								color: 'rgb(0,228,255,1)'
							},
							{
								offset: 1,
								color: 'rgb(4243,167,45,1)'
							}
						])
					}
				},
				barWidth: 20,
				data: [dataConfig.seriesData]
			},
			{
				name: '背景',
				type: 'bar',
				barWidth: 20,
				barGap: '-100%',
				data: [100],
				itemStyle: {
					normal: {
						color: new echarts.graphic.RadialGradient(0.9, 0.5, 3, [
							{
								offset: 0,
								color: 'rgba(26,117,185,1)'
							},
							{
								offset: 1,
								color: 'rgba(26,117,185,0.2)'
							}
						]),
						barBorderRadius: 30
					}
				}
			}
		]
	}
}
