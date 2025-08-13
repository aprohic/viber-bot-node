//@ts-nocheck

import util from 'util';
import Message from './message';

const REQUIRED_ARGUMENTS = ['latitude', 'longitude'];

export default function LocationMessage(
    latitude,
    longitude,
    optionalKeyboard,
    optionalTrackingData,
    timestamp,
    token,
    minApiVersion
) {
    this.latitude = latitude;
    this.longitude = longitude;

    LocationMessage.super_.apply(this, [
        REQUIRED_ARGUMENTS,
        optionalKeyboard,
        optionalTrackingData,
        timestamp,
        token,
        minApiVersion,
    ]);
}

util.inherits(LocationMessage, Message);

LocationMessage.fromJson = function (jsonMessage, timestamp, token) {
    return new LocationMessage(
        jsonMessage.location.lat,
        jsonMessage.location.lon,
        null,
        jsonMessage.tracking_data,
        timestamp,
        token
    );
};

LocationMessage.getType = function () {
    return 'location';
};

LocationMessage.prototype.toJson = function () {
    return {
        type: LocationMessage.getType(),
        location: {
            lat: this.latitude,
            lon: this.longitude,
        },
    };
};
