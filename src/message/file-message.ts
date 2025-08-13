//@ts-nocheck

import util from 'util';
import Message from './message';

const REQUIRED_ARGUMENTS = ['url', 'sizeInBytes', 'filename'];

export default function FileMessage(
    url,
    sizeInBytes,
    filename,
    optionalKeyboard,
    optionalTrackingData,
    timestamp,
    token,
    minApiVersion
) {
    this.url = url;
    this.sizeInBytes = sizeInBytes;
    this.filename = filename;

    FileMessage.super_.apply(this, [
        REQUIRED_ARGUMENTS,
        optionalKeyboard,
        optionalTrackingData,
        timestamp,
        token,
        minApiVersion,
    ]);
}

util.inherits(FileMessage, Message);

FileMessage.fromJson = function (jsonMessage, timestamp, token) {
    return new FileMessage(
        jsonMessage.media,
        jsonMessage.size,
        jsonMessage.file_name,
        null,
        jsonMessage.tracking_data,
        timestamp,
        token
    );
};

FileMessage.getType = function () {
    return 'file';
};

FileMessage.prototype.toJson = function () {
    return {
        type: FileMessage.getType(),
        media: this.url,
        size: this.sizeInBytes,
        file_name: this.filename,
    };
};
