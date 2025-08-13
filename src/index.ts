import Text from './message/text-message';
import Url from './message/url-message';
import Contact from './message/contact-message';
import File from './message/file-message';
import Location from './message/location-message';
import Picture from './message/picture-message';
import Video from './message/video-message';
import Sticker from './message/sticker-message';
import RichMedia from './message/rich-media-message';
import Keyboard from './message/keyboard-message';

export { default as Bot } from './viber-bot';
export { default as Events } from './event-consts';
export { default as UserProfile } from './user-profile';
export const Message = {
    Text,
    Url,
    Contact,
    File,
    Location,
    Picture,
    Video,
    Sticker,
    RichMedia,
    Keyboard,
};
