import { Auth } from 'aws-amplify';

export async function isAuthenticated() {
    try {
        await Auth.currentAuthenticatedUser();
        return true;
    } catch (error) {
        return false;
    }
}