import { PlaceModelFromServer, PlaceModel } from "models/Place.model";

export function formatPlacesFromServer(
  places: PlaceModelFromServer[]
): PlaceModel[] {
  let results: PlaceModel[] = [];
  places.forEach((place) => {
    let newPlace: PlaceModel = {
      id: place.id,
      address: place.address,
      title: place.title,
      geometry: {
        longitude: parseInt(place.longitude),
        latitude: parseInt(place.latitude),
      },
    };
    results.push(newPlace);
  });
  return results;
}
