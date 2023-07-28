import { BusinessPo } from '@/entity/common/base'

export interface PersonnelDistributeVo {
	typeName: string
	distributeList: Array<DistributeVo>
	icon: string
}
export interface DistributeVo extends BusinessPo {
	distributionIntervalName: string
	distributionNumber: number
	fkDistributionIntervalId: string
	fkRuralId: string
	fkTypeId: string
	partyBranchName: string
	rfRuralName: string
	typeName: string
}
export interface CollectiveEconomy extends BusinessPo {
	averageIncome: number
	fkRuralId: string
	operatingAverageIncome: number
	operatingIncome: number
	recurringAverageIncome: number
	recurringIncome: number
	rfRuralName: string
	statisticsYear: number
}
export interface ProjectEvaluationRaking extends BusinessPo {
	countyRanking: number
	fkParentDeptId: string
	fkRuralId: string
	honorPoints: number
	rfRuralName: string
	statisticsYear: number
	totalScore: number
	townRanking: number
}
export interface DefiledIndexVo extends BusinessPo {
	fkRuralId: string
	researchNumber: number
	researchRatio: number
	rfRuralName: string
	satisfactionRatio: number
	screeningNumber: number
	screeningRatio: number
	securityNumber: number
	securityRatio: number
	statisticsYear: number
	visitNumber: number
	visitRatio: number
}
export interface PartyActivitiesVo extends BusinessPo {
	//活动数量
	activitiesNumber: number
	//活动参与率%
	activitiesRatio: number
	//农村id
	fkRuralId: string
	//农村名称
	rfRuralName: string
	//月份
	statisticsMonth: string
}
export interface ProjectEvaluationVo extends BusinessPo {
	//指标分数
	criteriaScore: number
	//测评分
	evaluationScore: number
	//审批记录id
	fkApprovalId: string
	//农村id
	fkRuralId: string
	//建设标准类型id（一级指标id）
	fkTypeId: string
	//农村名称
	rfRuralName: string
	//年份
	statisticsYear: number
	//建设标准类型名称（一级指标名称）
	typeName: string
}
export interface GridDistributionVo extends BusinessPo {
	centerCoordinates: string
	coordinates: string
	fkGridId: string
	fkRuralId: string
	gridLevel: number
	gridName: string
	partyMemberNumber: number
	registeredPopulationNumber: number
	rfRuralName: string
	statisticsQuarter: number
	statisticsYear: number
}
