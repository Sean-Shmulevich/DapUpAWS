import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { PrismaClient } from "../prisma";

const client = new PrismaClient();

export const handler: APIGatewayProxyHandlerV2 = async () => {
    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({ message: "Hello, World!" }),
    // };
    try {
        const result = await client.post.findMany();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Hello, World!" }),
        };
    } catch (ex: any) {
        return {
            statusCode: 200,
            body: ex.toString(),
        };
    }
};
