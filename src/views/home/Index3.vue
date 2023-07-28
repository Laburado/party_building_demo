<script setup lang="ts">
import ScreenAdapter from '@/components/ScreenAdapter.vue'
import { onMounted, ref } from 'vue'
import { formatByDate } from '../../utils/datetime-util'
import { COUNTRY_WEEK } from '../../enum/date'
import EchartsBox from '@/components/Echarts.vue'
import {
	setPieOption1,
	setPieOption2,
	setLineOption,
	setBarOption,
	setMoneyPieOption,
	setPlantsPieOption,
	setWeightBarOption,
	setRadiusLineOption,
	setAreaPieOption
} from './options3'
//当前日期时间
const currDateTime = ref('')
const currDateTime2 = ref('')
const currDateTime3 = ref('')
// 当前时间
const currTime = ref('')
// 时间定时器
const currTimeInte = ref()
onMounted(() => {
	//获取当前的日期和时间以及星期
	const week = COUNTRY_WEEK.CN[formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').week]
	currTimeInte.value = setInterval(() => {
		let datetime = formatByDate(new Date(), 'yyyy年MM月dd日').text
		let datetime2 = formatByDate(new Date(), week).text
		let datetime3 = formatByDate(new Date(), 'HH: mm').text
		currDateTime.value = datetime
		currDateTime2.value = datetime2
		currDateTime3.value = datetime3
	}, 1000)
})
const pieOptions1 = setPieOption1()
const pieOptions2 = setPieOption2()
const lineOptions = setLineOption()
const barOptions = setBarOption()
const moneyPieOption = setMoneyPieOption()
const plantsPieOption = setPlantsPieOption()
const weightBarOption = setWeightBarOption()
const radiusLineOption = setRadiusLineOption()
const areaPieOption = setAreaPieOption()
</script>

<template>
	<div>
		<screen-adapter>
			<div class="home">
				<!--顶部内容-->
				<div class="top-box">
					<!--顶部左侧内容-->
					<div class="t-left">
						<img src="src/assets/images3/icon2.png" />
						<span>
							<p>多云转晴</p>
							<p>10℃~12℃</p>
						</span>
					</div>
					<!--顶部中间内容-->
					<div class="t-center">
						<span class="t-center-text">绿色科技感可视化大屏大数据中心</span>
					</div>
					<!--顶部右侧内容-->
					<div class="t-right">
						<span class="datetime">{{ currDateTime }}</span>
						<span class="datetime2">{{ currDateTime2 }}</span>
						<span class="datetime3">{{ currDateTime3 }}</span>
					</div>
				</div>
				<!--中间内容-->
				<div class="center-box">
					<!--左侧图标-->
					<div class="left-icon">
						<img src="src/assets/images3/left.png" />
					</div>
					<!--中部区域-->
					<div class="center">
						<!--左侧第一个区域-->
						<div class="left-first">
							<img src="src/assets/images3/bg-left.png" />
							<div class="comman-title">
								<div class="comman-title-bg"></div>
								<span>这里是大标题</span>
							</div>
							<div class="left-first-box">
								<!--数字区域-->
								<div class="number-box">
									<div class="number-box1">
										<p class="text">12</p>
										<p class="subtext">名称(单位)</p>
									</div>
									<div class="number-box1">
										<p class="text">255</p>
										<p class="subtext">名称(单位)</p>
									</div>
									<div class="number-box1">
										<p class="text">101.24</p>
										<p class="subtext">名称(单位)</p>
									</div>
									<div class="number-box1">
										<p class="text">97.71</p>
										<p class="subtext">名称(单位)</p>
									</div>
								</div>
								<div class="comman-subtitle">
									<img src="src/assets/images3/icon5.png" />
									<span>这里是小标题</span>
								</div>
								<div class="echarts-box">
									<div class="echarts-box1">
										<EchartsBox :id="'multiplePie1'" :width="'100%'" :options="pieOptions1" :height="'100%'" />
									</div>
									<div class="echarts-box2">
										<EchartsBox :id="'multiplePie2'" :width="'100%'" :options="pieOptions2" :height="'100%'" />
									</div>
								</div>
								<div class="honor">
									<img src="src/assets/images3/icon3.png" />
									<textarea rows="5" cols="20" readonly>
荣获“全国科技进步先进县”、“全国绿色能源示范县”、“长三角最具投资价值县国家生态县”、“全国文明城市”的称号。“全国绿色能源示范县”、“长三角最具投资价值县国家生态县”、“全国文明城市”的称号。“全国绿色能源示范县”、“长三角最具投资价值县国家生态县”、“全国文明城市”的称号。</textarea
									>
									<span>荣誉</span>
								</div>
							</div>
						</div>
						<!--左侧第二个区域-->
						<div class="left-second">
							<img src="src/assets/images3/bg-left.png" />
							<div class="comman-title">
								<div class="comman-title-bg"></div>
								<span>这里是大标题</span>
							</div>
							<div class="left-second-box">
								<div class="data-box">
									<div class="data-box1">
										<div class="data-top">
											<img class="icon6" src="src/assets/images3/icon6.png" />
											<span>107734</span>
										</div>
										<p>数据名称(单位)</p>
									</div>
									<div class="data-box1">
										<div class="data-top">
											<img class="icon7" src="src/assets/images3/icon7.png" />
											<span>35626</span>
										</div>
										<p>数据名称(单位)</p>
									</div>
									<div class="data-box1">
										<div class="data-top1">
											<img class="icon8" src="src/assets/images3/icon8.png" />
											<span>21331</span>
										</div>
										<p>数据名称(单位)</p>
									</div>
								</div>
								<div class="linebox">
									<div class="comman-subtitle">
										<img src="src/assets/images3/icon5.png" />
										<span>这里是小标题</span>
									</div>
									<div class="echarts-box3">
										<EchartsBox :id="'overlapLine'" :width="'100%'" :options="lineOptions" :height="'100%'" />
									</div>
								</div>
								<div class="barbox">
									<div class="comman-subtitle">
										<img src="src/assets/images3/icon5.png" />
										<span>这里是小标题</span>
									</div>
									<div class="echarts-box4">
										<EchartsBox :id="'bar'" :width="'100%'" :options="barOptions" :height="'100%'" />
									</div>
								</div>
							</div>
						</div>
						<!--头部菜单-->
						<div class="top-menu-box">
							<div class="menu-box">
								<img src="src/assets/images3/border2-after.png" />
								<span class="menu-text">头部菜单</span>
							</div>
							<div class="menu-box">
								<img class="menu-bg" src="src/assets/images3/border2-before.png" />
								<span class="menu-text1">头部菜单</span>
							</div>
							<div class="menu-box">
								<img class="menu-bg" src="src/assets/images3/border2-before.png" />
								<span class="menu-text1">头部菜单</span>
							</div>
							<div class="menu-box">
								<img class="menu-bg" src="src/assets/images3/border2-before.png" />
								<span class="menu-text1">头部菜单</span>
							</div>
						</div>
						<!--中间底部区域-->
						<div class="center-bottom-box">
							<img src="src/assets/images3/bg-bottom.png" />
							<div class="comman-title">
								<div class="comman-title-bg"></div>
								<span>这里是大标题</span>
							</div>
							<div class="center-bottom">
								<div class="data-box2">
									<div class="data-num-box">
										<p class="text1">这里是数据名称</p>
										<p class="text2 color1">312</p>
										<p class="text3">个</p>
									</div>
									<div class="data-num-box">
										<p class="text1">这里是数据名称</p>
										<p class="text2 color2">462</p>
										<p class="text3">个</p>
									</div>
									<div class="data-num-box">
										<p class="text1">这里是数据名称</p>
										<p class="text2 color3">134</p>
										<p class="text3">个</p>
									</div>
								</div>
								<div class="image-box">
									<div class="image1">
										<span>这里是小标签</span>
										<img src="src/assets/images3/label2.png" />
									</div>
									<div class="image2">
										<span>这里是小标签</span>
										<img src="src/assets/images3/label1.png" />
									</div>
								</div>
							</div>
						</div>
						<!--中间地区区域-->
						<div class="map-box">
							<div class="mark1-box">
								<div class="mark-border">点位名称</div>
								<div class="mark-icon">
									<img src="src/assets/images3/icon12.png" />
								</div>
								<div class="mark-line"></div>
								<div class="mark-position"></div>
							</div>
							<div class="mark2-box">
								<div class="mark-border">点位名称</div>
								<div class="mark-icon">
									<img src="src/assets/images3/icon12.png" />
								</div>
								<div class="mark-line"></div>
								<div class="mark-position"></div>
							</div>
							<div class="mark3-box">
								<div class="mark-border">点位名称</div>
								<div class="mark-icon">
									<img src="src/assets/images3/icon12.png" />
								</div>
								<div class="mark-line"></div>
								<div class="mark-position"></div>
							</div>
							<div class="mark4-box">
								<div class="mark-border">点位名称</div>
								<div class="mark-icon">
									<img src="src/assets/images3/icon12.png" />
								</div>
								<div class="mark-line"></div>
								<div class="mark-position"></div>
							</div>
							<div class="mark5-box">
								<div class="mark-border">5点位名称</div>
								<div class="mark-icon">
									<img src="src/assets/images3/icon12.png" />
								</div>
								<div class="mark-line"></div>
								<div class="mark-position"></div>
							</div>
							<div class="mark6-box">
								<div class="mark-border">点位名称</div>
								<div class="mark-icon">
									<img src="src/assets/images3/icon11.png" />
								</div>
								<div class="mark-line"></div>
								<div class="mark-position"></div>
							</div>
						</div>
						<!--右侧区域-->
						<div class="right-box">
							<img src="src/assets/images3/bg-right.png" />
							<div class="comman-title">
								<div class="comman-title-bg"></div>
								<span>这里是大标题</span>
							</div>
							<div class="money-box">
								<div class="comman-subtitle">
									<img src="src/assets/images3/icon5.png" />
									<span>这里是小标题</span>
								</div>
								<div class="border6">
									<img class="money-icon" src="src/assets/images3/icon9.png" />
									<span class="text1">167.00</span>
									<span class="text2">同比增长</span>
									<span class="text3">3.7%</span>
									<span class="text4">这里是数据名称(单位)</span>
									<img class="totop" src="src/assets/images3/icon10.png" />
								</div>
								<div class="echarts-box5">
									<EchartsBox :id="'moneyPie'" :width="'100%'" :options="moneyPieOption" :height="'100%'" />
								</div>
							</div>
							<div class="plants-box">
								<div class="comman-subtitle">
									<img src="src/assets/images3/icon5.png" />
									<span>这里是小标题</span>
								</div>
								<div class="border6">
									<img class="money-icon" src="src/assets/images3/icon9.png" />
									<span class="text1">167.00</span>
									<span class="text2">同比增长</span>
									<span class="text3">3.7%</span>
									<span class="text4">这里是数据名称(单位)</span>
									<img class="totop" src="src/assets/images3/icon10.png" />
								</div>
								<span class="subtitle">种植面积占比</span>
								<div class="echarts-box5">
									<EchartsBox :id="'plantsPie'" :width="'100%'" :options="plantsPieOption" :height="'100%'" />
								</div>
							</div>
							<div class="weight-box">
								<div class="comman-subtitle">
									<img src="src/assets/images3/icon5.png" />
									<span>这里是小标题</span>
								</div>
								<div class="echarts-box6">
									<EchartsBox :id="'weightBar'" :width="'100%'" :options="weightBarOption" :height="'100%'" />
								</div>
							</div>
							<div class="radius-line-box">
								<div class="comman-subtitle">
									<img src="src/assets/images3/icon5.png" />
									<span>这里是小标题</span>
								</div>
								<div class="data-box">
									<div class="data-box-in">
										<span class="text1">1519</span>
										<span class="text2">这里是数据名称(单位)</span>
									</div>
									<div class="data-box-in">
										<span class="text1">2544</span>
										<span class="text2">这里是数据名称(单位)</span>
									</div>
								</div>
								<div class="echarts-box7">
									<EchartsBox :id="'radiusLine'" :width="'100%'" :options="radiusLineOption" :height="'100%'" />
								</div>
							</div>
							<div class="area-box">
								<div class="comman-subtitle">
									<img src="src/assets/images3/icon5.png" />
									<span>这里是小标题</span>
								</div>
								<div class="cz-icon">产值</div>
								<div class="mj-icon">面积</div>
								<div class="echarts-box8">
									<div class="area-echarts">
										<EchartsBox :id="'areaPie1'" :width="'100%'" :options="areaPieOption" :height="'100%'" />
									</div>
									<div class="area-echarts">
										<EchartsBox :id="'areaPie2'" :width="'100%'" :options="areaPieOption" :height="'100%'" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--右侧图标-->
					<div class="right-icon">
						<img src="src/assets/images3/left.png" />
					</div>
				</div>
				<!--底部内容-->
				<div class="bottom-box">
					<img class="bottom-img" src="src/assets/images3/bottom.png" />
					<img class="bottom-icon1" src="src/assets/images3/icon1.png" />
					<img class="bottom-icon2" src="src/assets/images3/icon1.png" />
					<span>技术支撑单位: 背景科技信息技术有限公司</span>
				</div>
			</div>
		</screen-adapter>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
$boxBgColor: rgba(0, 0, 0, 0.08);
$valueColors: #43b9fe #f8af3c #51ffc1;
.home {
	@include wh(100%, 100%);
	//background: url('@/assets/images2/bg.png') no-repeat;
	background-size: 100% 100%;
	background: url('src/assets/images3/bg.png');
	color: #ffffff;
	position: relative;
	//background: red;
	//顶部内容
	.top-box {
		width: 100%;
		height: 88px;
		@include flexMixin(space-between, center);
		background: url('src/assets/images3/topbg.png');
		.t-left {
			display: flex;
			position: absolute;
			top: 42px;
			@include wh(406px, 47px);
			img {
				@include wh(21px, 17px);
				margin-right: 12px;
				margin-left: 30px;
				margin-top: 13px;
			}
			span {
				display: flex;
				@include wh(170px, 100%);
				//background: yellow;
				p {
					@include fontMixin(15px, 400);
					margin-top: 11px;
					margin-right: 13px;
				}
			}
		}
		.t-center {
			position: absolute;
			left: 560px;
			@include wh(810px, 45px);
			//background: green;
			text-align: center;
			.t-center-text {
				font-stretch: normal;
				@include fontMixin(46px, normal);
				line-height: 49px;
				font-family: 锐字真言体免费商用;
				letter-spacing: 6px;
				background: linear-gradient(to bottom, #ffffff 20%, #f6fff4, #3ba096, rgba(0, 99, 91, 2));
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				color: #ffffff;
			}
		}
		.t-right {
			@include wh(405px, 46px);
			position: absolute;
			right: 0;
			top: 42px;
			//background: green;
			.datetime {
				@include fontMixin(14px, 400);
				position: absolute;
				right: 160px;
				top: 12px;
			}
			.datetime2 {
				@include fontMixin(14px, 400);
				position: absolute;
				right: 90px;
				top: 12px;
			}
			.datetime3 {
				@include fontMixin(14px, 400);
				position: absolute;
				right: 29px;
				top: 12px;
			}
		}
	}
	//中间内容
	.center-box {
		@include wh(100%, 952px);
		//border: 1px solid red;
		display: flex;
		justify-content: space-between;
		.left-icon {
			@include wh(14px, 100%);
			//border: 1px solid yellow;
			img {
				@include wh(100%, 100%);
			}
		}
		.center {
			position: relative;
			@include wh(1892px, 100%);
			//border: 1px solid green;
			.comman-title {
				@include wh(274px, 33px);
				position: absolute;
				background: url('@/assets/images3/border3.png') no-repeat;
				background-size: 100% 100%;
				span {
					position: absolute;
					left: 34px;
					@include fontMixin(20px, 400, #c7e6ff);
					letter-spacing: 2px;
					line-height: 36px;
					font-family: '思源黑体 CN Heavy';
					font-style: italic;
					background: linear-gradient(to bottom, #ffffff, #b5ffda);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					color: #ffffff;
				}
				//border: 1px solid green;
			}
			.left-first {
				position: absolute;
				@include wh(450px, 462px);
				//border: 1px solid yellow;
				margin-top: 19px;
				z-index: 10;
				img {
					position: absolute;
					top: -8px;
				}
				.left-first-box {
					top: 33px;
					@include wh(100%, 429px);
					position: absolute;
					//border: 1px solid red;
					.number-box {
						@include wh(100%, 61px);
						position: absolute;
						top: 22px;
						//border: 1px solid red;
						display: flex;
						margin-bottom: 14px;
						.number-box1 {
							@include wh(80px, 61px);
							margin-left: 16px;
							margin-right: 16px;
							position: relative;
							background: url('src/assets/images3/icon4.png');
							.text {
								@include fontMixin(20px, 400);
								text-align: center;
								position: relative;
								font-family: 庞门正道标题体;
								top: -2px;
							}
							.subtext {
								position: absolute;
								@include fontMixin(12px, 100, #c3fdeb);
								font-family: 微软雅黑;
								top: 25px;
								left: 12px;
							}
						}
					}
					.comman-subtitle {
						position: absolute;
						@include wh(172px, 16px);
						//border: 1px solid red;
						top: 97px;
						left: 15px;
						img {
							position: absolute;
							top: -7px;
							@include wh(34px, 28px);
						}
						span {
							@include fontMixin(16px, 500);
							position: absolute;
							left: 38px;
							top: -6px;
							font-family: 微软雅黑;
							letter-spacing: 1px;
							color: #12c0a4;
						}
					}
					.echarts-box {
						@include wh(426px, 159px);
						//border: 1px solid red;
						position: absolute;
						top: 124px;
						left: 12px;
						background: url('src/assets/images3/bg-left1.png');
						display: flex;
						.echarts-box1 {
							@include wh(50%, 100%);
							//border: 1px solid green;
						}
						.echarts-box2 {
							@include wh(50%, 100%);
							//border: 1px solid yellow;
						}
					}
					.honor {
						@include wh(426px, 115px);
						//border: 1px solid red;
						position: absolute;
						background: url('src/assets/images3/bg-left1.png');
						top: 296px;
						left: 12px;
						img {
							@include wh(85px, 54px);
							position: absolute;
							top: 21px;
							left: 6px;
						}
						textarea {
							position: absolute;
							left: 110px;
							top: -2px;
							font-family: 微软雅黑;
							@include wh(280px, 95px);
							@include fontMixin(12px, 100);
							color: #fff;
							background: transparent;
							border-bottom: 0px solid;
							border-left: 0px solid;
							border-right: 0px solid;
							border-top: 0px solid;
							overflow-y: hidden;
							overflow-x: hidden;
							border: 0;
						}
						span {
							position: absolute;
							top: 78px;
							left: 37px;
							@include fontMixin(14px, 600, #11e5c0);
							font-family: 微软雅黑;
							letter-spacing: 2px;
						}
					}
				}
			}
			.left-second {
				position: absolute;
				@include wh(450px, 462px);
				//border: 1px solid yellow;
				top: 501px;
				z-index: 10;
				img {
					position: absolute;
					top: -8px;
				}
				.left-second-box {
					top: 33px;
					@include wh(100%, 429px);
					position: absolute;
					//border: 1px solid red;
					.data-box {
						position: absolute;
						@include wh(426px, 55px);
						//border: 1px solid green;
						top: 17px;
						left: 12px;
						display: flex;
						.data-box1 {
							@include wh(138px, 55px);
							background: url('src/assets/images3/border4.png');
							margin-right: 3px;
							position: relative;
							&:last-child {
								margin-right: 0;
							}
							margin-left: 3px;
							&:first-child {
								margin-left: 0;
							}
							p {
								position: absolute;
								@include fontMixin(12px, 300, #ccefec);
								font-family: 微软雅黑;
								top: 30px;
								left: 30px;
							}
							.data-top {
								@include wh(99px, 17px);
								//border: 1px solid blue;
								margin-top: 8px;
								margin-left: 23px;
								position: relative;
								img {
									margin-top: 8px;
									.icon6 {
										@include wh(21px, 17px);
									}
									.icon7 {
										@include wh(17px, 17px);
									}
									.icon8 {
										@include wh(20px, 17px);
									}
								}
								span {
									@include fontMixin(20px, 500, #ffffff);
									font-family: 庞门正道标题体;
									position: absolute;
									margin-left: 24px;
									top: -7px;
								}
							}
							.data-top1 {
								@include wh(79px, 17px);
								//border: 1px solid blue;
								margin-top: 8px;
								margin-left: 30px;
								position: relative;
								img {
									margin-top: 8px;
									.icon6 {
										@include wh(21px, 17px);
									}
									.icon7 {
										@include wh(17px, 17px);
									}
									.icon8 {
										@include wh(20px, 17px);
									}
								}
								span {
									@include fontMixin(20px, 500, #ffffff);
									font-family: 庞门正道标题体;
									position: absolute;
									margin-left: 24px;
									top: -7px;
								}
							}
						}
					}
					.linebox {
						@include wh(411px, 145px);
						//border: 1px solid green;
						position: absolute;
						top: 92px;
						left: 18px;
						.comman-subtitle {
							position: absolute;
							@include wh(172px, 16px);
							//border: 1px solid red;
							img {
								position: absolute;
								top: -7px;
								@include wh(34px, 28px);
							}
							span {
								@include fontMixin(16px, 500);
								position: absolute;
								left: 38px;
								top: -6px;
								font-family: 微软雅黑;
								letter-spacing: 1px;
								color: #12c0a4;
							}
						}
						.echarts-box3 {
							@include wh(100%, 129px);
							//border: 1px solid blue;
							margin-top: 16px;
						}
					}
					.barbox {
						@include wh(411px, 145px);
						//border: 1px solid green;
						position: absolute;
						top: 262px;
						left: 18px;
						.comman-subtitle {
							position: absolute;
							@include wh(172px, 16px);
							//border: 1px solid red;
							img {
								position: absolute;
								top: -7px;
								@include wh(34px, 28px);
							}
							span {
								@include fontMixin(16px, 500);
								position: absolute;
								left: 38px;
								top: -6px;
								font-family: 微软雅黑;
								letter-spacing: 1px;
								color: #12c0a4;
							}
						}
						.echarts-box4 {
							@include wh(100%, 129px);
							//border: 1px solid blue;
							margin-top: 16px;
						}
					}
				}
			}
			.top-menu-box {
				@include wh(606px, 86px);
				position: absolute;
				//border: 1px solid yellow;
				left: 643px;
				display: flex;
				.menu-box {
					@include wh(140px, 86px);
					//border: 1px solid green;
					margin-left: 6px;
					margin-right: 6px;
					position: relative;
					.menu-bg {
						position: absolute;
						margin-top: 22px;
					}
					.menu-text {
						position: absolute;
						@include fontMixin(20px, 500);
						top: 16px;
						left: 28px;
						background: linear-gradient(to bottom, #ffffff, #ffe4ba);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						color: #ffffff;
					}
					.menu-text1 {
						position: relative;
						top: 16px;
						left: 28px;
						letter-spacing: 1px;
						z-index: 10;
						@include fontMixin(20px, 500);
						background: linear-gradient(to bottom, #ffffff, #adfff4);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						color: #ffffff;
					}
				}
			}
			.center-bottom-box {
				position: absolute;
				@include wh(920px, 265px);
				//border: 1px solid yellow;
				top: 673px;
				left: 486px;
				img {
					position: absolute;
					top: -8px;
				}
				.center-bottom {
					position: absolute;
					@include wh(100%, 229px);
					//border: 1px solid green;
					margin-top: 36px;
					.data-box2 {
						position: absolute;
						@include wh(216px, 204px);
						//border: 1px solid red;
						left: 13px;
						top: 16px;
						.data-num-box {
							@include wh(216px, 60px);
							//border: 1px solid blue;
							margin-top: 12px;
							background: url('src/assets/images3/border1.png');
							background-size: 100% 100%;
							&:first-child {
								margin-top: 0;
							}
							margin-bottom: 12px;
							&:last-child {
								margin-bottom: 0;
							}
							display: flex;
							position: relative;
							.text1 {
								@include fontMixin(16px, 400);
								position: absolute;
								left: 17px;
								top: 13px;
							}
							.text2 {
								@include fontMixin(20px, 400);
								position: absolute;
								right: 35px;
								top: 9px;
							}
							.text2.color1 {
								color: #f49b60;
							}
							.text2.color2 {
								color: #11e5c0;
							}
							.text2.color3 {
								color: #f49b60;
							}
							.text3 {
								position: absolute;
								right: 18px;
								top: 17px;
								@include fontMixin(12px, 400, #8fbf9d);
							}
						}
					}
					.image-box {
						left: 243px;
						position: absolute;
						@include wh(660px, 204px);
						//border: 1px solid red;
						display: flex;
						top: 16px;
						.image1 {
							@include wh(320px, 204px);
							//border: 1px solid green;
							margin-right: 20px;
							background: url('src/assets/images3/pic2.png') no-repeat;
							position: relative;
							img {
								position: absolute;
								z-index: 10;
								left: 0px;
								top: 11px;
							}
							span {
								position: absolute;
								z-index: 20;
								@include fontMixin(16px, 400);
								letter-spacing: 1px;
								left: 11px;
								top: 12px;
							}
						}
						.image2 {
							@include wh(320px, 204px);
							//border: 1px solid green;
							position: relative;
							background: url('src/assets/images3/pic1.png') no-repeat;
							img {
								position: absolute;
								z-index: 10;
								left: 0px;
								top: 11px;
							}
							span {
								position: absolute;
								z-index: 20;
								@include fontMixin(16px, 400);
								letter-spacing: 1px;
								left: 11px;
								top: 12px;
							}
						}
					}
				}
			}
			.map-box {
				@include wh(1227px, 615px);
				background: url('src/assets/images3/map.png') no-repeat;
				position: absolute;
				//border: 1px solid yellow;
				z-index: 5;
				top: 67px;
				left: 308px;
				.mark1-box {
					@include wh(113px, 150px);
					//border: 1px solid blue;
					position: absolute;
					z-index: 30;
					transition: all 0.6s; //设置动画执行的时间为0.6s
					cursor: pointer;
					top: 90px;
					left: 280px;
					.mark-border {
						@include wh(100%, 23px);
						background: url('src/assets/images3/border7.png') no-repeat;
						background-size: 100% 100%;
						@include fontMixin(14px, 400);
						text-align: center;
						letter-spacing: 1px;
						margin-top: 4px;
					}
					.mark-icon {
						@include wh(75px, 75px);
						background: url('src/assets/images3/border10.png');
						background-size: 100% 100%;
						position: absolute;
						top: 9px;
						left: 18px;
						img {
							position: absolute;
							@include wh(40px, 40px);
							top: 17px;
							left: 18.1px;
						}
					}
					.mark-line {
						@include wh(10px, 72px);
						background: url('src/assets/images3/line1.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						transform: rotate(180deg);
						left: 53px;
						top: 58px;
					}
					.mark-position {
						@include wh(40px, 35px);
						background: url('src/assets/images3/position.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						bottom: -4px;
						left: 38px;
					}
				}
				.mark1-box:hover {
					transform: scale(1.3);
				}
				.mark2-box {
					@include wh(113px, 150px);
					transition: all 0.6s; //设置动画执行的时间为0.6s
					cursor: pointer;
					//border: 1px solid blue;
					position: absolute;
					z-index: 30;
					top: 78px;
					left: 643px;
					.mark-border {
						@include wh(100%, 23px);
						background: url('src/assets/images3/border7.png') no-repeat;
						background-size: 100% 100%;
						@include fontMixin(14px, 400);
						text-align: center;
						letter-spacing: 1px;
						margin-top: 4px;
					}
					.mark-icon {
						@include wh(75px, 75px);
						background: url('src/assets/images3/border10.png');
						background-size: 100% 100%;
						position: absolute;
						top: 9px;
						left: 18px;
						img {
							position: absolute;
							@include wh(40px, 40px);
							top: 17px;
							left: 18.1px;
						}
					}
					.mark-line {
						@include wh(10px, 72px);
						background: url('src/assets/images3/line1.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						transform: rotate(180deg);
						left: 53px;
						top: 58px;
					}
					.mark-position {
						@include wh(40px, 35px);
						background: url('src/assets/images3/position.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						bottom: -4px;
						left: 38px;
					}
				}
				.mark2-box:hover {
					transform: scale(1.3);
				}
				.mark3-box {
					@include wh(113px, 150px);
					//border: 1px solid blue;
					position: absolute;
					transition: all 0.6s; //设置动画执行的时间为0.6s
					cursor: pointer;
					z-index: 30;
					top: 220px;
					left: 538px;
					.mark-border {
						@include wh(100%, 23px);
						background: url('src/assets/images3/border7.png') no-repeat;
						background-size: 100% 100%;
						@include fontMixin(14px, 400);
						text-align: center;
						letter-spacing: 1px;
						margin-top: 4px;
					}
					.mark-icon {
						@include wh(75px, 75px);
						background: url('src/assets/images3/border10.png');
						background-size: 100% 100%;
						position: absolute;
						top: 9px;
						left: 18px;
						img {
							position: absolute;
							@include wh(40px, 40px);
							top: 17px;
							left: 18.1px;
						}
					}
					.mark-line {
						@include wh(10px, 72px);
						background: url('src/assets/images3/line1.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						transform: rotate(180deg);
						left: 53px;
						top: 58px;
					}
					.mark-position {
						@include wh(40px, 35px);
						background: url('src/assets/images3/position.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						bottom: -4px;
						left: 38px;
					}
				}
				.mark3-box:hover {
					transform: scale(1.3);
				}
				.mark4-box {
					@include wh(113px, 150px);
					//border: 1px solid blue;
					position: absolute;
					transition: all 0.6s; //设置动画执行的时间为0.6s
					cursor: pointer;
					z-index: 30;
					top: 336px;
					left: 328px;
					.mark-border {
						@include wh(100%, 23px);
						background: url('src/assets/images3/border7.png') no-repeat;
						background-size: 100% 100%;
						@include fontMixin(14px, 400);
						text-align: center;
						letter-spacing: 1px;
						position: absolute;
						bottom: 0;
					}
					.mark-icon {
						@include wh(75px, 75px);
						background: url('src/assets/images3/border10.png');
						background-size: 100% 100%;
						position: absolute;
						top: 69px;
						left: 18px;
						img {
							position: absolute;
							@include wh(40px, 40px);
							top: 17px;
							left: 18.1px;
						}
					}
					.mark-line {
						@include wh(10px, 72px);
						background: url('src/assets/images3/line1.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						left: 51px;
						top: 22px;
					}
					.mark-position {
						@include wh(40px, 35px);
						background: url('src/assets/images3/position.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						top: -4px;
						left: 36px;
					}
				}
				.mark4-box:hover {
					transform: scale(1.3);
				}
				.mark5-box {
					@include wh(113px, 150px);
					//border: 1px solid blue;
					position: absolute;
					transition: all 0.6s; //设置动画执行的时间为0.6s
					cursor: pointer;
					z-index: 30;
					top: 366px;
					left: 628px;
					.mark-border {
						@include wh(100%, 23px);
						background: url('src/assets/images3/border7.png') no-repeat;
						background-size: 100% 100%;
						@include fontMixin(14px, 400);
						text-align: center;
						letter-spacing: 1px;
						position: absolute;
						bottom: 0;
					}
					.mark-icon {
						@include wh(75px, 75px);
						background: url('src/assets/images3/border10.png');
						background-size: 100% 100%;
						position: absolute;
						top: 69px;
						left: 18px;
						img {
							position: absolute;
							@include wh(40px, 40px);
							top: 17px;
							left: 18.1px;
						}
					}
					.mark-line {
						@include wh(10px, 72px);
						background: url('src/assets/images3/line1.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						left: 51px;
						top: 22px;
					}
					.mark-position {
						@include wh(40px, 35px);
						background: url('src/assets/images3/position.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						top: -4px;
						left: 36px;
					}
				}
				.mark5-box:hover {
					transform: scale(1.3);
				}
				.mark6-box {
					@include wh(147px, 147px);
					//border: 1px solid blue;
					position: absolute;
					transition: all 0.6s; //设置动画执行的时间为0.6s
					cursor: pointer;
					z-index: 30;
					top: 366px;
					left: 828px;
					.mark-border {
						@include wh(89px, 23px);
						background: url('src/assets/images3/border7.png') no-repeat;
						background-size: 100% 100%;
						@include fontMixin(14px, 400);
						text-align: center;
						letter-spacing: 1px;
						position: absolute;
						top: 0;
						left: 0;
					}
					.mark-icon {
						@include wh(75px, 75px);
						background: url('src/assets/images3/border9.png');
						background-size: 100% 100%;
						position: absolute;
						top: 7px;
						left: 8px;
						img {
							position: absolute;
							@include wh(40px, 40px);
							top: 17px;
							left: 18.1px;
						}
					}
					.mark-line {
						@include wh(75px, 75px);
						background: url('src/assets/images3/line2.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						left: 42px;
						top: 60px;
					}
					.mark-position {
						@include wh(40px, 35px);
						background: url('src/assets/images3/position.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						bottom: -2px;
						right: 0;
					}
				}
				.mark6-box:hover {
					transform: scale(1.3);
				}
			}
			.right-box {
				@include wh(450px, 944px);
				//border: 1px solid yellow;
				position: absolute;
				right: 14px;
				top: 19px;
				img {
					position: absolute;
					top: -8px;
				}
				.comman-subtitle {
					position: absolute;
					@include wh(172px, 16px);
					//border: 1px solid red;
					top: 0;
					left: 0;
					img {
						position: absolute;
						top: -5px;
						left: -4px;
						@include wh(34px, 28px);
					}
					span {
						@include fontMixin(16px, 500);
						position: absolute;
						left: 30px;
						top: -3px;
						font-family: 微软雅黑;
						letter-spacing: 1px;
						color: #12c0a4;
					}
				}
				.border6 {
					position: absolute;
					bottom: 0;
					@include wh(157px, 84px);
					background: url('src/assets/images3/border6.png') no-repeat;
					.money-icon {
						@include wh(21px, 22px);
						position: absolute;
						left: 14px;
						top: 22px;
					}
					.totop {
						@include wh(7px, 10px);
						position: absolute;
						left: 132px;
						top: 37px;
					}
					.text1 {
						@include fontMixin(20px, 400);
						font-family: 庞门正道标题体;
						position: absolute;
						left: 44px;
						top: 6px;
					}
					.text2 {
						@include fontMixin(12px, 400);
						position: absolute;
						left: 50px;
						top: 34px;
					}
					.text3 {
						@include fontMixin(12px, 400, #ff4e4e);
						position: absolute;
						left: 102px;
						top: 34px;
					}
					.text4 {
						@include fontMixin(12px, 400);
						position: absolute;
						left: 21px;
						top: 63px;
					}
				}
				.echarts-box5 {
					position: absolute;
					bottom: 0;
					right: 0;
					background: url('src/assets/images3/bg-right1.png') no-repeat;
					background-size: 100% 100%;
					@include wh(263px, 94px);
				}
				.money-box {
					position: absolute;
					@include wh(426px, 114px);
					//border: 1px solid green;
					top: 50px;
					left: 12px;
				}
				.plants-box {
					position: absolute;
					@include wh(426px, 138px);
					//border: 1px solid green;
					top: 183px;
					left: 12px;
					.subtitle {
						@include fontMixin(14px, 400);
						position: absolute;
						top: 25px;
						left: 13px;
					}
				}
				.weight-box {
					position: absolute;
					@include wh(426px, 211px);
					//border: 1px solid green;
					top: 337px;
					left: 12px;
					.echarts-box6 {
						@include wh(426px, 187px);
						//border: 1px solid red;
						background: url('src/assets/images3/bg-right1.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						top: 24px;
					}
				}
				.radius-line-box {
					position: absolute;
					@include wh(423px, 213px);
					//border: 1px solid green;
					top: 568px;
					left: 15px;
					.data-box {
						@include wh(423px, 54px);
						//border: 1px solid red;
						position: absolute;
						top: 29px;
						display: flex;
						.data-box-in {
							@include wh(205px, 54px);
							margin-left: 6.5px;
							position: relative;
							background: url('src/assets/images3/border5.png') no-repeat;
							//border: 1px solid green;
							&:first-child {
								margin-left: 0px;
							}
							margin-right: 6.5px;
							&:last-child {
								margin-right: 0px;
							}
							.text1 {
								position: absolute;
								@include fontMixin(20px, 400);
								font-family: 庞门正道标题体;
								left: 83px;
							}
							.text2 {
								position: absolute;
								@include fontMixin(12px, 400, #ccefec);
								left: 45px;
								bottom: 9px;
							}
						}
					}
					.echarts-box7 {
						@include wh(423px, 130px);
						//border: 1px solid red;
						position: absolute;
						top: 83px;
					}
				}
				.area-box {
					position: absolute;
					@include wh(423px, 139px);
					//border: 1px solid green;
					top: 794px;
					left: 15px;
					.cz-icon {
						@include wh(40px, 19px);
						position: absolute;
						top: 1px;
						//border: 1px solid #edb791;
						@include fontMixin(12px, 400);
						text-align: center;
						right: 48px;
						box-shadow: 0 0 1.9vw #f19e66 inset;
						background-repeat: no-repeat;
						background-size: 0.1vw 0vw, 0.1vw 0vw;
					}
					.mj-icon {
						top: 1px;
						//border: 1px solid #a1704b;
						position: absolute;
						text-align: center;
						@include wh(40px, 19px);
						@include fontMixin(12px, 400);
						right: 5px;
						box-shadow: 0 0 1.9vw #564536 inset;
						background-repeat: no-repeat;
						background-size: 0.1vw 0vw, 0.6vw 0vw;
					}
					.echarts-box8 {
						@include wh(423px, 118px);
						background: url('src/assets/images3/bg-right1.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						display: flex;
						top: 21px;
						.area-echarts {
							@include wh(423px, 118px);
							//border: 1px solid blue;
						}
					}
				}
			}
		}
		.right-icon {
			@include wh(14px, 100%);
			//border: 1px solid blue;
			img {
				@include wh(100%, 100%);
				transform: scaleX(-1);
			}
		}
	}
	//底部内容
	.bottom-box {
		@include wh(100%, 40px);
		//border: 1px solid green;
		position: absolute;
		span {
			@include fontMixin(13px, 400);
			font-family: '思源黑体 CN Heavy';
			position: absolute;
			letter-spacing: 2px;
			left: 824px;
			top: 14px;
			//border: 1px solid yellow;
			background: linear-gradient(to bottom, #ffffff, #9ff9dd 90%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			color: #ffffff;
		}
		.bottom-img {
			//border: 1px solid #206ec4;
			@include wh(870px, 33px);
			position: absolute;
			top: 0px;
			left: 0;
			bottom: 0;
			right: 0;
			margin: auto;
		}
		.bottom-icon1 {
			position: absolute;
			left: 790px;
			top: 15px;
		}
		.bottom-icon2 {
			position: absolute;
			left: 1124px;
			top: 15px;
			transform: rotate(180deg);
		}
	}
}
</style>
