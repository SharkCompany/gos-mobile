export interface PlaceModel {
  id: number;
  title: string;
  address: string;
  geometry: {
    latitude: string;
    longitude: string;
  };
}
export interface PlaceModelFromServer {
  id: number;
  title: string;
  address: string;
  latitude: string;
  longitude: string;
}
