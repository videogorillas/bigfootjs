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
    logLevel: LogLevel;
    enableCORS: boolean; // this will actually allow CORS requests for video elements across origins
    staticVideoSrc: boolean;
    hotkeys: boolean;
    serverUrl: string;
    playlist: boolean;
    search: boolean;
    streaming: string; // enum? : “vfile” / “cutlist” / “dash” - streaming type. Default is “dash”.
    plugins: string[];//: ['filmstrip', 'waveform', 'selections'] - an array of available plugins
    theme: string;
    preservePlaybackRate: boolean; // true = resume playback at previous rate after pause, false = reset to 1x
    allowCrossSiteCredentials: boolean; // true = allow cookies etc in cross-domain requests
    // DRMOptions drm;
    queryParams: any; //Map<String,String>  appended to all requests (except drm license acquisition requests)
}

export interface Player {
    new (container: HTMLElement, options: PlayerOptions): VGPlayerPublicApi
}

export interface VGPlayerPublicApi {


    close ();


    addCaptionsHandler (cb: () => void);


    audioAddHandler (cb: () => void);


    addCaptions (input: Subtitles);


    load (url: string, onDone: (o: any) => void);


    loadUrl (url: string, onDone: (o: any) => void);


    loadAudioTrack (url: string, displayName: string, onDone: (o: any) => void);


    setAudioTrackUrl (trackId: string, url: string, onDone: (o: any) => void);


    conformAudioTrack (trackId: string, offset: number);


    getAudioTrack (id: string): PlayerAudioTrack;


    setCurrentAudioTrack (id: string);


    addAudioTrack (displayName: string, channelNames: string[]): string;


    addAudioTrackWithId (id: string, displayName: string, channelNames: string[]): string;


    muteAudioTrack (id: string);


    togglePlay ();


    play ();


    pause ();


    getTimeline (): Timeline;


    getCurrentTapeTimecode (): string;


    getCurrentStandardTimecode (): string;


    getCurrentFrame (): number;


    getCurrentTime (): number;


    getCurrentTimeValue (): number;


    getCurrentUTCTimestamp (): string;


    seekSec (time: number);


    seekUTCTimestamp (timestamp: string);


    seek (anything: any);


    seekFrame (fn: number);


    nextFrame (n: number);


    previousFrame (n: number);


    nextSec (n: number);


    previousSec (n: number);


    enterFullscreen ();


    exitFullscreen ();


    setRange (fromTimecode: any, toTimecode: any);


    cancelRange ();


    hasRange (): boolean;


    playAtRate (rate: number);


    playFasterBackwards ();


    playFaster ();


    setLoop (loop: boolean);


    setPauseOnLoop (pauseOnLoop: boolean);


    getPlaybackRate (): number;


    isPlaying (): boolean;


    getCurrentAudioTrack (): PlayerAudioTrack;


    isAudioMutable (): boolean;


    setVolume (val: number);


    getVolume (): number;


    getSeekableDurationSec (): number;


    getDurationSec (): number;


    getTimeSample (): TimeSample;


    setVideoQuality (res: string);


    setStartTapeTimecode (tapeTimecode: string);


    getStartTapeTimecode (): string;


    getCaptionsList (): Array<Subtitles>;


    getAudioTracks (): Array<PlayerAudioTrack>;


    disableHotKeys ();


    enableHotKeys ();


    addEventListener<T> (type: string, handler: (o: T) => void);


    removeEventListener (type: string, handler: () => void);


    getFilmStripDrawer (callback: (d: FilmStripDrawer) => void);


    registerPlugin (plugin: VGPlugin);


    getBuffered (): Array<TimeRange>;


    setLogLevel (logLevel: LogLevel);


    isLive (): boolean;


    setStartUTCTimestamp (timestamp: string);


    getStartUTCTimestamp (): string;
}