<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { invalidateAll, goto } from '$app/navigation';
	import { Auth } from 'aws-amplify';
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

	async function handleSignup() {
		if (verifying) {
			try {
				await Auth.confirmSignUp(email, code);
				await goto('/login');
			} catch (error) {
				alert(error);
			}
		} else {
			try {
				await Auth.signUp({
					username: email,
					password
				});
				verifying = true;
			} catch (error) {
				alert(error);
			}
		}
	}
	const signOut = async () => {
		await Auth.signOut();
		authUser = null;
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

	<button on:click={signOut}>Sign Out</button>
	<a href="/signup">Don't have an account? Sign up </a>
	<a href="/login"> Already have an account? Login </a>
</div>
<!-- <form name="login" method="POST" on:submit|preventDefault={handleSubmit}> -->
<!-- 	<input name="email" type="email" placeholder="Email Address" /> -->
<!-- 	<input name="password" placeholder="Password" type="password" /> -->
<!-- 	<button>Sign In</button> -->
<!-- </form> -->
