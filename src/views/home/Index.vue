<template>
	<div>
		<screen-adapter>
			<div class="bg">
				<div class="top">
					<div class="top-left">
						<img class="time-icon" src="src/assets/images/time-icon.png" />
						<p class="time-text">{{ currDateTime }}</p>
					</div>
					<div class="top-center">
						<p class="pt-name">智慧警务网格分析平台</p>
					</div>
					<div class="top-right">
						<img class="login-icon" src="src/assets/images/login-icon.png" />
						<p class="welcome-text">您好、管理员</p>
						<img class="more-icon" src="src/assets/images/more-icon.png" />
						<img class="shuxian" src="src/assets/images/shuxian.png" />
						<img class="fill-screen-icon" src="src/assets/images/fill-screen-icon.png" />
						<img class="out-icon" src="src/assets/images/out-icon.png" />
					</div>
				</div>
				<div class="left">
					<div class="left-bk">
						<div class="left-first-top">
							<img class="jimusanjiao" src="src/assets/images/jimusj.png" />
							<p class="left-text">人口概括</p>
						</div>
						<div class="left-first-center">
							<img class="hengxian" src="src/assets/images/hengxian.png" />
						</div>
						<div class="left-first-bottom">
							<div class="left-first-bottom-message">
								<div class="rkgk-img">
									<img class="hj-icon" src="src/assets/images/户籍地址.png" />
									<div class="hj-message">
										<p class="hjsz">3.42</p>
										<p class="hjdw">&nbsp万户</p>
									</div>
									<p class="rkgk-text">户籍</p>
								</div>
								<div class="rkgk-img">
									<img class="cz-icon" src="src/assets/images/住院.png" />
									<div class="cz-message">
										<p class="czsz">6.12</p>
										<p class="czdw">&nbsp人</p>
									</div>
									<p class="rkgk-text">长住</p>
								</div>
								<div class="rkgk-img">
									<img class="ld-icon" src="src/assets/images/人-流动人员.png" />
									<div class="ld-message">
										<p class="ldsz">6.12</p>
										<p class="lddw">&nbsp人</p>
									</div>
									<p class="rkgk-text">流动</p>
								</div>
							</div>
						</div>
					</div>
					<div class="left-bk">
						<div class="left-first-top">
							<img class="jimusanjiao" src="src/assets/images/jimusj.png" />
							<p class="left-text">房屋信息</p>
						</div>
						<div class="left-first-center">
							<img class="hengxian" src="src/assets/images/hengxian.png" />
						</div>
						<div class="fw-message">
							<div class="person">
								<div class="circal">
									<img class="circal-img" src="src/assets/images/组%201.png" />
									<div class="person-icon">
										<img class="person-icon-img" src="src/assets/images/个人.png" />
									</div>
								</div>
								<div class="person-text">
									<p class="person-num">3.42</p>
									<p class="person-dw">&nbsp&nbsp万人</p>
								</div>
								<p class="person-text-bottom">个人</p>
							</div>
							<div class="company">
								<div class="circal">
									<img class="circal-img" src="src/assets/images/组%201.png" />
									<div class="company-icon">
										<img class="company-icon-img" src="src/assets/images/作业单位.png" />
									</div>
								</div>
								<div class="person-text">
									<p class="person-num">2314</p>
									<p class="person-dw">&nbsp&nbsp家</p>
								</div>
								<p class="person-text-bottom">单位</p>
							</div>
						</div>
					</div>
					<div class="left-bk">
						<div class="left-first-top">
							<img class="jimusanjiao" src="src/assets/images/jimusj.png" />
							<p class="left-text">重点单位</p>
						</div>
						<div class="left-first-center">
							<img class="hengxian" src="src/assets/images/hengxian.png" />
						</div>
						<div class="dw-message">
							<div class="jtbj">
								<div class="dot dot-top"></div>
								<div class="dot dot-bottom"></div>
								<div class="jtbgjx">
									<div class="dw-total">
										<img class="dw-icon" src="src/assets/images/党务公开.png" />
										<p class="dw-name">党政机关</p>
										<p class="dzjg-num">3215</p>
										<p class="dzjg-dw">家</p>
									</div>
								</div>
								<div class="jtbgsjx"></div>
							</div>
							<div class="jtbj">
								<div class="dot dot-top"></div>
								<div class="dot dot-bottom"></div>
								<div class="jtbgjx">
									<div class="dw-total">
										<img class="dw-icon" src="src/assets/images/工地.png" />
										<p class="dw-name">工地&nbsp&nbsp&nbsp</p>
										<p class="gd-num">13215</p>
										<p class="gd-dw">家</p>
									</div>
								</div>
								<div class="jtbgsjx"></div>
							</div>
							<div class="jtbj">
								<div class="dot dot-top"></div>
								<div class="dot dot-bottom"></div>
								<div class="jtbgjx">
									<div class="dw-total">
										<img class="dw-icon" src="src/assets/images/特种行业.png" />
										<p class="dw-name">特种&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
										<p class="tz-num">5212</p>
										<p class="tz-dw">座</p>
									</div>
								</div>
								<div class="jtbgsjx"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="center">
					<div class="center-in">
						<div class="horizontally">
							<div class="horizontally-in">
								<div class="horizontally-message">
									<div class="horizontally-icon-border">
										<img class="horizontally-icon" src="src/assets/images/人口.png" />
									</div>
									<p class="horizontally-text">实有人口</p>
								</div>
								<div class="horizontally-num one">
									<div class="dots dots-top1"></div>
									<div class="dots dots-bottom1"></div>
									<div class="dots dots-top2"></div>
									<div class="dots dots-bottom2"></div>
									29381
								</div>
							</div>
							<div class="horizontally-in">
								<div class="horizontally-message">
									<div class="horizontally-icon-border">
										<img class="horizontally-icon" src="src/assets/images/房屋.png" />
									</div>
									<p class="horizontally-text">实有房屋</p>
								</div>
								<div class="horizontally-num tow">
									<div class="dots dots-top1"></div>
									<div class="dots dots-bottom1"></div>
									<div class="dots dots-top2"></div>
									<div class="dots dots-bottom2"></div>
									1222
								</div>
							</div>
							<div class="horizontally-in">
								<div class="horizontally-message">
									<div class="horizontally-icon-border">
										<img class="horizontally-icon" src="src/assets/images/警察.png" />
									</div>
									<p class="horizontally-text">警察人数</p>
								</div>
								<div class="horizontally-num three">
									<div class="dots dots-top1"></div>
									<div class="dots dots-bottom1"></div>
									<div class="dots dots-top2"></div>
									<div class="dots dots-bottom2"></div>
									3214
								</div>
							</div>
							<div class="horizontally-in">
								<div class="horizontally-message">
									<div class="horizontally-icon-border">
										<img class="horizontally-icon" src="src/assets/images/单位.png" />
									</div>
									<p class="horizontally-text">实有单位</p>
								</div>
								<div class="horizontally-num four">
									<div class="dots dots-top1"></div>
									<div class="dots dots-bottom1"></div>
									<div class="dots dots-top2"></div>
									<div class="dots dots-bottom2"></div>
									1241
								</div>
							</div>
						</div>
						<div class="center-in-bottom">
							<div class="region">
								<img class="region-img" src="src/assets/images/位置.png" />
								<p class="region-text">某某市 - 某某地区</p>
							</div>
							<!--							<div class="map"></div>-->
							<div class="mapM">
								<div class="mapM1">
									<img class="mapM-icon" src="src/assets/images/sgreen.png" />
									<p class="mapM-text">警力规模</p>
								</div>
								<div class="mapM1">
									<img class="mapM-icon" src="src/assets/images/sorange.png" />
									<p class="mapM-text">今日警情</p>
								</div>
								<div class="mapM1">
									<img class="mapM-icon" src="src/assets/images/sblue.png" />
									<p class="mapM-text">重点单位</p>
								</div>
							</div>
							<div class="threeD">
								<p class="threeD-text">3D</p>
							</div>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="branch">
						<div
							v-for="(item, index) in branchItems"
							:key="index"
							:class="['branch-box', { active: index === activeIndex }]"
							@click="changeActiveIndex(index)"
						>
							分局<br />名称
						</div>
					</div>
					<div class="todaySunrise">
						<div class="tptitle">
							<img class="tptitle-icon" src="src/assets/images/jimusj.png" />
							<p class="tptitle-text">今日警情</p>
							<div class="dots1 dots1-bottom1"></div>
							<div class="dots1 dots1-bottom2"></div>
						</div>
						<div class="tpmessage-front">
							<div class="tpmessage-yd"></div>
							<div class="tpmessage-text">6月21日，全市110报警服务台共接有效警情1062起，属刑事类报警19起（诈骗10起，盗窃摩托车4起，</div>
							<div class="tpmessage-time">2020年7月1日12:&nbsp32:&nbsp00</div>
						</div>
						<div class="tpmessage-front">
							<div class="tpmessage-yd"></div>
							<div class="tpmessage-text">6月21日，全市110报警服务台共接有效警情1062起，属刑事类报警19起（诈骗10起，盗窃摩托车4起，</div>
							<div class="tpmessage-time">2020年7月1日12:&nbsp32:&nbsp00</div>
						</div>
						<div class="tpmessage-last">
							<div class="tpmessagel-yd"></div>
							<div class="tpmessagel-text">6月21日，全市110报警服务台共接有效警情1062起，属刑事类报警19起（诈骗10起，盗窃摩托车4起，</div>
						</div>
					</div>
					<div class="polices">
						<div class="tptitle">
							<img class="tptitle-icon" src="src/assets/images/jimusj.png" />
							<p class="tptitle-text">警力部署</p>
							<div class="dots1 dots1-bottom1"></div>
							<div class="dots1 dots1-bottom2"></div>
						</div>
						<div class="police-deployment">
							<div class="police-deployment-box">
								<img class="police-deployment-icon" src="src/assets/images/形状%2020.png" />
								<div class="police-deployment-img-box">
									<img class="police-deployment-img" src="src/assets/images/图层%2011.png" />
								</div>
								<div class="police-deployment-message">
									<p class="police-deployment-name">警察名称</p>
									<p class="police-deployment-num">红谷滩1区管理</p>
									<img class="police-deployment-bottom" src="src/assets/images/矩形%209.png" />
								</div>
							</div>
							<div class="police-deployment-box">
								<img class="police-deployment-icon" src="src/assets/images/形状%2020.png" />
								<div class="police-deployment-img-box">
									<img class="police-deployment-img" src="src/assets/images/图层%2012.png" />
								</div>
								<div class="police-deployment-message">
									<p class="police-deployment-name">警察名称</p>
									<p class="police-deployment-num">红谷滩3区管理</p>
									<img class="police-deployment-bottom" src="src/assets/images/矩形%209.png" />
								</div>
							</div>
							<div class="police-deployment-box">
								<img class="police-deployment-icon" src="src/assets/images/形状%2020.png" />
								<div class="police-deployment-img-box">
									<img class="police-deployment-img" src="src/assets/images/图层%2013.png" />
								</div>
								<div class="police-deployment-message">
									<p class="police-deployment-name">警察名称</p>
									<p class="police-deployment-num">红谷滩分2区管理</p>
									<img class="police-deployment-bottom" src="src/assets/images/矩形%209.png" />
								</div>
							</div>
							<div class="police-deployment-box">
								<img class="police-deployment-icon" src="src/assets/images/形状%2020.png" />
								<div class="police-deployment-img-box">
									<img class="police-deployment-img" src="src/assets/images/图层%2014.png" />
								</div>
								<div class="police-deployment-message">
									<p class="police-deployment-name">警察名称</p>
									<p class="police-deployment-num">红谷滩4区管理</p>
									<img class="police-deployment-bottom" src="src/assets/images/矩形%209.png" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<echarts-map />
			</div>
		</screen-adapter>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { formatByDate } from '../../utils/datetime-util'
