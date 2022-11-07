<script lang="ts">
	import { onDestroy } from 'svelte'

	import { FileInput } from '$lib'
	import { classInput, classInputDisabled, classInputInvalid, classCheckbox, classCheckboxDisabled } from '$lib/styles'

	import { MuxDolbyVisionStore } from './store.js'
	import type { MuxDolbyVision } from './store.js'

	import { default as Breadcrumb } from './breadcrumb.svelte'

	let data: MuxDolbyVision

	const unsubscribe = MuxDolbyVisionStore.subscribe((store: MuxDolbyVision) => {
		data = store
	})

	function updateStore() {
		MuxDolbyVisionStore.update((_store: MuxDolbyVision) => {
			return data
		})
	}

	onDestroy(unsubscribe)
</script>

<Breadcrumb />

<div class="m-3">
	<FileInput
		id="source-video"
		label="Source video track path"
		required={true}
		bind:value={data.sourceVideoTrack}
		on:change={updateStore}
	/>

	<div class="flex gap-4 mt-4">
		<div class="shrink w-[50rem]">
			<label for="is-video-track-title" class="w-min mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>Video track title</label
			>
			<div class="flex gap-1.5">
				<input
					bind:checked={data.isVideoTrackTitle}
					id="is-video-track-title"
					type="checkbox"
					class={'mt-2 w-5 h-5' + classCheckbox + classCheckboxDisabled}
					on:change={updateStore}
					disabled={!data.sourceVideoTrack}
				/>
				<input
					bind:value={data.videoTrackTitle}
					type="text"
					id="video-track-title"
					placeholder="Title"
					class={'block p-2 w-full text-sm' + classInput + classInputDisabled + classInputInvalid}
					on:change={updateStore}
					disabled={!data.sourceVideoTrack || !data.isVideoTrackTitle}
					required={!(!data.sourceVideoTrack || !data.isVideoTrackTitle)}
				/>
			</div>
		</div>
		<div class="shrink w-60">
			<label for="is-new-frame-rate" class="w-min mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>Set new frame rate</label
			>
			<div class="flex gap-1.5">
				<input
					bind:checked={data.isNewFrameRate}
					id="is-new-frame-rate"
					type="checkbox"
					class={'mt-2 w-5 h-5' + classCheckbox + classCheckboxDisabled}
					on:change={updateStore}
					disabled={!data.sourceVideoTrack}
				/>
				<input
					bind:value={data.newFrameRate}
					type="text"
					id="new-frame-rate"
					placeholder="e.g. 24000/1001 or 23.967"
					class={'block p-2 w-full text-sm' + classInput + classInputDisabled + classInputInvalid}
					on:change={updateStore}
					disabled={!data.sourceVideoTrack || !data.isNewFrameRate}
					required={!(!data.sourceVideoTrack || !data.isNewFrameRate)}
					pattern="(\d+\/\d+)|(\d+(\.\d+)?)"
				/>
			</div>
		</div>
	</div>
</div>
