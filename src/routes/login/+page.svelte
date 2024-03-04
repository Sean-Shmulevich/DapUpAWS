<script lang="ts">
	import { Auth } from 'aws-amplify';
	let email: string, password: string;
	import Radio from '$lib/components/Radio.svelte';
	import SportRadio from '$lib/components/SportRadio.svelte';
	import TOS from '$lib/components/TOS.svelte';
	import SignUpForm from '$lib/components/SignUpForm.svelte';

	let genderPreference: string;
	let sportPref: string;
	// $: {
	// 	if (form && form.sport) {
	// 		sportPref = form.sport;
	// 	}
	// }

	//get type from AWS amplify.
	let authUser;
	let showTOS: boolean = false;

	async function handleLogin() {
		try {
			let user = await Auth.signIn(email, password);
			authUser = user;
		} catch (error) {
			alert(error);
			return;
		}
	}

	const getUser = async () => {
		const user = await Auth.currentUserInfo();
		if (user) {
			authUser = user;
		}
	};
	getUser();
	let form = { name: '', uni: '' };
</script>

{#if showTOS}
	<div
		class="centerAll border border-black w-[90%] overflow-y-scroll sm:w-[80%] h-[60vh] rounded-xl bg-white z-10 p-10"
	>
		<TOS bind:showTOS />
	</div>
{/if}

<!-- the signupform by default creates a form with the "email" and "password" inputs already in the form -->
<!-- <SignUpForm formTitle="Create an athlete account" bind:form bind:showTOS> -->
<SignUpForm formTitle="Create an athlete account" bind:showTOS>
	<label for="name">Full Name</label><br />
	<input class="w-full" id="name" name="name" value={form?.name ?? ''} /><br />

	<label for="university">University</label><br />
	<input class="w-full" id="university" name="university" value={form?.uni ?? ''} /><br />

	<label for="sport">Sport</label><br />
	<SportRadio bind:sportPref /><br />

	<label for="gender-preference">Gender</label><br />
	<Radio
		inputName={'gender-preference'}
		bind:selected={genderPreference}
		options={['Male', 'Female']}
		flexDirection="row"
	/>
</SignUpForm>
<div class="bg-white rounded-xl login p-5 m-5 mx-auto w-[300px]">
	{#if authUser}
		<p>Logged in</p>
		<p>Welcome, {authUser.attributes.email}</p>
		<a href="/">Go Home</a>
	{:else}
		<input type="email" placeholder="email" autoComplete="off" bind:value={email} />
		<input type="password" placeholder="password" bind:value={password} />
		<button on:click={() => handleLogin()}>Login </button>
	{/if}

	<!-- <span onClick={() => setScreen('signup')}> Don't have an account? Sign up </span> -->
</div>

<style lang="postcss">
	.centerAll {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	label {
		@apply mb-1 w-full text-sm font-medium;
	}
	input {
		@apply my-1 mb-2 rounded border-4 px-2 py-1.5;
	}
	input[type='checkbox'] {
		@apply my-1 mb-2 rounded border-4 px-2 py-1.5;
	}
</style>
