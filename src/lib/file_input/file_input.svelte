<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { classInput, classInputInvalid } from '$lib/styles'
	import { FileInputType } from '.'
	import type { OnChangeEvent } from '.'

	const dispatch = createEventDispatcher<{ change: OnChangeEvent }>()

	export let fileType: FileInputType
	export let required = false
	export let id: string
	export let label: string | undefined = undefined
	export let value: string

	function onBrowseFile() {
		alert('TODO: browse file')
	}

	function onChanged() {
		dispatch('change', {
			value: value
		})
	}

	let button_id = id + '-button'

	let displayed_input: HTMLInputElement
</script>

{#if label}
	<label class="w-min mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for={button_id}>{label}</label>
{/if}
<div class="relative">
	<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			class="w-5 h-5 text-gray-500 dark:text-gray-400"
			viewBox="0 0 16 16"
		>
			{#if fileType == FileInputType.Video}
				<path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z" />
				<path
					d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0
				1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"
				/>
			{:else if fileType == FileInputType.Audio}
				<path
					d="M11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.572 2.572 0 0 0 7
					11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0
					.974-.134 1.338-.377.36-.24.662-.628.662-1.123V8.89l2-.5V6.64z"
				/>
				<path
					d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0
					1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"
				/>
			{:else if fileType == FileInputType.Subtitles}
				<path
					d="M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0
					.47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694
					1.235h.5l-.057-2z"
				/>
				<path
					d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0
					0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
				/>
			{:else}
				<path
					d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0
					0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
				/>
			{/if}
		</svg>
	</div>
	<input
		bind:value
		on:keypress={(event) => {
			if (event.key === 'Enter') onBrowseFile()
		}}
		on:change={onChanged}
		type="text"
		{id}
		class={'block p-3 pl-10 w-full text-sm' + classInput + classInputInvalid}
		placeholder="File"
		{required}
	/>
	<button
		on:click={onBrowseFile}
		id={button_id}
		type="button"
		class="absolute right-1.5 bottom-1.5 text-blue-700  hover:text-white border border-blue-700
		hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2
		text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600
		dark:focus:ring-blue-800">Browse</button
	>
</div>
