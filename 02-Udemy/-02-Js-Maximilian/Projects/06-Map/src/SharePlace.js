import { Modal } from './UI/Modal';
import {map} from './UI/Map';
import {getAddressFromCoords, getCoordsFromAddress} from "./utility/Location";

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');
        this.shareBtn = document.getElementById('share-btn')
        
        locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
        addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
        this.shareBtn.addEventListener('click', this.sharePlaceHandler)
    }
    
    sharePlaceHandler() {
        const sharedLinkInputEl = document.getElementById('share-link');
        if (!navigator.clipboard) {
            sharedLinkInputEl.select();
            return;
        }
        navigator.clipboard.writeText(sharedLinkInputEl.value)
            .then(() => {
                alert('Copied into clipboard');
            })
            .catch(err => {
                console.log(err)
                sharedLinkInputEl.select();
            });
    }
    
    selectPlace(lng, lat, address) {
        // if (!this.map) {
            this.map = map(lng, lat);
        // }
        this.shareBtn.disabled = false;
        const sharedLinkInputEl = document.getElementById('share-link');
        sharedLinkInputEl.value =
            `${location.origin}/06-Map/dist/my-place?address=${address}&lat=${lat}&lng=${lng}`;
    }
    
    locateUserHandler() {
        if (!navigator.geolocation) {
            alert(
                'Location feature is not available in your browser - please use a more modern browser or manually enter an address.'
            );
            return;
        }
        const modal = new Modal('loading-modal-content', 'Loading location - please wait!');
        modal.show();
        navigator.geolocation.getCurrentPosition(
            async successResult => {
                const coordinates = {
                    lat: successResult.coords.latitude,
                    lng: successResult.coords.longitude,
                };
                const address =
                    await getAddressFromCoords(
                        `${coordinates.lat},${coordinates.lng}`
                    );
                console.log(address);
                this.selectPlace(
                    coordinates.lng,
                    coordinates.lat,
                    address.formatted
                );
                modal.hide();
            },
            error => {
                modal.hide();
                alert(
                    'Could not locate you unfortunately. Please enter an address manually!'
                );
            }
        );
    }
    
    async findAddressHandler(event) {
        event.preventDefault();
        const address = event.target.querySelector('input').value;
        if (!address || address.trim().length === 0) {
            alert('Invalid address entered - please try again!');
            return;
        }
        const modal = new Modal(
            'loading-modal-content',
            'Loading location - please wait!'
        );
        modal.show();
        
        try {
            const coordinates = await getCoordsFromAddress(address);
            this.selectPlace(
                coordinates.lng,
                coordinates.lat,
                address
            );
        } catch (err) {
            alert(err.message);
        }
        modal.hide();
    }
}

new PlaceFinder();