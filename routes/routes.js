import express from "express";
const router = express.Router();

import {
  getUser,
  postUser,
  updateUser,
  removeUser,
} from "../controllers/userControllers.js";


router.get('/', getUser)

router.post('/', postUser)

router.post("/", postUser);

router.put('/:id', updateUser)

router.delete('/:id', removeUser)


export default router;