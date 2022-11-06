<script lang="ts" context="module">
	export type OnChangeEvent = {
		value: string
	}
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher<{ change: OnChangeEvent }>()

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
	<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for={button_id}
		>{label ? label : ''}</label
	>
{/if}
<div class="relative">
	<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			class="w-5 h-5 text-gray-500 dark:text-gray-400"
			viewBox="0 0 16 16"
		>
			<path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z" />
			<path
				d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"
			/>
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
		class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
       focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
       invalid:bg-red-50 invalid:border invalid:border-red-500 invalid:focus:ring-red-500
       invalid:focus:border-red-500 invalid:dark:bg-gray-700 invalid:dark:border-red-500
       invalid:dark:focus:border-red-500 invalid:dark:focus:ring-red-500"
		placeholder="File"
		{required}
	/>
	<button
		on:click={onBrowseFile}
		id={button_id}
		type="button"
		class="absolute right-1.5 bottom-1.5 text-blue-700  hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
		>Browse</button
	>
</div>
