import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { PrismaClient } from "../prisma";

const client = new PrismaClient();

export const handler: APIGatewayProxyHandlerV2 = async () => {
    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({ message: "Hello, World!" }),
    // };
    try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await client.post.findMany();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Hello, World!" }),
        };
    } catch (ex) {
        return {
            statusCode: 200,
            body: ex.toString(),
        };
    }
};
