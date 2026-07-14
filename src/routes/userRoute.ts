import express from 'express';

import {
  createUser,
  getUsers,
  getUserByName,
  updateUser,
  deleteUser
} from '../controllers/userController';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:name', getUserByName);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;