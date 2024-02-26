import path from 'path';
import fs from 'fs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Api, StackContext, SvelteKitSite, Cognito } from 'sst/constructs';

export function PrismaStack({ stack, app }: StackContext) {
	const auth = new Cognito(stack, 'Auth', {
		login: ['email']
	});

	// Create Api

	// attach permissions for authenticated users to the api

	if (!app.local) {
		// Create a layer for production
		// This saves shipping Prisma binaries once per function
		const layerPath = '.sst/layers/prisma';

		// Clear out the layer path
		fs.rmSync(layerPath, { force: true, recursive: true });
		fs.mkdirSync(layerPath, { recursive: true });

		// Copy files to the layer
		const toCopy = [
			'node_modules/.prisma',
			'node_modules/@prisma/client',
			'node_modules/prisma/build'
		];
		for (const file of toCopy) {
			fs.cpSync(file, path.join(layerPath, 'nodejs', file), {
				// Do not include binary files that aren't for AWS to save space
				recursive: true,
				filter: (src) => !src.endsWith('so.node') || src.includes('rhel')
			});
		}
		const prismaLayer = new lambda.LayerVersion(stack, 'PrismaLayer', {
			code: lambda.Code.fromAsset(path.resolve(layerPath))
		});

		// Add to all functions in this stack
		stack.addDefaultFunctionLayers([prismaLayer]);
	}

	const apiPrisma = new Api(stack, 'PrismaApi', {
		authorizers: {
			jwt: {
				type: 'user_pool',
				userPool: {
					id: auth.userPoolId,
					clientIds: [auth.userPoolClientId]
				}
			}
		},
		defaults: {
			authorizer: 'jwt',
			function: {
				environment: {
					DATABASE_URL: app.local
						? 'mysql://root@localhost:3306/test'
						: 'mysql://production-url'
				},
				nodejs: {
					esbuild: {
						// Only reference external modules when deployed
						// external: app.local
						//     ? []
						//     : ["@prisma/client", ".prisma"],
						external: ['@prisma/client', '.prisma']
					}
				}
			}
		},
		routes: {
			'GET /post': 'packages/functions/src/index.handler'
		}
	});

	const site = new SvelteKitSite(stack, 'Site', {
		buildCommand: 'npm run build',
		buildOutput: 'dist',
		environment: {
			VITE_APP_API_URL: apiPrisma.url,
			VITE_APP_REGION: app.region,
			VITE_APP_USER_POOL_ID: auth.userPoolId,
			VITE_APP_USER_POOL_CLIENT_ID: auth.userPoolClientId
		}
	});

	auth.attachPermissionsForAuthUsers(stack, [apiPrisma]);

	stack.addOutputs({
		prismaApi: apiPrisma.url,
		ApiEndpoint: apiPrisma.url,
		UserPoolId: auth.userPoolId,
		UserPoolClientId: auth.userPoolClientId,
		SiteUrl: site.url
	});
}
