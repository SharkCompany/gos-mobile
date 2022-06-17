export interface PlaceModel {
  id: number;
  title: string;
  address: string;
  geometry: {
    latitude: number;
    longitude: number;
  };
}
export interface PlaceModelFromServer {
  id: number;
  title: string;
  address: string;
  latitude: string;
  longitude: string;
}
