import express from 'express';
// import upload from '../middleware/storage';
import { getAllEntry, getEntry, updateEntry, createEntry, deleteEntry } from '../controllers/Controller.js';
import upload from '../middleware/storage.js';


const router = express.Router()

router.get('/', getAllEntry);
router.get("/:id", getEntry);
router.post("/", createEntry);
router.post('/public', upload.single("foto"), createEntry);
router.put("/:id", updateEntry);
router.delete("/:id", deleteEntry);


export default router;