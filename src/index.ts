import express from 'express';
import authRoute from './routes/auth';
import dataRoute from './routes/data';
import { initDatabase } from './db';


const app = express();
const port = 8081;


async function bootstrap() {

    let client: any = await initDatabase();

    app.listen(port, async () => {
        console.log(`Example app listening on port ${port}!`);
        const db: any = client.db('video');
        app.locals.db = db;
    });

    app.use('/auth', authRoute);

    app.use('/data', dataRoute);
}

bootstrap();