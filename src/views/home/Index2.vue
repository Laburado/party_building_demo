<template>
	<div>
		<screen-adapter>
			<div class="home">
				<!--顶部内容-->
				<div class="top-box">
					<!--顶部左侧内容-->
					<div class="t-left">
						<span class="t-left-title">百千万工程数据可视化驾驶舱1</span>
						<span class="t-left-subtext">王店镇 南梅村</span>
					</div>
					<!--顶部右侧内容-->
					<div class="t-right">
						<span class="datetime">{{ currDateTime }}</span>
						<img src="@/assets/images2/go-system.png" />
						<span class="go-system">
							<span>进入后台</span>
						</span>
					</div>
				</div>
				<!--左侧内容-->
				<div class="left-box">
					<div class="left-1">
						<div class="img-box">
							<a-carousel autoplay :dots="false">
								<div v-for="(item, index) in photos" :key="'image' + index">
									<img :src="item" />
								</div>
							</a-carousel>
						</div>
						<div class="type-box">
							<img src="@/assets/images2/left-right-1.png" />
							<img src="@/assets/images2/left-right-2.png" />
							<img src="@/assets/images2/left-right-3.png" />
						</div>
					</div>
					<div class="left-2">
						<div class="left-2-item">
							<div class="value">{{ ruralInfo?.committeeManNumber }} / {{ ruralInfo?.committeeWomanNumber }}</div>
							<div class="text">班子/后备</div>
						</div>
						<div class="left-2-item">
							<div class="value">{{ ruralInfo?.populationNumber }}</div>
							<div class="text">总人口</div>
						</div>
						<div class="left-2-item">
							<div class="value">{{ ruralInfo?.floatingPopulationNumber }}</div>
							<div class="text">活动人口</div>
						</div>
					</div>
					<div class="common-title">党组织情况</div>
					<div class="echarts-box">
						<!--            <echart-dom :id="'multiplePie'" :width="'100%'" :options="pieOptions" :height="'100%'"/>-->
						<EchartsBox v-if="pieOptions" :key="pieOptions" :id="'multiplePie'" :width="'100%'" :options="pieOptions" :height="'100%'" />
					</div>
					<div class="tab-box">
						<ul>
							<li v-for="(item, index) in tabList" :key="item.typeName" :class="{ active: currTabIndex === index }" @click="onTabChange(index)">
								<img :src="item.icon" alt="" />
								<span>{{ item.typeName }}</span>
							</li>
						</ul>
					</div>
					<div class="echarts-box2">
						<EchartsBox
							v-if="Object.values(dashboardOptions).length > 0"
							:id="'dashboard'"
							:width="'100%'"
							:options="dashboardOptions"
							:height="'100%'"
						/>
					</div>
				</div>
				<!--右侧内容-->
				<div class="right-box">
					<div class="common-title">连心服务</div>
					<div class="lxfw-box">
						<div class="message-box1">
							<div class="small-box">微走访</div>
							<img class="icon" src="src/assets/images2/222@2x.png" />
							<img class="up" src="src/assets/images2/up.png" />
							<span class="percent">{{ defiledIndex?.visitRatio }}%</span>
							<span class="num">{{ defiledIndex?.visitNumber }}条</span>
						</div>
						<div class="message-box2">
							<div class="small-box">微力量</div>
							<img class="icon" src="src/assets/images2/222@2x.png" />
							<img class="up" src="src/assets/images2/up.png" />
							<span class="percent">{{ defiledIndex?.screeningRatio }}%</span>
							<span class="num">{{ defiledIndex?.screeningNumber }}条</span>
						</div>
						<div class="message-box1">
							<div class="small-box">微民情</div>
							<img class="icon" src="src/assets/images2/222@2x.png" />
							<img class="up" src="src/assets/images2/down.png" />
							<span class="percent1">{{ defiledIndex?.securityRatio }}%</span>
							<span class="num">{{ defiledIndex?.securityNumber }}条</span>
						</div>
						<div class="message-box2">
							<div class="small-box">微办事</div>
							<img class="icon" src="src/assets/images2/222@2x.png" />
							<img class="up" src="src/assets/images2/up.png" />
							<span class="percent">{{ defiledIndex?.researchRatio }}%</span>
							<span class="num">{{ defiledIndex?.researchRatio }}条</span>
						</div>
						<div class="echarts-box">
							<EchartsBox v-if="lxBarOptions" :key="lxBarOptions" :id="'lxfwBar'" :width="'100%'" :options="lxBarOptions" :height="'100%'" />
						</div>
					</div>
					<div class="common-title">集体经济</div>
					<div class="echarts-box">
						<EchartsBox v-if="barOptions" :key="barOptions" :id="'bar'" :width="'100%'" :options="barOptions" :height="'100%'" />
					</div>
					<div class="common-title">党组织活动</div>
					<div class="echarts-box2">
						<EchartsBox v-if="lineOptions" :key="lineOptions" :id="'line'" :width="'100%'" :options="lineOptions" :height="'100%'" />
					</div>
				</div>
				<!--底部内容-->
				<div class="bottom-box">
					<div class="bottom-top-box">
						<div class="text-box">
							<span class="num">32</span>
							<span class="message">荣誉分</span>
						</div>
						<div class="text-box">
							<span class="num">92</span>
							<span class="message">总分</span>
						</div>
						<span class="qjzs">强基指数</span>
					</div>
					<hr />
					<div class="echarts-bigbox">
						<div class="echarts-smallbox">
							<span class="title-text">政治素养</span>
							<div class="mark-box">
								<div class="mark">
									<span class="num-text1">{{ evaluationScore[0] }}</span>
									<span class="mark-text1">得分</span>
								</div>
								<div class="mark">
									<span class="num-text2">{{ criteriaScore[0] }}</span>
									<span class="mark-text2">标准得分</span>
								</div>
							</div>
							<img class="bg-img" src="src/assets/images2/bar-bg.png" />
							<div class="echarts-box">
								<EchartsBox
									v-if="barOptions1"
									:key="barOptions1"
									:id="'qjbarOption1'"
									:width="'100%'"
									:options="barOptions1"
									:height="'100%'"
								/>
							</div>
						</div>
						<div class="echarts-smallbox">
							<span class="title-text">支部运行</span>
							<div class="mark-box">
								<div class="mark">
									<span class="num-text1">{{ evaluationScore[1] }}</span>
									<span class="mark-text1">得分</span>
								</div>
								<div class="mark">
									<span class="num-text2">{{ criteriaScore[1] }}</span>
									<span class="mark-text2">标准得分</span>
								</div>
							</div>
							<img class="bg-img" src="src/assets/images2/bar-bg.png" />
							<div class="echarts-box">
								<EchartsBox
									v-if="barOptions2"
									:key="barOptions2"
									:id="'qjbarOption2'"
									:width="'100%'"
									:options="barOptions2"
									:height="'100%'"
								/>
							</div>
						</div>
						<div class="echarts-smallbox">
							<span class="title-text">阵地建设</span>
							<div class="mark-box">
								<div class="mark">
									<span class="num-text1">{{ evaluationScore[2] }}</span>
									<span class="mark-text1">得分</span>
								</div>
								<div class="mark">
									<span class="num-text2">{{ criteriaScore[2] }}</span>
									<span class="mark-text2">标准得分</span>
								</div>
							</div>
							<img class="bg-img" src="src/assets/images2/bar-bg.png" />
							<div class="echarts-box">
								<EchartsBox
									v-if="barOptions3"
									:key="barOptions3"
									:id="'qjbarOption3'"
									:width="'100%'"
									:options="barOptions3"
									:height="'100%'"
								/>
							</div>
						</div>
						<div class="echarts-smallbox">
							<span class="title-text">统领作用</span>
							<div class="mark-box">
								<div class="mark">
									<span class="num-text1">{{ evaluationScore[3] }}</span>
									<span class="mark-text1">得分</span>
								</div>
								<div class="mark">
									<span class="num-text2">{{ criteriaScore[3] }}</span>
									<span class="mark-text2">标准得分</span>
								</div>
							</div>
							<img class="bg-img" src="src/assets/images2/bar-bg.png" />
							<div class="echarts-box">
								<EchartsBox
									v-if="barOptions4"
									:key="barOptions4"
									:id="'qjbarOption4'"
									:width="'100%'"
									:options="barOptions4"
									:height="'100%'"
								/>
							</div>
						</div>
					</div>
					<div class="right-box">
						<div class="nr">
							<img class="bluecircle" src="src/assets/images2/bluecircle.png" />
							<span class="num">1</span>
							<span class="pm">镇排名</span>
						</div>
						<div class="nr">
							<img class="orangecircle" src="src/assets/images2/orangecircle.png" />
							<span class="num">3</span>
							<span class="pm">区排名</span>
						</div>
					</div>
				</div>
				<!--地图-->
				<echarts-map2 />
			</div>
		</screen-adapter>
	</div>
