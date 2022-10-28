import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => {
    // res.send('Hello World!');
    main()
        .then(async () => {
            await prisma.$disconnect();
        })
        .catch(async e => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        });
});

async function main() {
    // Connect the client
    await prisma.$connect();
    // ... you will write your Prisma Client queries here
    await prisma.codeFile.create({
        data: {
            code: '<html> Hi </html>',
            url: '',
        },
    });

    const allUsers = await prisma.codeFile.findMany({});
    console.dir(allUsers, { depth: null });
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
