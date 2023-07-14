import express from 'express';
import { addData, getData } from '../controller/game.js';

const router = express.Router();

router.get('/', getData);
router.post('/', addData);

export default router;
