<script>
  import { Auth } from 'aws-amplify';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let email = '';
  let password = '';
  let code = '';
  let verifying = false;

  async function handleSignUp() {
    if (verifying) {
      try {
        await Auth.confirmSignUp(email, code);
        dispatch('changeScreen', { screen: 'login' });
      } catch (error) {
        alert(error.message);
      }
    } else {
      try {
        await Auth.signUp({
          username: email,
          password,
        });
        verifying = true; // Move to code verification step
      } catch (error) {
        alert(error.message);
      }
    }
  }

  function goToLogin() {
    dispatch('changeScreen', { screen: 'login' });
  }
</script>

<div class="signup">
  <input
    type="email"
    placeholder="email"
    bind:value={email}
  />
  <input
    type="password"
    placeholder="password"
    bind:value={password}
  />
  {#if verifying}
    <input
      type="text"
      placeholder="code"
      bind:value={code}
    />
  {/if}
  <button on:click={handleSignUp}>
    {verifying ? 'Verify' : 'Sign up'}
  </button>
  <span on:click={goToLogin}>
    Already have an account? Login
  </span>
</div>
