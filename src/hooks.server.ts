// https://kit.svelte.dev/docs/hooks
// In this file we can modify response headers  or bodies 
//" This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example)."
// here I can automatically add headers to all requests and 
// import { Auth } from 'aws-amplify';

// /** @type {import('@sveltejs/kit').Handle} */
// export async function handle({ event, resolve }) {
//     if (event.url.pathname.startsWith('/custom')) {
//         return new Response('custom response');
//     }

//     const response = await resolve(event);
//     // response.headers.set('Authorization', `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`);
//     return response;
// }
import { isAuthenticated } from '$lib/auth';

// So in order to protect my routes I need to check the auth on the server side and redirect if not authenticated.
// I could also do this in this file and centrralize what routes are protected are which are not.
export async function handle({ event, resolve }) {
    // const isAuth = await isAuthenticated();
    // if (!isAuth) {
    //     return new Response(null, {
    //         status: 300,
    //         headers: { location: '/login' }
    //     })
    // }

    const response = await resolve(event);
    return response;
}