import { COUNTRY_WEEK } from '../../enum/date'
import { reactive } from 'vue'
import EchartsMap from '@/components/EchartsMap.vue'
//当前日期时间
const currDateTime = ref('')
// 当前时间
const currTime = ref('')
// 时间定时器
const currTimeInte = ref()
onMounted(() => {
	//获取当前的日期和时间以及星期
	const week = COUNTRY_WEEK.CN[formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').week]
	currTimeInte.value = setInterval(() => {
		let datetime = formatByDate(new Date(), 'yyyy-MM-dd HH:mm:ss').text
		currDateTime.value = datetime
	}, 1000)
})

const branchItems = reactive([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])

let activeIndex = 0

const changeActiveIndex = index => {
	activeIndex = index
}
</script>
<style lang="scss" scoped>
.bg {
	background-image: url('src/assets/images/bg.png');
	width: 100%;
	height: 100%;
	position: fixed;
	background-size: 100% 100%;
}
.top {
	display: flex;
	height: 70px;
	background-image: url('src/assets/images/top-line.png');
	background-size: 100% 100%;
}
.top-left {
	width: 25%;
	display: flex;
}
.time-icon {
	width: 20px;
	height: 20px;
	margin: 15px 0 15px 15px;
}
.time-text {
	color: white;
	font-size: 15px;
	text-align: center;
	margin: 12.5px 0 12.5px 15px;
}
.top-right {
	width: 25%;
	display: flex;
	justify-content: flex-end;
}
.top-center {
	width: 50%;
	display: flex;
	justify-content: center;
	background-image: -webkit-linear-gradient(bottom, #aaefff, #75a5ff);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: bold;
	font-size: 22px;
}
.pt-name {
	letter-spacing: 3px;
	font-family: '宋体', '楷体', serif;
	font-weight: bold;
	font-size: 30px;
	margin: 8px;
}
.login-icon {
	width: 30px;
	height: 30px;
	margin: 5px;
}
.welcome-text {
	color: white;
	margin-top: 8px;
}
.more-icon {
	width: 10px;
	height: 7px;
	margin-top: 13px;
	margin-left: 10px;
	margin-right: 30px;
}
.shuxian {
	height: 20px;
	margin-top: 10px;
	margin-right: 20px;
}
.fill-screen-icon {
	width: 20px;
	height: 20px;
	margin: 10px;
}
.out-icon {
	width: 20px;
	height: 20px;
	margin: 10px;
}
p {
	margin: 0;
}
.left {
	float: left;
	width: 25%;
	height: calc(100% - 70px);
}
.left-bk {
	width: 100%;
	height: 33%;
}
.left-first-top {
	width: 100%;
	height: 20px;
	display: flex;
	margin-left: 25px;
	margin-top: 15px;
}
.jimusanjiao {
	width: 15px;
	height: 15px;
}
.left-text {
	color: white;
	margin-left: 20px;
	margin-top: -2px;
}
.left-first-center {
	width: 100%;
	height: 20px;
}
.hengxian {
	width: 100%;
	margin-left: 20px;
	margin-top: -5px;
}
.left-first-bottom {
	width: 100%;
	height: calc(100% - 40px);
	margin-left: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.left-first-bottom-message {
	width: calc(100% - 20px);
	height: calc(100% - 60px);
	display: flex;
}
.rkgk-img {
	width: 30%;
	height: 100%;
	box-shadow: 0 0 1.5vw #1f69b9b9 inset;
	background: linear-gradient(#33cdfa, #33cdfa) left top, linear-gradient(#33cdfa, #33cdfa) left top, linear-gradient(#33cdfa, #33cdfa) right top,
		linear-gradient(#33cdfa, #33cdfa) right top, linear-gradient(#33cdfa, #33cdfa) left bottom, linear-gradient(#33cdfa, #33cdfa) left bottom,
		linear-gradient(#33cdfa, #33cdfa) right bottom, linear-gradient(#33cdfa, #33cdfa) right bottom;
	background-repeat: no-repeat;
	background-size: 0.1vw 0.6vw, 0.6vw 0.1vw;
	margin-left: 10px;
	margin-right: 10px;
}
.hj-icon {
	height: 25px;
	width: 35px;
	margin-left: calc(50% - 17.5px);
	margin-top: 25px;
}
.cz-icon {
	height: 25px;
	width: 25px;
	margin-left: calc(50% - 12.5px);
	margin-top: 25px;
}
.ld-icon {
	height: 25px;
	width: 25px;
	margin-left: calc(50% - 12.5px);
	margin-top: 25px;
}
.hj-message {
	display: flex;
	margin-top: 5px;
	margin-left: 5px;
	margin-right: 5px;
}
.cz-message {
	display: flex;
	margin-top: 5px;
	margin-left: 5px;
	margin-right: 5px;
}
.ld-message {
	display: flex;
	margin-top: 5px;
	margin-left: 5px;
	margin-right: 5px;
}
.hjsz {
	font-size: 25px;
	color: #278dff;
	font-weight: bold;
	margin-left: 10px;
}
.czsz {
	font-size: 25px;
	color: #50e4ac;
	font-weight: bold;
	margin-left: 10px;
}
.ldsz {
	font-size: 25px;
	color: #29e8ff;
	font-weight: bold;
	margin-left: 10px;
}
.hjdw {
	color: #acb6bc;
	font-size: 10px;
	margin-top: 15px;
}
.czdw {
	color: #acb6bc;
	font-size: 10px;
	margin-top: 15px;
}
.lddw {
	color: #acb6bc;
	font-size: 10px;
	margin-top: 15px;
}
.rkgk-text {
	color: white;
	text-align: center;
	font-size: 10px;
}
.fw-message {
	width: 70%;
	height: calc(100% - 40px);
	margin-left: 20%;
	display: flex;
}
.person {
	width: 40%;
	height: 100%;
	margin-right: 10%;
}
.company {
	width: 40%;
	height: 100%;
	margin-left: 10%;
}
.circal {
	width: 108px;
	height: 108px;
	position: absolute;
}
.circal-img {
	width: 100%;
	height: 100%;
	-webkit-animation: rotation 15s linear infinite;
	animation: rotation 15s linear infinite;
	position: absolute;
}
@keyframes rotation {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}
.person-icon-img {
	position: absolute;
	margin: 22px;
}
.company-icon-img {
	position: absolute;
	margin: 22px;
}
.person-text {
	display: flex;
	margin-top: 110px;
	margin-left: 15px;
}
.person-num {
	font-size: 25px;
	font-weight: bold;
	color: #29e8ff;
}
.person-dw {
	color: #acb6bc;
	font-size: 10px;
	margin-top: 15px;
}
.person-text-bottom {
	color: white;
	font-size: 10px;
	text-align: center;
}
.dw-message {
	margin-top: 10px;
	margin-left: 25px;
	height: 120px;
	width: 90%;
}
.jtbj {
	position: relative;
	height: 30%;
	width: 100%;
	display: flex;
	margin-top: 6px;
	border-left: 1px solid #4192ee;
}
.dot {
	position: absolute;
	width: 4px;
	height: 4px;
	background: #4192ee;
}
.dot-top {
	top: 0;
	left: -3px;
}
.dot-bottom {
	left: -3px;
	bottom: 0;
}
.jtbgjx {
	width: 90%;
	height: 100%;
	background: rgba(48, 111, 255, 0.14);
}
.jtbgsjx {
	width: 0;
	height: 0;
	border-left: 35px solid #306fff;
	border-top: 22px solid transparent;
	border-bottom: 15px solid transparent;
	opacity: 0.14;
}
.dw-total {
	display: flex;
	z-index: 10;
}
.dw-icon {
	height: 20px;
	width: 20px;
	opacity: 1;
	margin-left: 20px;
	margin-top: 8px;
}
.dw-name {
	color: white;
	font-size: 5px;
	margin-left: 10px;
	margin-top: 10px;
}
.dzjg-num {
	color: #278dff;
	font-weight: bold;
	font-size: 25px;
	margin-left: 120px;
	margin-top: -2px;
}
.dzjg-dw {
	color: #acb6bc;
	font-size: 10px;
	right: 10px;
	margin-left: 10px;
	margin-top: 10px;
}
.gd-num {
	color: #50e4ac;
	font-weight: bold;
	font-size: 25px;
	margin-left: 120px;
	margin-top: -2px;
}
.gd-dw {
	color: #acb6bc;
	font-size: 10px;
	right: 10px;
	margin-left: 10px;
	margin-top: 10px;
}
.tz-num {
	color: #29e8ff;
	font-weight: bold;
	font-size: 25px;
	margin-left: 120px;
	margin-top: -2px;
}
.tz-dw {
	color: #acb6bc;
	font-size: 10px;
	right: 10px;
	margin-left: 10px;
	margin-top: 10px;
}
.center {
	float: left;
	width: 50%;
	height: 91%;
	/*background: red;*/
	/*opacity: 1;*/
}
.center-in {
	width: 700px;
	height: 100%;
	/*background: #50e4ac;*/
	margin-left: calc(50% - 350px);
	overflow: hidden;
}
.horizontally {
	width: 660px;
	height: 60px;
	margin-left: calc(50% - 330px);
	margin-top: 17px;
	display: flex;
}
.horizontally-in {
	width: 165px;
	height: 60px;
}
.horizontally-message {
	display: flex;
	height: 20px;
	width: 100%;
}
.horizontally-icon-border {
	margin-right: 10px;
	height: 20px;
	width: 25px;
	/*background: white;*/
}
.horizontally-icon {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
.horizontally-text {
	color: white;
	font-size: 10px;
	margin-top: 2px;
}
.horizontally-num {
	position: relative;
	display: flex;
	height: 30px;
	border: 1px solid #60a4ff;
	font-weight: bold;
	font-size: 30px;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	margin-top: 5px;
	margin-left: 35px;
	width: 120px;
}
.one {
	color: #40dbf2;
}
.tow {
	color: #46ffb9;
}
.three {
	color: #ffbf27;
}
.four {
	color: #5ca9ff;
}
.dots {
	position: absolute;
	width: 4px;
	height: 4px;
	background: #badeff;
}
.dots-top1 {
	top: 0;
	left: 0px;
}
.dots-bottom1 {
	bottom: 0;
	left: 0px;
}
.dots-top2 {
	top: 0;
	right: 0px;
}
.dots-bottom2 {
	right: 0px;
	bottom: 0;
}
.center-in-bottom {
	width: 700px;
	height: 570px;
	/*background: #646cff;*/
	margin-top: 20px;
	position: relative;
}
.region {
	display: flex;
	position: absolute;
	width: 170px;
	height: 40px;
	z-index: 2;
	box-shadow: 0 0 0.7vw #1f69b9b9 inset;
	background: linear-gradient(#33cdfa, #33cdfa) left top, linear-gradient(#33cdfa, #33cdfa) left top, linear-gradient(#33cdfa, #33cdfa) right top,
		linear-gradient(#33cdfa, #33cdfa) right top, linear-gradient(#33cdfa, #33cdfa) left bottom, linear-gradient(#33cdfa, #33cdfa) left bottom,
		linear-gradient(#33cdfa, #33cdfa) right bottom, linear-gradient(#33cdfa, #33cdfa) right bottom;
	background-repeat: no-repeat;
	background-size: 0vw 0vw, 0vw 0vw;
}
.region-img {
	height: 25px;
	width: 20px;
	margin: 7.5px 10px 7.5px 10px;
}
.region-text {
	color: white;
	font-size: 14px;
	margin-top: 8px;
}
//.map {
//	position: absolute;
//	width: 600px;
//	height: 530px;
//	background: #33cdfa;
//	z-index: 1;
//	margin-left: 70px;
//	margin-top: 40px;
//}
.mapM {
	position: absolute;
	width: 90px;
	height: 100px;
	z-index: 3;
	bottom: 5px;
	box-shadow: 0 0 1.5vw #1f69b9b9 inset;
	background: linear-gradient(#33cdfa, #33cdfa) left top, linear-gradient(#33cdfa, #33cdfa) left top, linear-gradient(#33cdfa, #33cdfa) right top,
		linear-gradient(#33cdfa, #33cdfa) right top, linear-gradient(#33cdfa, #33cdfa) left bottom, linear-gradient(#33cdfa, #33cdfa) left bottom,
		linear-gradient(#33cdfa, #33cdfa) right bottom, linear-gradient(#33cdfa, #33cdfa) right bottom;
	background-repeat: no-repeat;
	background-size: 0vw 0vw, 0vw 0vw;
}
.mapM1 {
	width: 70px;
	height: 20px;
	/*background: red;*/
	margin-left: 10px;
	margin-top: 10px;
	display: flex;
}
.mapM-icon {
	width: 18px;
	height: 16px;
	margin-top: 2px;
	margin-right: 3px;
}
.mapM-text {
	color: white;
	font-size: 4px;
}
.threeD {
	width: 35px;
	height: 35px;
	position: absolute;
	z-index: 4;
	bottom: 5px;
	right: 0;
	box-shadow: 0 0 1.5vw #1f69b9b9 inset;
	background: linear-gradient(#33cdfa, #33cdfa) left top, linear-gradient(#33cdfa, #33cdfa) left top, linear-gradient(#33cdfa, #33cdfa) right top,
		linear-gradient(#33cdfa, #33cdfa) right top, linear-gradient(#33cdfa, #33cdfa) left bottom, linear-gradient(#33cdfa, #33cdfa) left bottom,
		linear-gradient(#33cdfa, #33cdfa) right bottom, linear-gradient(#33cdfa, #33cdfa) right bottom;
	background-repeat: no-repeat;
	background-size: 0vw 0vw, 0vw 0vw;
}
.threeD-text {
	color: white;
	font-weight: bolder;
	font-size: 15px;
	margin: 5px 5px 5px 7px;
}
.right {
	float: left;
	margin-top: 20px;
	width: 360px;
	height: 647px;
	/*background: red;*/
	opacity: 1;
}
.branch {
	width: 360px;
	height: 200px;
	/*background: green;*/
	margin-bottom: 30px;
}
.branch-box {
	cursor: pointer;
	float: left;
	width: 72.5px;
	height: 60px;
	box-shadow: 0 0 10vw rgba(0, 88, 193, 0.15) inset;
	background: linear-gradient(rgba(39, 141, 255, 0.15), rgba(39, 141, 255, 0.15)) left top,
		linear-gradient(rgba(39, 141, 255, 0.15), rgba(39, 141, 255, 0.15)) left top,
		linear-gradient(rgba(39, 141, 255, 0.15), rgba(39, 141, 255, 0.15)) right top,
		linear-gradient(rgba(39, 141, 255, 0.15), rgba(39, 141, 255, 0.15)) right top,
		linear-gradient(rgba(39, 141, 255, 0.15), rgba(39, 141, 255, 0.15)) left bottom,
		linear-gradient(rgba(39, 141, 255, 0.15), rgba(39, 141, 255, 0.15)) left bottom,
		linear-gradient(rgba(39, 141, 255, 0.15), rgba(39, 141, 255, 0.15)) right bottom,
		linear-gradient(rgba(39, 141, 255, 0.15), rgba(39, 141, 255, 0.15)) right bottom;
	background-repeat: no-repeat;
	background-size: 0.1vw 0.6vw, 0.6vw 0.1vw;
	margin-right: 23.2px;
	margin-bottom: 10px;
	color: #206ec4;
	font-size: 15px;
	font-weight: bold;
	padding-top: 7px;
	text-align: center;
}
.branch-box.active {
	position: relative;
	float: left;
	width: 72.5px;
	height: 60px;
	background-image: url('src/assets/images/警察bg.png');
	box-shadow: 0 0 3vw rgba(42, 237, 255, 0.45) inset;
	background: linear-gradient(rgba(41, 232, 255, 1), rgba(41, 232, 255, 1)) left top, linear-gradient(rgba(41, 232, 255, 1), rgba(41, 232, 255, 1)) left top,
		linear-gradient(rgba(41, 232, 255, 1), rgba(41, 232, 255, 1)) right top, linear-gradient(rgba(41, 232, 255, 1), rgba(41, 232, 255, 1)) right top,
		linear-gradient(rgba(41, 232, 255, 1), rgba(41, 232, 255, 1)) left bottom, linear-gradient(rgba(41, 232, 255, 1), rgba(41, 232, 255, 1)) left bottom,
		linear-gradient(rgba(41, 232, 255, 1), rgba(41, 232, 255, 1)) right bottom, linear-gradient(rgba(41, 232, 255, 1), rgba(41, 232, 255, 1)) right bottom;
	background-repeat: no-repeat;
	background-size: 0.1vw 0.6vw, 0.6vw 0.1vw;
	margin-right: 23.2px;
	margin-bottom: 10px;
	color: white;
	font-size: 15px;
	font-weight: bold;
	padding-top: 7px;
	text-align: center;
}
.branch-box.active:after {
	position: absolute;
	content: '';
	top: 0;
	left: 0;
	display: block;
	width: 100%;
	height: 100%;
	background-image: url('src/assets/images/警察bg.png');
	background-size: 60px 50px;
	background-position: center center;
	background-repeat: no-repeat;
}
.branch-box:nth-child(4n) {
	margin-right: 0px;
}
.branch-box:nth-last-child(-n + 4) {
	margin-bottom: 0px;
}
.todaySunrise {
	width: 360px;
	height: 240px;
	/*background: blue;*/
	margin-bottom: 0px;
}
.tptitle {
	position: relative;
	display: flex;
	width: 360px;
	height: 34px;
	/*background: red;*/
	border-bottom: 1px solid rgba(122, 178, 250, 0.4);
}
.dots1 {
	position: absolute;
	width: 4px;
	height: 4px;
	background: #4192ee;
}
.tptitle-icon {
	width: 15px;
	height: 15px;
	margin-left: 3px;
}
.tptitle-text {
	color: white;
	margin-left: 10px;
	margin-top: -2px;
}
.dots1-bottom2 {
	right: 0px;
	bottom: -3px;
}
.dots1-bottom1 {
	bottom: -3px;
	left: 0px;
}
.tpmessage-front {
	width: 360px;
	height: 76px;
	/*background: green;*/
	border-bottom: 1px solid rgba(122, 178, 250, 0.4);
	display: flex;
	position: relative;
}
.tpmessage-yd {
	width: 5px;
	height: 5px;
	border-radius: 100px;
	background-color: #2fc7ff;
	position: absolute;
	top: 18px;
	left: 10px;
}
.tpmessage-text {
	width: 330px;
	height: 40px;
	left: 20px;
	/*background: #646cff;*/
	position: absolute;
	color: white;
	font-size: 12px;
	top: 11px;
	word-break: break-all;
	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.tpmessage-time {
	right: 0px;
	bottom: 3px;
	width: 130px;
	height: 20px;
	/*background: red;*/
	position: absolute;
	font-size: 12px;
	color: #858a8f;
	transform: scale(0.9);
}
.tpmessage-last {
	width: 360px;
	height: 54px;
	/*background: red;*/
	display: flex;
	position: relative;
}
.tpmessagel-yd {
	width: 5px;
	height: 5px;
	border-radius: 100px;
	background-color: rgba(45, 191, 246, 0.45);
	position: absolute;
	top: 10px;
	left: 10px;
}
.tpmessagel-text {
	width: 330px;
	height: 40px;
	left: 20px;
	position: absolute;
	background: linear-gradient(to bottom, rgba(202, 212, 221, 0.8), rgba(202, 212, 221, 0.3));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	pointer-events: none;
	/*color: transparent;*/
	/*-webkit-background-clip: text;*/
	/*-webkit-text-fill-color: transparent;*/
	/*background-image: linear-gradient(to bottom,#fff,#000);*/
	font-size: 12px;
	top: 3px;
}
.polices {
	width: 360px;
	height: 177px;
	/*background: yellow;*/
}
.police-deployment {
	width: 360px;
	height: 143px;
	/*background: red;*/
}
.police-deployment-box {
	width: 180px;
	height: 62px;
	/*background: green;*/
	float: left;
	margin-top: 10px;
	position: relative;
	/*border: 1px solid white;*/
}
.police-deployment-icon {
	z-index: 1;
	position: absolute;
	width: 57px;
	height: 57px;
	left: 8px;
	top: 2px;
}
.police-deployment-img-box {
	position: absolute;
	width: 47px;
	height: 47px;
	border-radius: 50%;
	overflow: hidden;
	z-index: 2;
	left: 13px;
	top: 7.7px;
}
.police-deployment-img-box .police-deployment-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transform: scale(1.2);
}
.police-deployment-message {
	width: 100px;
	height: 57px;
	/*background: blue;*/
	position: absolute;
	left: 75px;
	top: 2px;
}
.police-deployment-name {
	color: #76c0ff;
	font-size: 13px;
	margin-bottom: 3px;
}
.police-deployment-num {
	color: #a6afb8;
	font-size: 12px;
}
.police-deployment-bottom {
	width: 93%;
}
</style>
