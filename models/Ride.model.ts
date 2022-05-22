export interface RideModel {
	destination: string;
	price: string;
	available: boolean;
	timeStart: string;
	depaturePlace: string;
	departureId:string;
	type: loaiChuyenDi;
}
export enum loaiChuyenDi {
	dinho = "dinho",
	yensau = "yensau",
}
