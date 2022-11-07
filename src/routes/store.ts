import { writable } from 'svelte/store'

export type MuxDolbyVision = {
	sourceVideoTrack: string
	isVideoTrackTitle: boolean
	videoTrackTitle: string
	isNewFrameRate: boolean
	newFrameRate: string
	sourceAudioTrack: string
}

export const MuxDolbyVisionStore = writable<MuxDolbyVision>({
	sourceVideoTrack: '',
	isVideoTrackTitle: true,
	videoTrackTitle: 'mp4muxer2 v2.2.2 (based on https://github.com/DolbyLaboratories/dlb_mp4base)',
	isNewFrameRate: false,
	newFrameRate: '',
	sourceAudioTrack: ''
})
