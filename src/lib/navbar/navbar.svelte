<script>
	import { page } from '$app/stores'
	import { DarkMode } from '$lib'

	$: activeUrl = $page.url.pathname
</script>

<nav class="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
	<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
		<span class="flex items-center">
			<img src="logo.png" class="mr-2 h-6 sm:h-9" alt="MP4 Tool Logo" />
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MP4 Tool</span>
		</span>
		<div class="flex items-center md:order-2 space-x-2">
			<button
				data-collapse-toggle="mega-menu"
				type="button"
				class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mega-menu"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					aria-hidden="true"
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
			<DarkMode />
			<button
				type="button"
				data-tooltip-target="github-repo"
				data-tooltip-placement="bottom"
				on:click={() => window.open('https://github.com/amsokol', '_blank')}
				class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700
			focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
			>
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
					0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
					1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088
					2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988
					1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115
					2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0
					3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0
					.268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<div
				id="github-repo"
				role="tooltip"
				class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg
        shadow-sm opacity-0 tooltip dark:bg-gray-700"
			>
				Repo on GitHub
				<div class="tooltip-arrow" data-popper-arrow />
			</div>
		</div>
		<div id="mega-menu" class="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1">
			<ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-9 md:mt-0">
				<li>
					<button
						id="mux-menu-dropdown-button"
						data-dropdown-toggle="mux-menu-dropdown"
						class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 group"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="mr-1 w-5 h-5 group-hover:text-blue-600 dark:group-hover:text-blue-500"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
							/>
						</svg>
						Mux
						<svg
							aria-hidden="true"
							class="ml-1 w-5 h-5 md:w-4 md:h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
					<div
						id="mux-menu-dropdown"
						class="grid hidden absolute z-10 grid-cols-1 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-1 dark:bg-gray-700"
						style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 10px, 0px);"
						data-popper-reference-hidden=""
						data-popper-escaped=""
						data-popper-placement="bottom"
					>
						<div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
							<ul class="space-y-4" aria-labelledby="mux-menu-dropdown-button">
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Dolby Vision</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Create MP4 file with Dolby Vision support<br />by muxing video, audio and subtitles tracks.</span
										>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<button
						id="audio-menu-dropdown-button"
						data-dropdown-toggle="audio-menu-dropdown"
						class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
					>
						<svg
							class="mr-1 w-5 h-5 group-hover:text-blue-600 dark:group-hover:text-blue-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
							/></svg
						>
						Audio
						<svg
							aria-hidden="true"
							class="ml-1 w-5 h-5 md:w-4 md:h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
					<div
						id="audio-menu-dropdown"
						class="grid hidden absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-2 dark:bg-gray-700"
						style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 10px, 0px);"
						data-popper-reference-hidden=""
						data-popper-escaped=""
						data-popper-placement="bottom"
					>
						<div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
							<ul class="space-y-4" aria-labelledby="audio-menu-dropdown-button">
								<li>
									<a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
										About Us
									</a>
								</li>
								<li>
									<a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
										Library
									</a>
								</li>
								<li>
									<a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
										Resources
									</a>
								</li>
								<li>
									<a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
										Pro Version
									</a>
								</li>
							</ul>
						</div>
						<div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
							<ul class="space-y-4">
								<li>
									<a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
										Blog
									</a>
								</li>
								<li>
									<a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
										Newsletter
									</a>
								</li>
								<li>
									<a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
										Playground
									</a>
								</li>
								<li>
									<a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
										License
									</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<button
						class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 group"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="mr-1 w-5 h-5 group-hover:text-blue-600 dark:group-hover:text-blue-500"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
							/>
						</svg>
						Video
					</button>
				</li>
				<li>
					<button
						class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 group"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="mr-1 w-5 h-5 group-hover:text-blue-600 dark:group-hover:text-blue-500"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
							/>
						</svg>
						Demux
					</button>
				</li>
			</ul>
		</div>
	</div>
</nav>

<!--
		<div id="mega-menu" class="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1">
			<ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
				<li>
					<button
						id="mux-menu-dropdown-button"
						data-dropdown-toggle="mux-menu-dropdown"
						class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
					>
						Mux <svg
							aria-hidden="true"
							class="ml-1 w-5 h-5 md:w-4 md:h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
					<div
						id="mux-menu-dropdown"
						class="grid hidden absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
						style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 10px, 0px);"
						data-popper-reference-hidden=""
						data-popper-escaped=""
						data-popper-placement="bottom"
					>
						<div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
							<ul class="space-y-1" aria-labelledby="mux-menu-dropdown-button">
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Dolby Vision</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Mux MP4 file (video+audio+subtitles) with<br />Dolby Vision support.</span
										>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<button
						id="mega-menu-dropdown-button"
						data-dropdown-toggle="mega-menu-dropdown"
						class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
					>
						Video <svg
							aria-hidden="true"
							class="ml-1 w-5 h-5 md:w-4 md:h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
					<div
						id="mega-menu-dropdown"
						class="grid hidden absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
						style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 10px, 0px);"
						data-popper-reference-hidden=""
						data-popper-escaped=""
						data-popper-placement="bottom"
					>
						<div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
							<ul class="space-y-1" aria-labelledby="mega-menu-dropdown-button">
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Online Stores</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Segmentation</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Marketing CRM</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
							</ul>
						</div>
						<div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
							<ul class="space-y-1">
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Online Stores</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Segmentation</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Marketing CRM</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
							</ul>
						</div>
						<div class="p-4 text-gray-900 dark:text-white">
							<ul class="space-y-1">
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Online Stores</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Segmentation</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Marketing CRM</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<button
						id="mega-menu-dropdown-button"
						data-dropdown-toggle="mega-menu-dropdown"
						class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
					>
						Audio <svg
							aria-hidden="true"
							class="ml-1 w-5 h-5 md:w-4 md:h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
					<div
						id="mega-menu-dropdown"
						class="grid hidden absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
						style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 10px, 0px);"
						data-popper-reference-hidden=""
						data-popper-escaped=""
						data-popper-placement="bottom"
					>
						<div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
							<ul class="space-y-1" aria-labelledby="mega-menu-dropdown-button">
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Online Stores</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Segmentation</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Marketing CRM</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
							</ul>
						</div>
						<div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
							<ul class="space-y-1">
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Online Stores</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Segmentation</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Marketing CRM</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
							</ul>
						</div>
						<div class="p-4 text-gray-900 dark:text-white">
							<ul class="space-y-1">
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Online Stores</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Segmentation</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
										<div class="font-semibold">Marketing CRM</div>
										<span class="text-sm font-light text-gray-500 dark:text-gray-400"
											>Connect with third-party tools that you're already using.</span
										>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<a
						href="#"
						class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
						>Demux</a
					>
				</li>
			</ul>

-->