</template>

<script setup lang="ts">
import tabIcon1 from '../../assets/images2/21341633685714_.pic@2x.png'
import tabIcon2 from '../../assets/images2/21351633685776_.pic@2x.png'
import tabIcon3 from '../../assets/images2/21361633685858_.pic@2x.png'
import tabIcon4 from '../../assets/images2/21371633685909_.pic@2x.png'
import tabIcon5 from '../../assets/images2/21381633685967_.pic@2x.png'
import tabIcon6 from '../../assets/images2/21391633686010_.pic@2x.png'
import ScreenAdapter from '../../components/ScreenAdapter.vue'
import EchartsBox from '@/components/Echarts.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { formatByDate } from '../../utils/datetime-util'
import { COUNTRY_WEEK } from '../../enum/date'
import { messageMethod } from '@/utils/message-util'
import ruralIndexRequest from '@/api/ruralIndex'
import {
	setPieOption,
	setDashboardOptions,
	setBarOptions,
	setLineOptions,
	setBarOptions1,
	setBarOptions2,
	setBarOptions3,
	setBarOptions4,
	setLxBarOptions
} from './options2'
import EchartsMap2 from '@/components/EchartsMap2.vue'
import requestMethod from '@/api/login'
import { useSystemStore } from '@/store/system'
import { useUserStore } from '@/store/user'
import ruralInfoRequest from '@/api/ruralInfo'
import { RuralInfoVo } from '@/entity/ruralInfo/ruralInfo'
import { BaseUtil } from '@/utils/base-util'
import { CollectiveEconomy, DefiledIndexVo, PartyActivitiesVo, PersonnelDistributeVo, ProjectEvaluationVo } from '@/entity/ruralIndex/ruralIndex'
import ruralIndex from '@/api/ruralIndex'
// 当前日期时间
const currDateTime = ref('')
// 当前时间
const currTime = ref('')
// 时间定时器
const currTimeInte = ref()
// 轮播图片数组
const photos = ref<string[]>([])
//党组织情况options
let pieOptions = ref({})
const barOptions1 = ref({})
const barOptions2 = ref({})
const barOptions3 = ref({})
const barOptions4 = ref({})
const lxBarOptions = ref({})
//党组织情况分类options
const dashboardOptions = ref({})
//tab数据
const currTabIndex = ref(0)
const tabList = ref<PersonnelDistributeVo[]>([])
let requestId = 0
const loginParams = {
	userAccount: 'admin',
	password: '111111'
}
//集体经济柱状图
const barOptions = ref({})
//党组织活动折线图
const lineOptions = ref({})
//动画事件
const requestAnimation = (angle: number) => {
	cancelAnimationFrame(requestId)
	angle += 1
	dashboardOptions.value = setDashboardOptions(angle)
	requestId = requestAnimationFrame(() => {
		requestAnimation(angle)
	})
}

