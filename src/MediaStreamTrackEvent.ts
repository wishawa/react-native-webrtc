import { Event } from 'event-target-shim';
import type MediaStreamTrack from './MediaStreamTrack';

export default class MediaStreamTrackEvent extends Event<string> {
    track: MediaStreamTrack;
    constructor(type, eventInitDict: { track: MediaStreamTrack }) {
		super(type, {});
        this.track = eventInitDict.track;
    }
}
