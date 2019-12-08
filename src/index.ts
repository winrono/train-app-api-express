import express from 'express';
import authRoute from './routes/auth';
import { initDatabase } from './db';


const app = express();
const port = 3000;

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}!`);
    let client: any = await initDatabase();
    const db = client.db('video');
    const movies = db.collection('movieDetails');
    console.log(client);
});



app.use('/auth', authRoute);