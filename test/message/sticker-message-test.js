"use strict";

const StickerMessage = require(__dirname + "/../../lib/message/sticker-message");

exports.testBuildStickerMessageSanity = test => {
	const stickerId = 123;
	const stickerUrl = "http://dummy.url";
	const message = new StickerMessage(stickerId, stickerUrl);
	const messageBody = { "type": "sticker", "sticker_id": stickerId, "url": stickerUrl };

	test.deepEqual(message.toJson(), messageBody);
	test.ok(!message.keyboard);
	test.done();
};

exports.testBuildStickerMessageWithKeyboard = test => {
	const keyboard = { foo: "bar" };
	const message = new StickerMessage(1234, keyboard);

	test.deepEqual(message.keyboard, keyboard);
	test.done();
};
