<script lang="ts">
	import { Amplify } from 'aws-amplify';
	import awsmobile from '$lib/aws-exports';
	import { Button, Dropdown, DropdownItem, Avatar } from 'flowbite-svelte';
	import '../app.css';
	Amplify.configure(awsmobile);

	let logInStatus = 'not authenticated';
</script>

<!-- <header> -->
<!-- 	{#if $page.session} -->
<!-- 		<div> -->
<!-- 			<strong>Hello {$page.session.user?.name}</strong> -->
<!-- 			<button on:click|preventDefault={signOut} class="button">Sign out</button> -->
<!-- 		</div> -->
<!-- 	{:else} -->
<!-- 		<a href="/auth/login" class="buttonPrimary">Sign in</a> -->
<!-- 	{/if} -->
<!-- </header> -->
<header class="w-full body-font bg-gray-800">
	<div class="container sticky mx-auto flex pt-5 flex-row justify-center items-center">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			href="/"
			class="flex title-font font-mediums items-center text-white mb-4 md:mb-0"
			style="margin-top:-18px"
		>
			<img
				class=" transform scale-80 sm:mr-6 md:mr-0 mt-3 md:mt-0 sm:scale-100 w-40"
				src={'https://slimecars.com/assets/dapuplogo.png'}
			/>
		</a>
		<nav
			class="md:ml-auto block items-center text-base justify-center z-[100]"
			style="margin-bottom:18px"
		>
			{#if logInStatus === 'not authenticated'}
				<!-- <span class="mr-6 text-white">Login/Sign Up: </span> -->
				<a
					href="/login"
					class="hover:text-yellow-500 tracking-wide text-sm sm:text-lg hover:bg-gray-800 bg-gray-500 text-white font-semibold inline-flex items-center sm:-mr-5 px-2 sm:px-4 py-2 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30"
				>
					Login/Sign Up
				</a>
			{:else}
				<Button
					pill
					class="h-full w-full bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100
						text-white !p-1"
					id="avatar_with_name"
				>
					<Avatar src={profilePicture} />
					<p class="pl-1">{user.name}</p>
					<svg
						class="mx-1 sm:mx-2"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<!-- Top Line -->
						<rect x="3" y="4.5" width="18" height="1.5" rx="0.75" fill="currentColor" />
						<!-- Middle Line -->
						<rect x="3" y="11" width="18" height="1.5" rx="0.75" fill="currentColor" />
						<!-- Bottom Line -->
						<rect
							x="3"
							y="17.5"
							width="18"
							height="1.5"
							rx="0.75"
							fill="currentColor"
						/>
					</svg>
				</Button>
			{/if}
		</nav>
	</div>
	<div class="z-10 relative">
		{#if logInStatus !== 'not authenticated'}
			<Dropdown
				class="z-12 text-white bg-gray-700 rounded-lg"
				triggeredBy="#avatar_with_name"
			>
				{#if logInStatus === 'email authenticated'}
					<div class="px-4 py-2 bg-red-700">
						<span class="block text-sm text-white"> Waiting on verification </span>
					</div>
				{/if}

				{#if !user.isBrand}
					{#if logInStatus === 'fully authenticated'}
						<DropdownItem class="hover:bg-gray-600 text-center" href="/deals"
							>Discover</DropdownItem
						>
						<DropdownItem class="hover:bg-gray-600 text-center" href="/matches"
							>Matches</DropdownItem
						>
					{/if}
					<DropdownItem
						class="hover:bg-gray-600 text-center"
						href="/user-profile/{user.userId}">View Profile</DropdownItem
					>
					<DropdownItem
						class="hover:bg-gray-600 text-center"
						href="/edit-profile/{user.userId}">Edit Profile</DropdownItem
					>
				{:else}
					<DropdownItem
						class="hover:bg-gray-600 text-center"
						href="/brand-profile/{user.userId}">View Profile</DropdownItem
					>
					<DropdownItem
						class="hover:bg-gray-600 text-center"
						href="/brand-edit-profile/{user.userId}">Edit Profile</DropdownItem
					>

					{#if logInStatus === 'fully authenticated'}
						<!-- <DropdownItem  class="hover:bg-gray-600 text-center" href="/brand-create-offer"
									>Create Deal</DropdownItem
								> -->
						<DropdownItem class="hover:bg-gray-600 text-center" href="/creation-center"
							>Creation Center</DropdownItem
						>
					{:else}
						<DropdownItem
							class="hover:bg-gray-600 text-center"
							href="/creation-center-clone">Creation Center</DropdownItem
						>
						<DropdownItem
							class=" text-center hover:bg-blue-500 bg-blue-500"
							target="_blank"
							href="https://buy.stripe.com/7sI8zt13w9zwclWdQS"
							>Purchase Subscription</DropdownItem
						>
					{/if}
				{/if}

				<form action="?/logout" class="text-center mx-auto" method="post" use:enhance>
					<DropdownItem class="text-center hover:bg-gray-600 " type="submit" slot="footer"
						>Sign out</DropdownItem
					>
				</form>
			</Dropdown>
		{/if}
	</div>
</header>

<main class="bg-gray-900 overflow-x-hidden font-sans" style="touch-action: manipulation;">
	<slot />
</main>
