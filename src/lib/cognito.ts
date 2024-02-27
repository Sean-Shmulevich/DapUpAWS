import { Auth } from 'aws-amplify';

export const getUser = async () => {
	const user = await Auth.currentUserInfo();
	if (user) {
		return user;
	}
};

export const signOut = async () => {
	await Auth.signOut();
};