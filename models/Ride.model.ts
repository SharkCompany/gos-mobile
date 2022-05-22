import { PlaceModel } from "./Place.model";
import { UserModel } from "./User.model";

export interface RideModel {
  id:number;
  price: string;
  available: boolean;
  timeStart: string;
  destinationId: number;
  departureId: number;
  creatorId: number;
  matcherId: null;
  type: loaiChuyenDi;
  destination: PlaceModel;
  creator: UserModel;
  matcher: UserModel;
  departure: PlaceModel;
  driveHistory: DriveHistory[];
}

export interface DriveHistory {
  id: number;
  driveId: number;
  status: DriveStatus;
  cancelReason: string;
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
