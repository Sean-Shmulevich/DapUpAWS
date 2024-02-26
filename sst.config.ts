import type { SSTConfig } from 'sst';
// import { SvelteKitSite } from 'sst/constructs';
// import { CognitoStack } from './stacks/Cognito';
import { PrismaStack } from './stacks/PrismaStack';

export default {
	config(_input) {
		return {
			name: 'app',
			region: 'us-east-1'
		};
	},
	stacks(app) {
		app.stack(PrismaStack);
	}
} satisfies SSTConfig;
