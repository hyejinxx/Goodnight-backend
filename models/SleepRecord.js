const mongoose = require('mongoose');

const SleepRecordSchema = new mongoose.Schema({
    sleepRecordId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    sleepStart: { type: Date, required: true },
    sleepEnd: { type: Date, required: true },
    sleepDuration: { type: Number, required: true },
    sleepQuality: { type: Number, required: true },
    dreamPresence: { type: Boolean, required: true },
    wakeUpCount: { type: Number, required: true },
    weekday: { type: Number, required: true },
    notes: { type: String }
  });

const SleepRecord = mongoose.model('SleepRecord', SleepRecordSchema);
module.exports = SleepRecord;