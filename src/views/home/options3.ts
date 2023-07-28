export const setPieOption1 = () => {
	return {
		legend: {
			itemHeight: 4,
			itemGap: 14,
			icon: 'circle',
			orient: 'vertical',
			left: 18,
			top: 'center',
			textStyle: {
				fontSize: 12,
				color: '#fff',
				padding: [0, 0, 0, -10] // 修改文字和图标距离
			}
		},
		series: [
			{
				center: ['70%', '50%'],
				name: '大饼图',
				labelLine: {
					show: false
				},
				label: {
					show: false
				},
				startAngle: 60,
				type: 'pie',
				radius: '64%',
				data: [
					{ value: 105, name: '图例展示', itemStyle: { colorStart: '#488BFF', colorEnd: '#9abffd' } },
					{ value: 255, name: '图例展示 ', itemStyle: { colorStart: '#26CEBA', colorEnd: '#8efaed' } }
				]
			}
		]
	}
}
export const setPieOption2 = () => {
	return {
		legend: {
			itemHeight: 4,
			itemGap: 14,
			icon: 'circle',
			orient: 'vertical',
			right: 12,
			top: 'center',
			textStyle: {
				fontSize: 12,
				color: '#fff',
				padding: [0, 0, 0, -10] // 修改文字和图标距离
			}
		},
		series: [
			{
				center: ['40%', '50%'],
				name: '大饼图',
				labelLine: {
					show: false
				},
				label: {
					show: false
				},
				startAngle: 135,
				type: 'pie',
				radius: '40%',
				data: [
					{ value: 48, name: '图例展示' },
					{ value: 187, name: '图例展示 ' },
					{ value: 125, name: '图例展示  ' }
				]
			}
		]
	}
}
export const setLineOption = () => {
	return {
		grid: {
			bottom: '20%',
			left: '10%',
			top: '30%',
			right: '7%'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#12c0a4'
				}
			}
		},
		legend: {
			itemHeight: 3,
			itemWidth: 8,
			icon: 'roundRect',
			top: '5%',
			right: '10%',
			data: ['图例', '图例 '],
			textStyle: {
				fontSize: 12,
				color: '#fff',
				padding: [0, 0, 0, 1] // 修改文字和图标距离
			}
		},
		xAxis: [
			{
				type: 'category',
				data: ['2016', '2017', '2018', '2019', '2020'],
				axisPointer: {
					type: 'shadow'
				},
				axisTick: {
					show: false
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '亿元',
				min: 0,
				max: 1200,
				interval: 400,
				axisLabel: {
					show: true,
					textStyle: {
						color: '#8dcbc6'
					}
				},
				nameTextStyle: {
					color: '#8dcbc6',
					padding: [0, 0, 0, -50]
				}
			},
			{
				type: 'value',
				name: '%',
				min: 0,
				max: 15,
				interval: 5,
				axisLabel: {
					show: true,
					textStyle: {
						color: '#8dcbc6'
					}
				},
				nameLocation: 'end',
				nameTextStyle: {
					color: '#8dcbc6',
					padding: [0, 0, 0, 30]
				}
			}
		],
		series: [
			{
				name: '图例',
				type: 'bar',
				barWidth: '13',
				tooltip: {
					valueFormatter: function (value: number) {
						return (value as number) + ' ml'
					}
				},
				data: [400, 650, 700, 780, 1100]
			},
			{
				name: '图例 ',
				type: 'line',
				yAxisIndex: 1,
				tooltip: {
					valueFormatter: function (value: number) {
						return (value as number) + ' %'
					}
				},
				data: [7, 9, 11, 13, 15]
			}
		]
	}
}
export const setBarOption = () => {
	return {
		grid: {
			bottom: '20%',
			left: '8%',
			right: '1%',
			top: '30%'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			textStyle: {
				fontSize: 12,
				color: '#fff',
				padding: [0, 0, 0, 1] // 修改文字和图标距离
			},
			itemHeight: 3,
			itemWidth: 8,
			icon: 'roundRect',
			top: '5%',
			right: '-2%',
			data: ['图例', '图例 ', '图例  ']
		},
		xAxis: [
			{
				axisTick: {
					show: false
				},
				type: 'category',
				data: ['2017', '2018', '2019', '2020']
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '亿元',
				min: 0,
				max: 600,
				interval: 200,
				axisLabel: {
					show: true,
					textStyle: {
						color: '#8dcbc6'
					}
				},
				nameTextStyle: {
					color: '#8dcbc6',
					padding: [0, 0, 0, -38]
				}
			}
		],
		series: [
			{
				name: '图例',
				type: 'bar',
				data: [300, 350, 340, 490]
			},
			{
				name: '图例 ',
				type: 'bar',
				data: [350, 400, 410, 530]
			},
			{
				name: '图例  ',
				type: 'bar',
				data: [420, 510, 440, 590]
			}
		]
	}
}
export const setMoneyPieOption = () => {
	return {
		title: {
			show: true,
			left: '13.5%',
			top: '30%',
			itemGap: 4,
			text: '单位',
			textStyle: {
				color: '#fff',
				fontSize: '13'
			},
			subtext: '亿元',
			subtextStyle: {
				color: '#a8cbcb',
				fontSize: '12'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			icon: 'circle',
			itemHeight: 7,
			itemGap: 15,
			top: '10%',
			left: '40%',
			orient: 'vertical',
			textStyle: {
				fontSize: 12,
				color: '#fff',
				padding: [0, 0, 0, -8] // 修改文字和图标距离
			}
		},
		series: [
			{
				name: 'money',
				type: 'pie',
				center: ['20%', '50%'],
				radius: ['50%', '85%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderColor: '#184049',
					borderWidth: 3
				},
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 1048, name: '图例名称' },
					{ value: 735, name: '图例名称 ' },
					{ value: 580, name: '图例名称  ' },
					{ value: 484, name: '图例名称   ' },
					{ value: 300, name: '图例名称    ' }
				]
			}
		]
	}
}
export const setPlantsPieOption = () => {
	return {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			icon: 'circle',
			itemHeight: 7,
			itemGap: 15,
			top: '10%',
			left: '40%',
			orient: 'vertical',
			textStyle: {
				fontSize: 12,
				color: '#fff',
				padding: [0, 0, 0, -8] // 修改文字和图标距离
			}
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				center: ['20%', '50%'],
				radius: '85%',
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 1048, name: '图例名称   图例名称' },
					{ value: 735, name: '图例名称   图例名称 ' },
					{ value: 580, name: '图例名称   图例名称  ' }
				]
			}
		]
	}
}
export const setWeightBarOption = () => {
	return {
		grid: {
			top: '10%',
			bottom: '15%'
		},
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: [120, 200, 150, 80, 70, 110, 130],
				type: 'bar'
			}
		]
	}
}
export const setRadiusLineOption = () => {
	return {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			itemHeight: 3,
			itemWidth: 8,
			icon: 'roundRect',
			top: '5%',
			right: '1%',
			data: ['图例', '图例 ', '图例  '],
			textStyle: {
				fontSize: 12,
				color: '#fff',
				padding: [0, 0, 0, 1] // 修改文字和图标距离
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: true,
				data: ['名称', '名称', '名称', '名称', '名称', '名称']
			}
		],
		yAxis: [
			{
				min: 0,
				max: 120,
				interval: 40,
				type: 'value'
			}
		],
		series: [
			{
				name: '图例',
				type: 'line',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: {
						type: 'linear ',
						x: 0,
						y: 0.5,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: 'rgba(34,145,227,1)'
							},
							{
								offset: 1,
								color: 'rgba(34,145,227, 0)'
							}
						],
						global: false
					}
				},
				emphasis: {
					focus: 'series'
				},
				data: [30, 40, 60, 50, 80, 43]
			},
			{
				name: '图例 ',
				type: 'line',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: {
						type: 'linear ',
						x: 0,
						y: 0.5,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: 'rgba(7,221,183,1)'
							},
							{
								offset: 1,
								color: 'rgba(7,221,183, 0)'
							}
						],
						global: false
					}
				},
				emphasis: {
					focus: 'series'
				},
				data: [30, 80, 40, 56, 78, 40]
			},
			{
				name: '图例  ',
				type: 'line',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: {
						type: 'linear ',
						x: 0,
						y: 0.5,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: 'rgba(241,158,102,1)'
							},
							{
								offset: 1,
								color: 'rgba(241,158,102, 0)'
							}
						],
						global: false
					}
				},
				emphasis: {
					focus: 'series'
				},
				data: [22, 32, 41, 97, 65, 12]
			}
		]
	}
}
export const setAreaPieOption = () => {
	return {
		title: {
			show: true,
			left: '17.5%',
			top: '40%',
			itemGap: 4,
			text: '51.4',
			textStyle: {
				color: '#fff',
				fontSize: '18',
				fontFamily: '庞门正道标题体'
			},
			subtext: '亿元',
			subtextStyle: {
				color: '#a8cbcb',
				fontSize: '12'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			icon: 'circle',
			itemHeight: 7,
			itemGap: 15,
			top: '20%',
			left: '65%',
			orient: 'vertical',
			textStyle: {
				fontSize: 12,
				color: '#fff',
				padding: [0, 0, 0, -8] // 修改文字和图标距离
			}
		},
		series: [
			{
				name: 'money',
				type: 'pie',
				center: ['30%', '60%'],
				radius: ['40%', '65%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderColor: '#184049',
					borderWidth: 3
				},
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 1048, name: '图例名称' },
					{ value: 735, name: '图例名称 ' },
					{ value: 580, name: '图例名称  ' }
				]
			}
		]
	}
}
