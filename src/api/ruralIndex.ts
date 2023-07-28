import { GetRequestModel, QueryType } from '@/http/request-model'
import {
	CollectiveEconomy,
	DefiledIndexVo,
	GridDistributionVo,
	PartyActivitiesVo,
	PersonnelDistributeVo,
	ProjectEvaluationRaking,
	ProjectEvaluationVo
} from '@/entity/ruralIndex/ruralIndex'

const prefix = '/ruralIndex'
export default {
	//根据农村id查询农村党支部人员分布情况
	personnelDistribute: (query: QueryType) =>
		new GetRequestModel<Array<PersonnelDistributeVo>>(`${prefix}/getRuralPartyBranchPersonnelDistributeByFkRuralId?fkRuralId=${query}`).request(),
	//根据农村id查询发展指数（村集体经济）
	collectiveEconomy: (query: QueryType) =>
		new GetRequestModel<Array<CollectiveEconomy>>(`${prefix}/getRuralCollectiveEconomyByFkRuralId?fkRuralId=${query}`).request(),
	//根据农村id查询强基指数排名
	projectEvaluationRaking: (query: QueryType) =>
		new GetRequestModel<Array<ProjectEvaluationRaking>>(`${prefix}/getProjectEvaluationRakingByFkRuralId?fkRuralId=${query}`).request(),
	//根据农村id查询连心指数
	defiledIndex: (query: QueryType) => new GetRequestModel<DefiledIndexVo>(`${prefix}/getRuralDefiledIndexByFkRuralId?fkRuralId=${query}`).request(),
	//根据农村id查询堡垒指数（党员活动）
	partyActivities: (query: QueryType) =>
		new GetRequestModel<Array<PartyActivitiesVo>>(`${prefix}/getRuralPartyActivitiesByFkRuralId?fkRuralId=${query}`).request(),
	//根据农村id查询强基指数测评分
	projectEvaluation: (query: QueryType) =>
		new GetRequestModel<Array<ProjectEvaluationVo>>(`${prefix}/getRuralProjectEvaluationByFkRuralId?fkRuralId=${query}`).request(),
	//根据农村id查询农村网格分布情况
	gridDistribution: (query: QueryType) =>
		new GetRequestModel<Array<GridDistributionVo>>(`${prefix}/getRuralGridDistributionByFkRuralId?fkRuralId=${query}`).request()
}
