export interface Region {
	name: string
	gridLevel: number
	itemStyle: {
		areaColor: string
		// borderColor: string
		// borderWidth: number
	}
}
export interface Bar {
	name: string
	value: number
	gridLevel: number
}
export interface Scatter {
	name: string
	value: number[]
	img: string
	gridLevel: number
	// partyMemberNumber: number
	// registeredPopulationNumber: number
}
export interface Icon {
	name: string
	value: Array<number>
	gridLevel: number
	symbol: string
}

export interface Scatter2 {
	name: string
	value: number[]
	img: string
	girdLevel: number
	text: string
	// registeredPopulationNumber: number
	// partyMemberNumber: number
}
