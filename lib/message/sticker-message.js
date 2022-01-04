"use strict";

const util = require('util');
const Message = require(__dirname + '/message');
const REQUIRED_ARGUMENTS = ["stickerId"];

function StickerMessage(stickerId, url, optionalKeyboard, optionalTrackingData, timestamp, token, minApiVersion) {
	this.stickerId = stickerId;
	this.url = url;

	StickerMessage.super_.apply(this, [REQUIRED_ARGUMENTS, optionalKeyboard, optionalTrackingData, timestamp, token, minApiVersion]);
}
util.inherits(StickerMessage, Message);

StickerMessage.fromJson = function(jsonMessage, timestamp, token) {
	return new StickerMessage(jsonMessage.sticker_id, jsonMessage.media, null, jsonMessage.tracking_data, timestamp, token);
};

StickerMessage.getType = function() {
	return "sticker";
};

StickerMessage.prototype.toJson = function() {
	return {
		"type": StickerMessage.getType(),
		"sticker_id": this.stickerId,
		"url": this.url
	};
};

module.exports = StickerMessage;