onMounted(async () => {
	//获取当前的日期和时间以及星期
	const week = COUNTRY_WEEK.CN[formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').week]
	currTimeInte.value = setInterval(() => {
		let datetime = formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').text
		currDateTime.value = datetime + week
	}, 1000)
	getDashboard()
	await login()
	await getRuralInfo()
	await getPersonnelDistribute()
	await getCollectiveEconomy()
	await getProjectEvaluationRaking()
	await getDefiledIndex()
	await getPartyActivities()
	await getProjectEvaluation()
})
//使用系统存储
const systemStore = useSystemStore()
//使用用户信息存储
const userStore = useUserStore()
//登录请求
const login = async () => {
	await requestMethod.login(loginParams).then(({ data }) => {
		console.log(data)
		//设置系统信息存储
		systemStore.setToken(data.authToken)
		//设置用户信息存储
		userStore.setInfo(data)
		messageMethod.success('登录成功！')
	})
}

const ruralInfo = ref<RuralInfoVo>()
const fkRuralId = ref<string | undefined>('')
const getRuralInfo = async () => {
	await ruralInfoRequest.page({ pageNum: 1, pageSize: 10, rfRuralName: '测试村' }).then(({ data }) => {
		console.log(data.list[0])
		ruralInfo.value = data.list[0]
		fkRuralId.value = ruralInfo.value?.fkRuralId
		const photosList: string[] =
			ruralInfo.value?.groupPhoto === ''
				? ruralInfo.value?.centerPhoto.split(',')
				: ruralInfo.value?.groupPhoto.split(',').concat(ruralInfo.value?.centerPhoto.split(','))
		photos.value = photosList.map(item => BaseUtil.getUploadPath(item))
	})
}
const evaluationScore = ref<number[]>([])
const criteriaScore = ref<number[]>([])
const sumArray = ref<number[]>([])
const projectEvaluation = ref<ProjectEvaluationVo>()
const getProjectEvaluation = async () => {
	await ruralIndexRequest.projectEvaluation(fkRuralId.value).then(({ data }) => {
		//测评分
		// const evaluationScore = data.map(item => item.evaluationScore)
		evaluationScore.value = data.map(item => item.evaluationScore)
		//标准分
		criteriaScore.value = data.map(item => item.criteriaScore)
		sumArray.value = evaluationScore.value.map((score, index) => score + criteriaScore.value[index])
		barOptions1.value = setBarOptions1({
			seriesData: sumArray.value[0]
		})
		barOptions2.value = setBarOptions2({
			seriesData: sumArray.value[1]
		})
		barOptions3.value = setBarOptions3({
			seriesData: sumArray.value[2]
		})
		barOptions4.value = setBarOptions4({
			seriesData: sumArray.value[3]
		})
	})
}

const getPersonnelDistribute = async () => {
	await ruralIndexRequest.personnelDistribute(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const icons = [tabIcon1, tabIcon4, tabIcon3, tabIcon5, tabIcon2, tabIcon6]
		tabList.value = data
		tabList.value.forEach((item: PersonnelDistributeVo, index: number) => {
			item.icon = icons[index]
		})
		const chartsData = tabList.value[currTabIndex.value].distributeList.map((item: { distributionIntervalName: string; distributionNumber: number }) => {
			return {
				name: item.distributionIntervalName,
				value: item.distributionNumber
			}
		})
		pieOptions.value = setPieOption(chartsData)
	})
}

