//@ts-nocheck

import util from 'util';
import Message from './message';

const REQUIRED_ARGUMENTS = ['keyboard'];

export default function KeyboardMessage(keyboard, optionalTrackingData, timestamp, token, minApiVersion) {
    KeyboardMessage.super_.apply(this, [
        REQUIRED_ARGUMENTS,
        keyboard,
        optionalTrackingData,
        timestamp,
        token,
        minApiVersion,
    ]);
}

util.inherits(KeyboardMessage, Message);

KeyboardMessage.fromJson = function (jsonMessage, timestamp, token) {
    return new KeyboardMessage(jsonMessage.keyboard, jsonMessage.tracking_data, timestamp, token);
};

KeyboardMessage.getType = function () {
    return null;
};

KeyboardMessage.prototype.toJson = function () {
    return {};
};
