declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
    const content: string;
    export default content;
}
declare module '*.mp4';