const getCollectiveEconomy = async () => {
	await ruralIndexRequest.collectiveEconomy(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const statisticsYear = data.map(item => item.statisticsYear)
		const operatingIncome = data.map(item => item.operatingIncome)
		const recurringIncome = data.map(item => item.recurringIncome)
		const operatingAverageIncome = data.map(item => item.operatingAverageIncome)
		console.log(operatingAverageIncome)
		const recurringAverageIncome = data.map(item => item.recurringAverageIncome)
		barOptions.value = setBarOptions({
			xAxisData: statisticsYear,
			legendData: ['经营性收入', '经常性收入', '全区平均'],
			seriesData: [operatingIncome, recurringIncome, operatingAverageIncome, recurringAverageIncome]
		})
	})
}

const getProjectEvaluationRaking = async () => {
	await ruralIndexRequest.projectEvaluationRaking(fkRuralId.value).then(({ data }) => {
		console.log(data)
	})
}

const defiledIndex = ref<DefiledIndexVo>()
const getDefiledIndex = async () => {
	await ruralIndexRequest.defiledIndex(fkRuralId.value).then(({ data }) => {
		console.log(data)
		defiledIndex.value = data
		console.log(defiledIndex)
		fkRuralId.value = data.fkRuralId
		const satisfactionRatio = data.satisfactionRatio
		lxBarOptions.value = setLxBarOptions({
			seriesData: satisfactionRatio
		})
	})
}

