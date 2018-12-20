interface Subtitles {
}
interface PlayerAudioTrack {
}
interface Timeline {
}
interface TimeSample {
}
interface FilmStripDrawer {
}
interface VGPlugin {
}
interface TimeRange {
}
interface LogLevel {
}
interface PlayerOptions {
    logLevel?: LogLevel;
    enableCORS?: boolean;
    staticVideoSrc?: boolean;
    hotkeys?: boolean;
    serverUrl?: string;
    playlist?: boolean;
    search?: boolean;
    streaming?: string;
    plugins?: string[];
    theme?: string;
    preservePlaybackRate?: boolean;
    allowCrossSiteCredentials?: boolean;
    queryParams?: any;
}
export interface Player {
    new (container: HTMLElement, options: PlayerOptions): VGPlayerPublicApi;
}
export interface VGPlayerPublicApi {
    close(): any;
    addCaptionsHandler(cb: () => void): any;
    audioAddHandler(cb: () => void): any;
    addCaptions(input: Subtitles): any;
    load(url: string, onDone: (o: any) => void): any;
    loadUrl(url: string, onDone: (o: any) => void): any;
    loadAudioTrack(url: string, displayName: string, onDone: (o: any) => void): any;
    setAudioTrackUrl(trackId: string, url: string, onDone: (o: any) => void): any;
    conformAudioTrack(trackId: string, offset: number): any;
    getAudioTrack(id: string): PlayerAudioTrack;
    setCurrentAudioTrack(id: string): any;
    addAudioTrack(displayName: string, channelNames: string[]): string;
    addAudioTrackWithId(id: string, displayName: string, channelNames: string[]): string;
    muteAudioTrack(id: string): any;
    togglePlay(): any;
    play(): any;
    pause(): any;
    getTimeline(): Timeline;
    getCurrentTapeTimecode(): string;
    getCurrentStandardTimecode(): string;
    getCurrentFrame(): number;
    getCurrentTime(): number;
    getCurrentTimeValue(): number;
    getCurrentUTCTimestamp(): string;
    seekSec(time: number): any;
    seekUTCTimestamp(timestamp: string): any;
    seek(anything: any): any;
    seekFrame(fn: number): any;
    nextFrame(n: number): any;
    previousFrame(n: number): any;
    nextSec(n: number): any;
    previousSec(n: number): any;
    enterFullscreen(): any;
    exitFullscreen(): any;
    setRange(fromTimecode: any, toTimecode: any): any;
    cancelRange(): any;
    hasRange(): boolean;
    playAtRate(rate: number): any;
    playFasterBackwards(): any;
    playFaster(): any;
    setLoop(loop: boolean): any;
    setPauseOnLoop(pauseOnLoop: boolean): any;
    getPlaybackRate(): number;
    isPlaying(): boolean;
    getCurrentAudioTrack(): PlayerAudioTrack;
    isAudioMutable(): boolean;
    setVolume(val: number): any;
    getVolume(): number;
    getSeekableDurationSec(): number;
    getDurationSec(): number;
    getTimeSample(): TimeSample;
    setVideoQuality(res: string): any;
    setStartTapeTimecode(tapeTimecode: string): any;
    getStartTapeTimecode(): string;
    getCaptionsList(): Array<Subtitles>;
    getAudioTracks(): Array<PlayerAudioTrack>;
    disableHotKeys(): any;
    enableHotKeys(): any;
    addEventListener<T>(type: string, handler: (o: T) => void): any;
    removeEventListener(type: string, handler: () => void): any;
    getFilmStripDrawer(callback: (d: FilmStripDrawer) => void): any;
    registerPlugin(plugin: VGPlugin): any;
    getBuffered(): Array<TimeRange>;
    setLogLevel(logLevel: LogLevel): any;
    isLive(): boolean;
    setStartUTCTimestamp(timestamp: string): any;
    getStartUTCTimestamp(): string;
}
export {};
