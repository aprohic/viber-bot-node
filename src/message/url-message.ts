//@ts-nocheck

import util from 'util';
import Message from './message';

const REQUIRED_ARGUMENTS = ['url'];

export default function UrlMessage(url, optionalKeyboard, optionalTrackingData, timestamp, token, minApiVersion) {
    this.url = url ? encodeURI(url) : null;

    UrlMessage.super_.apply(this, [
        REQUIRED_ARGUMENTS,
        optionalKeyboard,
        optionalTrackingData,
        timestamp,
        token,
        minApiVersion,
    ]);
}

util.inherits(UrlMessage, Message);

UrlMessage.fromJson = function (jsonMessage, timestamp, token) {
    return new UrlMessage(jsonMessage.media, null, jsonMessage.tracking_data, timestamp, token);
};

UrlMessage.getType = function () {
    return 'url';
};

UrlMessage.prototype.toJson = function () {
    return {
        type: UrlMessage.getType(),
        media: this.url,
    };
};
