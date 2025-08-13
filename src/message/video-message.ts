//@ts-nocheck

import util from 'util';
import Message from './message';

const REQUIRED_ARGUMENTS = ['url'];

// current issue: size is mandatory when sending, but optional on receiving
export default function VideoMessage(
    url,
    size,
    optionalText,
    optionalThumbnail,
    optionalDuration,
    optionalKeyboard,
    optionalTrackingData,
    timestamp,
    token,
    minApiVersion
) {
    this.url = url;
    this.size = size;
    this.text = optionalText || null;
    this.thumbnail = optionalThumbnail || null;
    this.duration = optionalDuration || null;

    VideoMessage.super_.apply(this, [
        REQUIRED_ARGUMENTS,
        optionalKeyboard,
        optionalTrackingData,
        timestamp,
        token,
        minApiVersion,
    ]);
}

util.inherits(VideoMessage, Message);

VideoMessage.fromJson = function (jsonMessage, timestamp, token) {
    return new VideoMessage(
        jsonMessage.media,
        jsonMessage.size,
        jsonMessage.text,
        jsonMessage.thumbnail,
        jsonMessage.duration,
        null,
        jsonMessage.tracking_data,
        timestamp,
        token
    );
};

VideoMessage.getType = function () {
    return 'video';
};

VideoMessage.prototype.toJson = function () {
    return {
        type: VideoMessage.getType(),
        media: this.url,
        text: this.text,
        thumbnail: this.thumbnail,
        size: this.size,
        duration: this.duration,
    };
};
