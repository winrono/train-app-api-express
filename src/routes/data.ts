import express, { Router } from "express";

const router: Router = express.Router();

router.get("/sample", async (req, res) => {
    const movies = req.app.locals.db.collection('movieDetails');
    let movie = await movies.findOne();
    res.json(movie);
});

export default router;