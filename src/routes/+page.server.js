import { PrismaClient } from "@prisma/client";


export async function load() {
    try {
        const client = new PrismaClient();
        const result = await client.user.create({
            data: {
                email: `sean@gmail.com${Math.floor(Math.random() * 500000)}`,
                name: "Sean shmulevich"
            }

        })
        return result;
    } catch (error) {
        console.log(error)
        return { msg: error };
    }

}