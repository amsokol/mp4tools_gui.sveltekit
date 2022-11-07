export type OnChangeEvent = {
    value: string
}

export enum FileInputType {
    Video,
    Audio,
    Subtitles
}

export { default as FileInput } from './file_input.svelte'
