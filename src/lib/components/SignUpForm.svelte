<script lang="ts">
	import { enhance } from '$app/forms';
	// import type { ActionData } from './$types';
	// export let form: ActionData;
	export let showTOS = false;
	export let formTitle: string;

	//okay threes two design decisions right now
	// either make a json object to represent which fields are shown for each type of user of this
	// or pass in named slots into this component
	// on the backend though we would need to know what type of form it is?
	// but we could just keep the back ends local to each one.
	// builder vs factory pattern
	// just give this component the slots.

	// On the client side I should probably do nothing
	// Maybe I can show a message if the passwords are different or if they are
	// too short or something. but better not to handle any of that on the
	// client side.
</script>

<div class="rounded-xl bg-white px-10 pb-10 pt-0 -mt-10 max-w-[800px] mx-auto">
	<h1 class="pt-10">{formTitle}</h1>
	<form method="post" use:enhance>
		<slot />

		<label for="email">Email</label><br />
		<!-- <input class="w-full" id="email" name="email" value={form?.email ?? ''} /><br /> -->
		<input class="w-full" id="email" name="email" value={''} /><br />
		<label for="password">Password</label>
		<p>Password should be at least 8 characters long</p>
		<input class="w-full" id="password" name="password" type="password" /><br />
		<label for="confirm-password">Confirm password</label>
		<input class="w-full" id="confirm-password" name="confirm-password" type="password" /><br />

		<div class="w-full mb-2 align-start">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<label
				on:click={() => {
					showTOS = true;
				}}
				class="text-blue-500 underline mr-2"
				for="checkbox">Agree to our terms of service</label
			>
			<input
				class="transform translate-y-[2px]"
				type="checkbox"
				id="terms-of-service"
				name="terms-of-service"
				value="accepted"
			/>
		</div>
		<input type="submit" value="Continue" />
	</form>
	<!-- {#if form?.message} -->
	<!-- 	<p class="error">{form.message}</p> -->
	<!-- {/if} -->
	<a class="underline" href="/login">Sign in to existing account</a>
</div>

<style lang="postcss">
	.centerAll {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	h1 {
		/* TODO this styles could be problematic */
		@apply lg:mt-20 md:mt-24 sm:mt-28 mt-32  mb-2 w-full text-3xl font-semibold;
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
	input[type='submit'] {
		@apply mb-2 w-full cursor-pointer rounded border bg-black px-2 py-1.5 font-medium text-white;
	}
	p.message {
		@apply text-sm;
	}
	p.error {
		@apply text-sm text-red-400;
	}
	/* :global(main a) {
		@apply mx-auto block w-fit text-indigo-500  hover:underline;
	} */
	form {
		@apply my-2;
	}
	form p {
		@apply text-sm text-zinc-500;
	}
</style>
