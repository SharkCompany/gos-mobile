export interface RideModel {
  price: string;
  available: boolean;
  timeStart: string;
  destinationId: number;
  departureId: number;
  type: loaiChuyenDi;
}
export enum loaiChuyenDi {
  dinho = "dinho",
  yensau = "yensau",
}

export enum DriveStatus {
  waiting = "waiting",
  matched = "matched",
}

export interface GetRideQuerySchema {
  available: boolean;
  type: loaiChuyenDi;
  timeStart: string;
  destination: string;
}
