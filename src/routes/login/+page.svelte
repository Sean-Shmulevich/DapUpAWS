<script lang="ts">
	import { Auth } from 'aws-amplify';
	let email, password;
	export let authUser;

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
</script>

<div>hello world</div>
<div class="login">
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
