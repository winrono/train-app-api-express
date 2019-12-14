import express from "express";
import authRoute from "./routes/auth";
import workoutRoute from "./routes/workout";
import sampleRoute from "./routes/sample";
import { initDatabase } from "./db";


const app = express();

app.use(express.json());
const port = 8081;


async function bootstrap() {

    let client: any = await initDatabase();

    app.listen(port, async () => {
        console.log(`Example app listening on port ${port}!`);
        const db: any = client.db("workoutAppDB");
        app.locals.db = db;
        app.locals.tempDb = client.db("video");
    });

    app.use("/auth", authRoute);

    app.use("/workouts", workoutRoute);

    app.use("/sample", sampleRoute);
}

bootstrap();