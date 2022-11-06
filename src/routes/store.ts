import { writable } from 'svelte/store'

export type MuxDolbyVision = {
    sourceVideoTrack?: string
}

export const MuxDolbyVisionStore = writable<MuxDolbyVision>({})
