import express, { Router } from "express";

const router: Router = express.Router();

router.post("/data", async (req, res) => {
    const collection = req.app.locals.tempDb.collection("movieDetails");
    let videos = await collection.find().toArray();
    res.json(videos);
});


router.post("/dataMinified", async (req, res) => {
    const collection = req.app.locals.tempDb.collection("movieDetails");
    let videos = await collection.find({}, { projection: { _id: 0, writers: 0, actors: 0, imdb: 0 } }).toArray();
    res.json(videos);
});

router.post("/dataMinimal", async (req, res) => {
    const collection = req.app.locals.tempDb.collection("movieDetails");
    let videos = await collection.find({}, { projection: { title: 1, year: 1 } }).toArray();
    res.json(videos);
});

export default router;