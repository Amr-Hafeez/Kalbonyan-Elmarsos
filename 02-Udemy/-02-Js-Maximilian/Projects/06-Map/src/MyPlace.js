import {map} from "./UI/Map";

class LoadedPlace {
    constructor(lat,lng, address) {
        map(lng, lat);
        const headerTitleEl = document.querySelector('header h1');
        headerTitleEl.textContent = address;
    }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
new LoadedPlace(
    +queryParams.lat,
    +queryParams.lng,
    queryParams.address
);