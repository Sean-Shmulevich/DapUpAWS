<script lang="ts">
	// import type { PageData } from './$types';
	import AthleteGuide from './AthleteGuide.svelte';
	import BrandGuide from './BrandGuide.svelte';
	import PrivacyPolicyModal from './PrivacyPolicyModal.svelte';
	import FounderCard from './FounderCard.svelte';

	let showPolicy = false;
	// export let data: PageData;

	let activeInfo: string = '';
	let textActive0 = false;
	// let textActive1 = false;
</script>

{#if showPolicy}
	<PrivacyPolicyModal bind:showPolicy />
{/if}

<section
	class="img-section -mb-[150px] sm:mb-[0px] sm:h-[90vh] sm:bg-[url('https://slimecars.com/assets/dapupmainimg.png')] text-white body-font mx-0"
	style="height:95vh; background-size:cover; background-position: center center; "
>
	<div class="container mx-auto flex px-5 py-24 items-center justify-center">
		<div class="text-center mt-[15vh] lg:w-full xl:w-full">
			<h1
				class="text-4xl text-white sm:text-gray-900 -mt-44 sm:mt-0 md:text-6xl lg:text-6xl xl:text-8xl font-bold leading-tight"
				style=""
			>
				The premier matchmaking platform for athletes and brands
			</h1>
		</div>
	</div>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img
		class="sm:hidden block mx-auto -mt-[65px] -mb-2"
		src="https://slimecars.com/assets/dapupmainimg.png"
	/>
	<a
		href="#learn-more"
		class="text-white sm:text-black font-extrabold inline-flex w-full mx-auto text-center mt-10 flex-col-reverse items-center hover:text-blue-700"
	>
		<svg
			class="w-5 h-5 ml-2 text-white sm:text-black"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 9l-7 9-9-9"
			/>
		</svg>
		Learn more about us
	</a>
</section>

<!-- Statistics -->
<section id="learn-more" class="text-gray-600 -mx-20 body-font">
	<div class="mt-5 container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-3xl text-2xl font-extrabold title-font mb-4 text-gold">
				The DapUp ABC’s
			</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
				DapUp is driven by 4 main pillars.
				<br />Our mission is simple.
			</p>
		</div>
		<div class="flex flex-wrap -m-4 text-center max-w-[90vw] mx-auto">
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<img
						src="https://slimecars.com/assets/athleteEmpowerment.png"
						alt="athlete empowerment"
						class="w-14 white-icon h-14 mb-3 inline-block"
					/>
					<h2 class="title-font font-medium text-3xl text-gray-300">A</h2>
					<p class=" text-white leading-relaxed">
						<span class="text-gold font-bold text-lg">A</span>thlete Empowerment
					</p>
				</div>
			</div>
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<img
						src="https://slimecars.com/assets/brandAlignment.png"
						alt="brand alignment"
						class="w-14 white-icon h-14 mb-3 inline-block"
					/>

					<h2 class="title-font font-medium text-3xl text-gray-300">B</h2>
					<p class="text-white leading-relaxed">
						<span class="font-bold text-lg text-gold">B</span>rand Alignment
					</p>
				</div>
			</div>
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<img
						src="https://slimecars.com/assets/community.png"
						alt="brand alignment"
						class="w-14 white-icon h-14 mb-3 inline-block"
					/>
					<h2 class="title-font font-medium text-3xl text-gray-300">C</h2>
					<p class="text-white leading-relaxed">
						<span class="font-bold text-lg text-gold">C</span>ommunity Impact
					</p>
				</div>
			</div>
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<img
						src="https://slimecars.com/assets/Data.png"
						alt="data"
						class="w-14 white-icon h-14 mb-3 inline-block"
					/>
					<h2 class="title-font font-medium text-3xl text-gray-300">D</h2>
					<p class="text-white leading-relaxed">
						<span class="font-bold text-lg text-gold">D</span>ata Driven Growth
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="text-gray-600 -mx-20 body-font">
	<div class="mt-5 container px-5 mx-auto">
		<div class="flex flex-col text-center w-full mb-12">
			<h1 class="sm:text-3xl text-2xl font-extrabold title-font mb-4 text-gold">
				How does DapUp work?
			</h1>
		</div>
		<div class="flex flex-wrap -m-4 text-center max-w-[90vw] mx-auto">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="p-4 sm:w-1/2 w-full cursor-pointer"
				on:click={() => {
					if (activeInfo === 'brand') {
						activeInfo = '';
					} else {
						activeInfo = 'brand';
					}
				}}
			>
				<div class="border-2 border-gray-200 hover:border-green-500 px-4 py-6 rounded-lg">
					<button class=" w-full text-white leading-relaxed">
						<h2 class="title-font font-medium text-3xl text-gray-100">Brand guide</h2>
					</button>
				</div>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="p-4 sm:w-1/2 w-full cursor-pointer"
				on:click={() => {
					if (activeInfo === 'athlete') {
						activeInfo = '';
					} else {
						activeInfo = 'athlete';
					}
				}}
			>
				<div class="border-2 border-gray-200 hover:border-green-500 px-4 py-6 rounded-lg">
					<button class=" w-full h-full text-white leading-relaxed">
						<h2 class="title-font font-medium text-3xl text-gray-100">Athlete guide</h2>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

{#if activeInfo === 'brand'}
	<section class="text-gray-600 body-font">
		<BrandGuide />
	</section>
{/if}

{#if activeInfo === 'athlete'}
	<section class="text-gray-600 body-font">
		<AthleteGuide />
	</section>
{/if}
<!-- Just the dropdown back up bottom att the bottom of the component -->
{#if activeInfo !== ''}
	<div style="display: grid; place-items: center;">
		<button
			class="h-auto text-center"
			on:click={() => {
				activeInfo = '';
			}}
		>
			<svg
				class="w-10 h-10 mx-auto text-white text-center"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				transform="scale(1, -1)"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 9l-7 7-7-7"
				/>
			</svg>
		</button>
	</div>
{/if}
<!-- Steps -->
<section class="text-gray-600 body-font -mt-10">
	<div class="container px-5 py-24 mx-auto flex flex-wrap">
		<div class="flex flex-wrap w-full">
			<div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
				<div class="flex relative pb-12">
					<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
						<div class="h-full w-1 bg-gray-200 pointer-events-none" />
					</div>
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-white inline-flex items-center justify-center text-white relative z-10"
					>
						<img
							src="https://slimecars.com/assets/customize.png"
							alt="launch"
							class="object-cover w-6 h-6"
						/>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm text-gray-200 mb-1 tracking-wider">
							Customize
						</h2>
						<p class="leading-relaxed text-white">
							Design a campaign using templates and recommendations from DapUp. Input
							athlete preferences, price range, dates, and deliverables.
						</p>
					</div>
				</div>
				<div class="flex relative pb-12">
					<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
						<div class="h-full w-1 bg-gray-200 pointer-events-none" />
					</div>
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-white inline-flex items-center justify-center text-white relative z-10"
					>
						<img
							src="https://slimecars.com/assets/launch.png"
							alt="launch"
							class="object-cover w-7 h-7 transform translate-x-[-1px] translate-y-[1px]"
						/>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm mb-1 tracking-wider text-white">
							Launch
						</h2>
						<p class="leading-relaxed text-white">
							Publish campaign and get exposure for your brand in front of NCAA
							athletes actively using DapUp.
						</p>
					</div>
				</div>
				<div class="flex relative pb-12">
					<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
						<div class="h-full w-1 bg-gray-200 pointer-events-none" />
					</div>
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-white inline-flex items-center justify-center text-white relative z-10"
					>
						<img
							src="https://slimecars.com/assets/match.png"
							alt="launch"
							class="object-cover w-7 h-7"
						/>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm text-white mb-1 tracking-wider">
							Match
						</h2>
						<p class="leading-relaxed text-white">
							Team up with athletes from your favorite teams. Choose the athlete you
							want to DapUp and connect with them directly.
						</p>
					</div>
				</div>
				<div class="flex relative pb-12">
					<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
						<div class="h-full w-1 bg-gray-200 pointer-events-none" />
					</div>
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-white inline-flex items-center justify-center text-white relative z-10"
					>
						<img
							src="https://slimecars.com/assets/contract.png"
							alt="launch"
							class="object-cover w-6 h-6 transform translate-x-[3px]"
						/>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm text-white mb-1 tracking-wider">
							Contract
						</h2>
						<p class="leading-relaxed text-white">
							Hire athletes for campaigns and receive contract templates from DapUp to
							work from.
						</p>
					</div>
				</div>
				<div class="flex relative">
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-white inline-flex items-center justify-center text-white relative z-10"
					>
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
							<path d="M22 4L12 14.01l-3-3" />
						</svg>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm text-white mb-1 tracking-wider">
							Manage
						</h2>
						<p class="leading-relaxed text-white">
							Keep track of all unpublished, active, and completed campaigns in one
							place.
						</p>
					</div>
				</div>
			</div>
			<img
				class="lg:w-3/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12 -mb-20"
				style="transform: scale(0.8) translateY(-90px)"
				src="https://slimecars.com/assets/selfie.png"
				alt="step"
			/>
		</div>
	</div>
</section>
<section class="text-gray-600 -mt-20 body-font mb-20">
	<div class="text-center w-full mb-12">
		<h1 class="sm:text-3xl text-2xl font-extrabold title-font mb-4 text-gold">Meet the team</h1>
	</div>
	<div
		class="mx-10 flex flex-col md:flex-row justify-center text-center items-center md:items-start"
	>
		<FounderCard founderName="Ayden" textActive={textActive0} />
		<FounderCard founderName="Quintin" textActive={textActive0} />
	</div>
</section>
<section class="bg-gray-900 -mt-5">
	<div class="py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
		<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gold">
			Contact Us
		</h2>
		<p class="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
			Got a technical issue? Want to send feedback? Let us know.
		</p>
		<form method="POST" action="?/contactForm" class="space-y-8">
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-300"
					>Your email</label
				>
				<input
					type="email"
					id="email"
					name="email"
					class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
					placeholder="name@flowbite.com"
					required
				/>
			</div>
			<div>
				<label for="subject" class="block mb-2 text-sm font-medium text-gray-300"
					>Subject</label
				>
				<input
					type="text"
					id="subject"
					name="subject"
					class="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
					placeholder="Let us know how we can help you"
					required
				/>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-300"
					>Your message</label
				>
				<textarea
					id="message"
					name="message"
					rows="6"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Leave a comment..."
				/>
			</div>
			<button
				type="submit"
				class="py-3 px-5 text-sm font-medium text-center bg-blue-600 text-white rounded-lg sm:w-fit border-2 hover:border-2 hover:border-green-500"
				>Send message</button
			>
		</form>
	</div>
</section>

<!-- Footer -->
<footer class="text-gray-600 body-font">
	<div class="bg-gray-800">
		<div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
			>
				<img
					src="https://slimecars.com/assets/dapup.png"
					alt="logo"
					class="lg:-ml-12 w-[180px] p2"
				/>
				<!-- <span class="ml-3 text-xl">Creative Solutions</span> -->
			</a>
			<p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" />
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<p
				on:click={() => {
					showPolicy = true;
				}}
				class=" text-blue-600 underline cursor-pointer sm:ml-auto"
			>
				Privacy policy
			</p>
			<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="text-gray-500">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
					</svg>
				</a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="ml-3 text-gray-500">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
						/>
					</svg>
				</a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="ml-3 text-gray-500">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
					</svg>
				</a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="ml-3 text-gray-500">
					<svg
						fill="currentColor"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="0"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							stroke="none"
							d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
						/>
						<circle cx="4" cy="4" r="2" stroke="none" />
					</svg>
				</a>
			</span>
		</div>
	</div>
</footer>
<!-- <script lang="ts"> -->
<!-- 	import { signIn } from '@auth/sveltekit/client'; -->
<!-- 	import { invalidateAll, goto } from '$app/navigation'; -->
<!-- 	import { Auth, API } from 'aws-amplify'; -->
<!-- 	let email: any, password: any, authUser: any; -->
<!-- 	let code = ''; -->
<!-- 	let verifying = false; -->
<!-- 	let loading = false; -->

<!-- 	// Assuming `setScreen` is a prop passed to this component, in Svelte, we can use -->
<!-- 	// an exported variable to achieve similar functionality. -->
<!-- 	const getUser = async () => { -->
<!-- 		const user = await Auth.currentUserInfo(); -->
<!-- 		if (user) { -->
<!-- 			authUser = user; -->
<!-- 		} -->
<!-- 		loading = false; -->
<!-- 	}; -->

<!-- 	const signOut = async () => { -->
<!-- 		await Auth.signOut(); -->
<!-- 		authUser = null; -->
<!-- 	}; -->

<!-- 	// default values should be '' -->
<!-- 	const formData = { -->
<!-- 		email: email, -->
<!-- 		name: 'testName', -->
<!-- 		university: 'testUni', -->
<!-- 		year: 'testYear', -->
<!-- 		'sport-preference': 'testSport', -->
<!-- 		'gender-preference': 'testGender', -->
<!-- 		'terms-of-service': 'yes' -->
<!-- 	}; -->

<!-- 	const athleteSignup = async () => { -->
<!-- 		const response = await API.post('PrismaApi', '/athleteSignup', { -->
<!-- 			headers: { -->
<!-- 				Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`, -->
<!-- 				'Content-Type': 'application/json' -->
<!-- 			}, -->
<!-- 			body: { -->
<!-- 				formData -->
<!-- 			} -->
<!-- 		}); -->
<!-- 		alert(JSON.stringify(response)); -->
<!-- 	}; -->

<!-- 	getUser(); -->
<!-- </script> -->

<!-- <!-1- This Page shold be a homepage and the conditions should be used for -->
<!-- conditionally rendering the user menu if the user is loggged in, but actually -->
<!-- this should happen in +layout.svelte--> -->
<!-- <!-1- The homepage probably needs no checks as to if a user is logged in. -1-> -->
<!-- <!-1- Except if they're not then you should show the login/signup but this should maybe also be done in +layout.svelte-->
-->

<!-- <!-1- What about hooks do I need to use them? I should probably understand them better first -1-> -->
<!-- <div> -->
<!-- 	{#if authUser} -->
<!-- 		<p>Logged in</p> -->
<!-- 		<p>Welcome, {authUser.attributes.email}</p> -->
<!-- 	{:else} -->
<!-- 		<a href="/signup">Don't have an account? Sign up </a> -->
<!-- 		<a href="/login"> Already have an account? Login </a> -->
<!-- 	{/if} -->

<!-- 	<button on:click={signOut}>sign out</button> -->
<!-- 	<!-1- <button on:click={() => athleteSignup()}>PrismaReq</button> -1-> -->
<!-- </div> -->
<!-- <!-1- <form name="login" method="POST" on:submit|preventDefault={handleSubmit}> -1-> -->
<!-- <!-1- 	<input name="email" type="email" placeholder="Email Address" /> -1-> -->
<!-- <!-1- 	<input name="password" placeholder="Password" type="password" /> -1-> -->
<!-- <!-1- 	<button>Sign In</button> -1-> -->
<!-- <!-1- </form> -1-> -->

<style>
	.text-gold {
		background: linear-gradient(45deg, #fde586 0%, #c29441 50%, #9b5d0e 100%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		letter-spacing: 0.1em;
	}

	@keyframes shine {
		0% {
			background-position: 200% center;
		}
		50% {
			background-position: 0% center;
		}
		100% {
			background-position: 200% center;
		}
	}
	.white-icon {
		filter: invert(1); /* Inverts the colors, making black white */
	}
</style>
