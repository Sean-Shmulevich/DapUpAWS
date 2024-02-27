import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { PrismaClient } from '../prisma';

const client = new PrismaClient();

function generateRandomString(length: number): string {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}
	return result;
}
export const handler: APIGatewayProxyHandlerV2 = async (event) => {
	// return {
	//     statusCode: 200,
	//     body: JSON.stringify({ message: "Hello, World!" }),
	// };

	console.log(event);
	// const body = await JSON.parse(event.body);
	// console.log(body);
	// const formData = await body.formData;
	const formData = {
		email: "seanshmulevich@pitt.edu",
		name: 'testName',
		uni: 'testUni',
		year: 'testYear',
		gender: 'testGender',
		'Agree to our terms of service': 'true',
		get(key: string) {
			return this[key];
		}
	};

	const fields: { [key: string]: string } = {
		email: formData.get('email')?.toString().toLowerCase() ?? '',
		name: formData.get('name')?.toString() ?? '',
		// 'Phone Number': formData.get('phone-number')?.toString() ?? '',
		uni: formData.get('university')?.toString() ?? '',
		sport: formData.get('sport-preference')?.toString() ?? '',
		gender: formData.get('gender-preference')?.toString() ?? '',
		'Agree to our terms of service': formData.get('terms-of-service')?.toString() ?? ''
		// 'Hometown': formData.get('hometown')?.toString() ?? '',
		// 'Graduation Year': formData.get('graduation')?.toString() ?? '',
	};

	// Check for missing fields
	const missingFields = new Map<string, string>();
	const notMissingFields = new Map<string, string>();

	Object.entries(fields).forEach(([key, value]) => {
		if (value === '' || value === 'undefined') {
			missingFields.set(key, value);
		} else {
			notMissingFields.set(key, value);
		}
	});

	// if (missingFields.size > 0) {
	// 	return fail(400, {
	// 		message: `Missing fields: ${Array.from(missingFields.keys()).join(', ')}`,
	// 		...Object.fromEntries(notMissingFields)
	// 	});
	// }

	// const missingProperties = validatePassword(password);
	// dont validate the password on the test branch.
	// if (GIT_BRANCH !== 'Test' && missingProperties.length > 0) {
	// 	return fail(400, {
	// 		message: missingProperties.join(', '),
	// 		...Object.fromEntries(notMissingFields)
	// 	});
	// }

	try {
		// Thie generate random string function is dogshit
		const user = await client.authUser.create({
			data: {
				id: generateRandomString(8),
				email: `${generateRandomString(8)}@gmail.com`,
				name: fields.name,
				email_verified: false,
				admin_verified: false,
				is_admin: false,
				is_brand: false
			}
		});
		return {
			statusCode: 200,
			body: JSON.stringify(user),
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true,
			}
		};
		// await prismaClient.profile.create({
		// 	data: {
		// 		sport: fields.sport,
		// 		college: fields.uni,
		// 		bio: '',
		// 		user_id: user.userId,
		// 		gender: fields.gender
		// 	}
		// });
		// const session = await auth.createSession(user.userId);
		// locals.auth.setSession(session);

		// const token = await emailVerificationToken.issue(user.userId);
		// await sendEmailVerificationEmail(user.email, token.toString(), url.origin);
	} catch (e) {
		return {
			statusCode: 200,
			body: e.toString(),
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true
			}
		};
	}

	try {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// const result = await client.post.findMany();
		const newEmail = await client.email.create({
			data: {
				id: generateRandomString(8),
				subject: "test-subject",
				email_address: "zecoolioguy@gmail.com",
				content: "test-content",
				date_sent: new Date()
			}
		});
		console.log(newEmail);
		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Hello, World!' }),
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true
			}
		};
	} catch (ex) {
		return {
			statusCode: 200,
			body: ex.toString(),
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true
			}
		};
	}
};
