import express from 'express';
import { createTransaction } from '../controller/transactionController.js';

const router = express.Router();

router.post('/transaction', createTransaction);

export default router;