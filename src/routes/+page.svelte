<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { invalidateAll, goto } from '$app/navigation';
	import { Auth, API } from 'aws-amplify';
	let email: any, password: any, authUser: any;
	let code = '';
	let verifying = false;
	let loading = false;

	// Assuming `setScreen` is a prop passed to this component, in Svelte, we can use
	// an exported variable to achieve similar functionality.
	const getUser = async () => {
		const user = await Auth.currentUserInfo();
		if (user) {
			authUser = user;
		}
		loading = false;
	};

	const signOut = async () => {
		await Auth.signOut();
		authUser = null;
	};

	// default values should be ''
	const formData = {
		email: email,
		name: 'testName',
		university: 'testUni',
		year: 'testYear',
		'sport-preference': 'testSport',
		'gender-preference': 'testGender',
		'terms-of-service': 'yes'
	};

	const athleteSignup = async () => {
		const response = await API.post('PrismaApi', '/athleteSignup', {
			headers: {
				Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
				'Content-Type': 'application/json'
			},
			body: {
				formData
			}
		});
		alert(JSON.stringify(response));
	};

	getUser();
</script>

<!-- This Page shold be a homepage and the conditions should be used for
conditionally rendering the user menu if the user is loggged in, but actually
this should happen in +layout.svelte-->
<!-- The homepage probably needs no checks as to if a user is logged in. -->
<!-- Except if they're not then you should show the login/signup but this should maybe also be done in +layout.svelte-->
<!-- What about hooks do I need to use them? I should probably understand them better first -->
<div>
	{#if authUser}
		<p>Logged in</p>
		<p>Welcome, {authUser.attributes.email}</p>
	{:else}
		<a href="/signup">Don't have an account? Sign up </a>
		<a href="/login"> Already have an account? Login </a>
	{/if}

	<button on:click={signOut}>sign out</button>
	<!-- <button on:click={() => athleteSignup()}>PrismaReq</button> -->
</div>
<!-- <form name="login" method="POST" on:submit|preventDefault={handleSubmit}> -->
<!-- 	<input name="email" type="email" placeholder="Email Address" /> -->
<!-- 	<input name="password" placeholder="Password" type="password" /> -->
<!-- 	<button>Sign In</button> -->
<!-- </form> -->
