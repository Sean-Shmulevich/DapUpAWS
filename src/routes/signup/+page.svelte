<script lang="ts">
	import { Auth, API } from 'aws-amplify';
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

	const formData = {
		email: 'fhdafjlasj@fdlsajfasld.com',
		name: 'testName',
		uni: 'testUni',
		year: 'testYear',
		gender: 'testGender',
		'Agree to our terms of service': 'true'
	};

	const publicRequest = async () => {
		let response = '';
		try {
			response = await API.post('PrismaApi', '/post', {
				headers: {
					Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
					'Content-Type': 'application/json'
				},
				body: formData
			});
			alert(JSON.stringify(response));
		} catch (error) {
			//No current user.
			alert(error);
		}
	};
</script>

<input type="email" placeholder="email" bind:value={email} />
<input type="password" placeholder="password" bind:value={password} />
<form method="POST">
	<button type="button" on:click={() => publicRequest()}> Create Test User </button>
</form>
<button on:click={handleSignup}>
	{verifying ? 'Verify' : 'Sign up'}
</button>
{#if verifying}
	<input type="text" placeholder="code" bind:value={code} />
{/if}
