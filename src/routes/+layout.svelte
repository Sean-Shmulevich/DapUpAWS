<script lang="ts">
	import { Amplify } from 'aws-amplify';
	import awsmobile from '$lib/aws-exports';
	import '../app.css';
	Amplify.configure(awsmobile);
</script>

<div>
	<!-- <header> -->
	<!-- 	{#if $page.data.session} -->
	<!-- 		<div> -->
	<!-- 			<strong>Hello {$page.data.session.user?.name}</strong> -->
	<!-- 			<button on:click|preventDefault={signOut} class="button">Sign out</button> -->
	<!-- 		</div> -->
	<!-- 	{:else} -->
	<!-- 		<a href="/auth/login" class="buttonPrimary">Sign in</a> -->
	<!-- 	{/if} -->
	<!-- </header> -->
	<slot />
</div>
