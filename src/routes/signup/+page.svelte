<script lang="ts">
	import { Auth } from 'aws-amplify';
	import { invalidateAll, goto } from '$app/navigation';

	let email: any, password: any, authUser: any;
	let code = '';
	let verifying = false;
	let loading = false;

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
</script>

<input type="email" placeholder="email" bind:value={email} />
<input type="password" placeholder="password" bind:value={password} />
<button on:click={handleSignup}>
	{verifying ? 'Verify' : 'Sign up'}
</button>
{#if verifying}
	<input type="text" placeholder="code" bind:value={code} />
{/if}
