import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'teste@gmail.com',
        firstName: 'Douglas',
        lastName: 'Ribeiro',
    }
})
console.log('done')