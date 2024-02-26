<script>
	import { Auth } from 'aws-amplify';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let email = '';
	let password = '';

	export let screen;

	async function login() {
		try {
			const user = await Auth.signIn(email, password);
			dispatch('userLoggedIn', { user });
			screen = '';
		} catch (error) {
			alert(error);
		}
	}

	function goToSignup() {
		screen = 'signup';
	}
</script>

<div class="login">
	<input type="email" placeholder="email" autoComplete="off" bind:value={email} />
	<input type="password" placeholder="password" bind:value={password} />

	<button on:click={login}> Login </button>
	<span on:click={goToSignup}> Don't have an account? Sign up </span>
</div>
