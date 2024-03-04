// import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

//this logic is used every time that that anybody acesses the homapage
export const load: PageServerLoad = async () => {
	//if (!user) {
	//	return { msg: 'not authenticated', user: null };
	//}
	//if (user.isAdmin) {
	//	throw redirect(302, '/admin/approve-users');
	//}
	////if the user is here it means they tried to create an account but their are not emailVerified yet and they cant do anything
	//if (!user.emailVerified) {
	//	throw redirect(302, '/email-verification');
	//}
	//if (!user.adminVerified) {
	//	//if the code execution comes here then the user is definitely logged in and email verified but not admin verified
	//	return {
	//		msg: 'email authenticated',
	//		user
	//	};
	//}
	//return {
	//	msg: 'fully authenticated',
	//	user
	//};
	return {
		msg: 'fully authenticated',
		user: null
	};
};

// (emailAddress: string, subject: string, content: string)
export const actions: Actions = {};
