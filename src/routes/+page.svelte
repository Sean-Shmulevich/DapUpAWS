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

	const formData = {
		email: email,
		name: 'testName',
		university: 'testUni',
		year: 'testYear',
		'sport-preference': 'testSport',
		'gender-preference': 'testGender',
		'terms-of-service': 'yes'
	};

	const publicRequest = async () => {
		const response = await API.post('PrismaApi', '/post', {
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

<div>
	{#if authUser}
		<p>Logged in</p>
		<p>Welcome, {authUser.attributes.email}</p>
	{:else}
		<p>Not logged in</p>
	{/if}

	<button on:click={signOut}>sign out</button>
	<button on:click={() => publicRequest()}>PrismaReq</button>
	<a href="/signup">Don't have an account? Sign up </a>
	<a href="/login"> Already have an account? Login </a>
</div>
<!-- <form name="login" method="POST" on:submit|preventDefault={handleSubmit}> -->
<!-- 	<input name="email" type="email" placeholder="Email Address" /> -->
<!-- 	<input name="password" placeholder="Password" type="password" /> -->
<!-- 	<button>Sign In</button> -->
<!-- </form> -->
