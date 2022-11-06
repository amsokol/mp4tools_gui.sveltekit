<script lang="ts">
	import { onDestroy } from 'svelte'

	import { FileInput } from '$lib'
	import type { OnFileInputChangeEvent } from '$lib'

	import { MuxDolbyVisionStore } from './store.js'
	import type { MuxDolbyVision } from './store.js'

	let data: MuxDolbyVision
	const unsubscribe = MuxDolbyVisionStore.subscribe((d: MuxDolbyVision) => {
		data = d
	})

	function onSourceVideoTrackChanged(event: CustomEvent<OnFileInputChangeEvent>) {
		MuxDolbyVisionStore.update((d: MuxDolbyVision) => {
			d.sourceVideoTrack = event.detail.value
			return d
		})
	}

	onDestroy(unsubscribe)
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol class="inline-flex items-center space-x-1 md:space-x-2 pt-1 pl-1">
		<li class="inline-flex items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="mr-1 w-5 h-5 text-gray-500 dark:text-gray-400"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
				/>
			</svg>
			<span class="text-sm font-medium text-gray-500  dark:text-gray-400">Mux</span>
		</li>
		<li aria-current="page">
			<div class="flex items-center">
				<svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Dolby Vision</span>
			</div>
		</li>
	</ol>
</nav>

<div class="m-3">
	<FileInput
		id="source-video"
		label="Source video track"
		required={true}
		value={data.sourceVideoTrack}
		on:change={onSourceVideoTrackChanged}
	/>
</div>
