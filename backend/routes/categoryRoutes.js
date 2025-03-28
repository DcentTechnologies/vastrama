import express from "express";

const router = express.Router();

router.get('/men', (req, res) => {
    res.send('Men page');
    });

router.get('/women', (req, res) => {
    res.send('Women page');
    });

router.get('/kids', (req, res) => {
    res.send('Kid page');
    });

router.get('/accessories', (req, res) => {
    res.send('Accessories page');
    });

export default router;