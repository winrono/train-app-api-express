import express, { Router } from "express";
var ObjectID = require('mongodb').ObjectID;

const router: Router = express.Router();

router.get("/workout", async (req, res) => {
    try {
        const workoutCollection = req.app.locals.db.collection('workout');
        let workout = await workoutCollection.findOne({ _id: new ObjectID(req.query.id) });
        res.json(workout);
    } catch (e) {
        res.json({ message: e.message, stack: e.stack });
    }
});


router.post("/workout", async (req, res) => {
    const workoutCollection = req.app.locals.db.collection('workout');
    let result = await workoutCollection.insertOne(req.body);
    res.json(result.ops[0]);
})

router.get("/workouts", async (req, res) => {
    const workoutCollection = req.app.locals.db.collection('workout');
    let workouts = await workoutCollection.find().toArray();
    res.json(workouts);
})

export default router;