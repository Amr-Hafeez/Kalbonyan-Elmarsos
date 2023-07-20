import * as opencage from "opencage-api-client";

const API_KEY = '0a8187545fe6474d8304557540727f3d';

export const getCoordsFromAddress = async (address) => {
    let data;
    try {
        data = await opencage.geocode(
            { q: address, key: API_KEY }
        );
        // console.log(data);
    } catch (err) {
        throw new Error(data.status.message);
        // console.log('Error caught:', err.message);
    }
    return {
        lng: data.results[0].geometry.lng,
        lat: data.results[0].geometry.lat
    };
}

export const getAddressFromCoords = async (coords) => {
    try {
        const result = await opencage.geocode(
            {
                q: coords,
                language: 'ar',
                key: API_KEY
            }
        );
        console.log(result);
        return result.results[0];
    } catch (err) {
        throw new Error(data.status.message);
    }
}
