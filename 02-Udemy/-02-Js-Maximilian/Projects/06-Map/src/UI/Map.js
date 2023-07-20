import ol from "core-js/internals/map-helpers";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import {View} from "ol";
import Map from 'ol/Map';
import {useGeographic} from "ol/proj";


// document.getElementById('map').innerHTML = '';
// clear the <p> in the <div id="map">


useGeographic();
export const map = (lng, lat) => {
    document.getElementById('map').innerHTML = '';
    
    const m = new Map({
        target: 'map',
        layers: [
            new TileLayer({
                source: new OSM()
            })
        ],
        view: new View({
            center: [lng, lat],
            zoom: 15
        })
    });
    
    return m;
};
// const zoomout = document.getElementById('zoom-out');
// const zoomIn = document.getElementById('zoom-in');
//
// if (document.getElementById('zoom-out')){
//
// }
//
// document.getElementById('zoom-out').onclick = function () {
//     const view = map.getView();
//     const zoom = view.getZoom();
//     view.setZoom(zoom - 1);
// };
//
// document.getElementById('zoom-in').onclick = function () {
//     const view = map.getView();
//     const zoom = view.getZoom();
//     view.setZoom(zoom + 1);
// };

// export async function getAddressFromCoords(coords) {
//     return '6th Avenue'; // return any dummy address you want
// }
//
// export async function getCoordsFromAddress(address) {
//     return {lat: 47.01, lng: 33.55}; // return any dummy coordinates you want
// }