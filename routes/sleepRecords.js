const express = require('express');
const router = express.Router();
const SleepRecord = require('../models/SleepRecord');

router.get('/sleep-records', async (req, res) => {
    try {
        const records = await SleepRecord.find();
        res.status(200).json(records);
    } catch (error) {
        console.error('Error fetching sleep records:', error);
        res.status(500).json({ message: error.message });
        
    }
});