const partyActivities = ref<PartyActivitiesVo>()
const getPartyActivities = async () => {
	await ruralIndexRequest.partyActivities(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const activitiesNumber = data.map(item => item.activitiesNumber)
		const activitiesRatio = data.map(item => item.activitiesRatio)
		console.log(activitiesNumber)
		console.log(activitiesRatio)
		lineOptions.value = setLineOptions({
			seriesData: [activitiesNumber, activitiesRatio]
		})
	})
}
//获取党员活动参与率
async function getDashboard() {
	dashboardOptions.value = setDashboardOptions(0)
	requestAnimation(0)
}
function onTabChange(index: number) {
	currTabIndex.value = index
	if (currTabIndex.value != undefined) {
		const chartsData = tabList.value[currTabIndex.value].distributeList.map((item: { distributionIntervalName: string; distributionNumber: number }) => {
			return {
				name: item.distributionIntervalName,
				value: item.distributionNumber
			}
		})
		pieOptions.value = setPieOption(chartsData)
	}
}
onUnmounted(() => {
	cancelAnimationFrame(requestId)
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
$boxBgColor: rgba(0, 0, 0, 0.08);
$valueColors: #43b9fe #f8af3c #51ffc1;
.common-title {
	@include wh(228px, 52px);
	background: url('@/assets/images2/t_bg.png') no-repeat;
	background-size: 100% 100%;
	text-align: center;
	line-height: 52px;
	@include fontMixin(24px, 400, #c7e6ff);
	letter-spacing: 2px;
}
.home {
	@include wh(100%, 100%);
	background: url('@/assets/images2/bg.png') no-repeat;
	background-size: 100% 100%;
	color: #ffffff;
	.top-box {
		position: absolute;
		width: 100%;
		@include flexMixin(space-between, center);
		padding: 43px 23px 24px 53px;
		.t-left {
			.t-left-title {
				@include fontMixin(48px, 700);
				margin-right: 22px;
				letter-spacing: 6px;
			}
			.t-left-subtext {
				@include fontMixin(28px, 700);
				letter-spacing: 2px;
			}
		}
		.t-right {
			display: flex;
			align-items: center;
			.datetime {
				@include fontMixin(18px, 500);
			}
			img {
				@include wh(36px, 36px);
				margin: 0 7px 0 18px;
			}
			.go-system {
				@include fontMixin(21px, 700);
				letter-spacing: 2px;
			}
			&:after {
				content: '';
				display: inline-block;
				@include wh(11px, 12px);
				background: url('@/assets/images2/arrow-right.png') no-repeat;
				background-size: 100% 100%;
				margin-left: 2px;
			}
		}
	}
	.left-box,
	.right-box {
		@include wh(447px, 930px);
		position: absolute;
		z-index: 2;
		top: 113px;
		background-color: $boxBgColor;
		padding-left: 12px;
	}
	.left-box {
		z-index: 2;
		left: 37px;
		.left-1 {
			.img-box {
				@include wh(319px, 186px);
				padding: 12px 11px;
				vertical-align: middle;
				display: inline-block;
				border: 1px solid #cbedff;
				background-color: rgba(0, 0, 0, 0.2);
				:deep(.ant-carousel) {
					.slick-slide img {
						@include wh(297px, 162px);
					}
				}
			}
			.type-box {
				margin-left: 20px;
				vertical-align: middle;
				display: inline-block;
				& > img {
					@include wh(63px, 46px);
					margin-bottom: 19px;
					display: block;
				}
				img:last-child {
					margin-bottom: 0;
				}
			}
		}
		.left-2 {
			@include flexMixin(space-around, center);
			margin: 49px 0 49px 0;
			//@each 遍历颜色的数组
			//可以拿到每隔颜色的猪
			//index 当前颜色的下表
			@each $color in $valueColors {
				$index: index($valueColors, $color);
				div:nth-child(#{$index}) {
					.value {
						@include fontMixin(40px, 400, $color);
						font-family: DS-DIGIT;
						letter-spacing: 4px;
						line-height: 40px;
					}
					.text {
						font-size: 14px;
					}
				}
			}
		}
		.echarts-box {
			@include wh(100%, 247px);
		}
		.tab-box {
			width: 100%;
			ul {
				margin: 0;
				padding: 0;
				text-align: center;
				& > li {
					margin-left: -1px;
				}
				& > li:first-child {
					margin-left: 0;
				}
				li {
					display: inline-block;
					border: 1px solid #42b9fe;
					cursor: pointer;
					padding: 6px 9px;
					img,
					span {
						vertical-align: middle;
					}
					img {
						margin-right: 2px;
					}
				}
				.active {
					background-color: #11d290;
					border: 1px solid #11d290;
					color: #fff;
				}
			}
		}
		.echarts-box2 {
			@include wh(100%, 260px);
		}
	}
	.right-box {
		right: 37px;
		.lxfw-box {
			@include wh(428px, 283px);
			//border: 1px solid red;
			.message-box1 {
				@include wh(400px, 45px);
				background: rgba(23, 90, 145, 0.2);
				//border: 1px solid green;
				margin-top: 10px;
				margin-left: 13px;
				position: relative;
				.small-box {
					position: absolute;
					@include wh(74px, 28px);
					background: #f1ac40;
					color: #000;
					text-align: center;
					line-height: 28px;
					border-radius: 7%;
					font-size: 16px;
					font-family: 'PingFang SC';
					left: 16px;
					top: 8px;
				}
				.icon {
					@include wh(149px, 19px);
					position: absolute;
					filter: brightness(250%);
					left: 100px;
					top: 12px;
				}
				.up {
					@include wh(9px, 17px);
					position: absolute;
					left: 268px;
					top: 12px;
				}
				.percent {
					@include fontMixin(18px, 400, #3ad8d8);
					font-family: 'PingFang SC';
					position: absolute;
					left: 278px;
					top: 5px;
				}
				.percent1 {
					@include fontMixin(18px, 400, #ff3f42);
					font-family: 'PingFang SC';
					position: absolute;
					left: 278px;
					top: 6px;
				}
				.num {
					@include fontMixin(18px, 400, #42b9fe);
					font-family: 'PingFang SC';
					position: absolute;
					left: 318px;
					top: 5px;
				}
			}
			.message-box2 {
				@include wh(400px, 45px);
				//border: 1px solid green;
				margin-top: 10px;
				margin-left: 13px;
				position: relative;
				.small-box {
					position: absolute;
					@include wh(74px, 28px);
					background: #45bdf3;
					color: #000;
					text-align: center;
					line-height: 28px;
					border-radius: 7%;
					font-size: 16px;
					font-family: 'PingFang SC';
					left: 16px;
					top: 8px;
				}
				.icon {
					@include wh(149px, 19px);
					position: absolute;
					filter: brightness(250%);
					left: 100px;
					top: 12px;
				}
				.up {
					@include wh(9px, 17px);
					position: absolute;
					left: 268px;
					top: 12px;
				}
				.percent {
					@include fontMixin(18px, 400, #3ad8d8);
					font-family: 'PingFang SC';
					position: absolute;
					left: 278px;
					top: 5px;
				}
				.num {
					@include fontMixin(18px, 400, #42b9fe);
					font-family: 'PingFang SC';
					position: absolute;
					left: 318px;
					top: 5px;
				}
			}
			.echarts-box {
				@include wh(400px, 50px);
				//border: 1px solid green;
				margin-left: 13px;
				margin-top: 10px;
			}
		}
		.echarts-box {
			@include wh(100%, 255px);
		}
		.echarts-box2 {
			@include wh(100%, 255px);
		}
	}
	.bottom-box {
		@include wh(905px, 327px);
		position: absolute;
		top: 717px;
		left: 0;
		right: 0;
		margin: 0 auto;
		background-color: $boxBgColor;
		hr {
			width: 95%;
			border: 1px solid #2a446a;
		}
		.bottom-top-box {
			@include wh(905px, 81px);
			display: flex;
			//border: 1px solid red;
			.qjzs {
				@include fontMixin(29px, 400, #c7e6ff);
				font-family: 'PingFang SC';
				position: absolute;
				right: 42px;
				top: 18px;
			}
			.text-box {
				@include wh(100px, 44px);
				margin-left: 56px;
				margin-top: 20px;
				//border: 1px solid red;
				position: relative;
				.num {
					position: absolute;
					top: -17px;
					left: -4px;
					@include fontMixin(40px, 400, #2bdafa);
					font-family: DS-DIGIT;
				}
				.message {
					position: absolute;
					top: 22px;
					left: 52px;
				}
			}
		}
		.echarts-bigbox {
			@include wh(750px, 220px);
			//border: 1px solid red;
			position: absolute;
			top: 100px;
			left: 22px;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			align-content: flex-start;
			.echarts-smallbox {
				@include wh(374px, 110px);
				//border: 1px solid green;
				position: relative;
				.title-text {
					position: absolute;
					@include fontMixin(14px, 400);
					font-family: 'PingFang SC';
					//border: 1px solid blue;
				}
				.mark-box {
					position: absolute;
					display: flex;
					@include wh(212px, 35px);
					//border: 1px solid blue;
					top: 15px;
					.mark {
						@include wh(106px, 35px);
						.num-text1 {
							@include fontMixin(36px, 400, #3eb4f7);
							font-family: DS-DIGIT;
							margin-right: 13px;
						}
						.mark-text1 {
							@include fontMixin(12px, 400, #c7e6ff);
							font-family: 'PingFang SC';
						}
						.num-text2 {
							@include fontMixin(36px, 400, #f8af3c);
							font-family: DS-DIGIT;
							margin-right: 13px;
						}
						.mark-text2 {
							@include fontMixin(12px, 400, #c7e6ff);
							font-family: 'PingFang SC';
						}
					}
				}
				.bg-img {
					position: absolute;
					top: 79px;
					left: -5px;
				}
				.echarts-box {
					position: absolute;
					@include wh(332px, 39px);
					//border: 1px solid blue;
					top: 68px;
				}
			}
		}
		.right-box {
			@include wh(112px, 219px);
			//border: 1px solid red;
			position: absolute;
			left: 772px;
			top: 100px;
			.nr {
				margin-left: -13px;
				@include wh(112px, 109px);
				//border: 1px solid green;
				position: relative;
				.num {
					position: absolute;
					@include fontMixin(21px, 500);
					font-family: 'PingFang SC';
					left: 50px;
					top: 32px;
				}
				.pm {
					position: absolute;
					@include fontMixin(13px, 400);
					font-family: 'PingFang SC';
					left: 38px;
					top: 58px;
				}
				.bluecircle {
					top: 10px;
					position: absolute;
					left: 11px;
					@include wh(90px, 90px);
				}
				.orangecircle {
					top: 10px;
					left: 11px;
					position: absolute;
					@include wh(90px, 90px);
				}
			}
		}
	}
}
</style>
