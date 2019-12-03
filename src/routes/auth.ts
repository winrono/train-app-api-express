import express, { Router } from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Not supported :)');
});


router.post('/login', (req, res) => {
    res.send('Hey there!');
});

export default router;