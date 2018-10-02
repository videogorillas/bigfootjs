interface ImageEncodeOptions {
    type: "image/png";
    quality: 1.0;
}
export interface OffscreenCanvas extends EventTarget {
    width: number;
    height: number;
    getContext(contextId: "2d", contextAttributes?: Canvas2DContextAttributes): CanvasRenderingContext2D | null;
    getContext(contextId: "webgl" | "experimental-webgl", contextAttributes?: WebGLContextAttributes): WebGLRenderingContext | null;
    getContext(contextId: string, contextAttributes?: {}): CanvasRenderingContext2D | WebGLRenderingContext | null;
    transferToImageBitmap(): ImageBitmap;
    convertToBlob(options: ImageEncodeOptions): Promise<Blob>;
}
export {};
