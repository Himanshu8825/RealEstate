import express from 'express';

import { verifyToken } from '../utils/veryfyUser.js';
import { deleteUser, test, updateUser } from '../controllers/user.controller.js'
const router = express.Router();


router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);

export default router;