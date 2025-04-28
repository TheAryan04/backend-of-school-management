import { Router } from 'express';
const router = Router();
import { addSchool, listSchools } from '../controllers/schoolController.js';

router.post('/addSchool', addSchool);
router.get('/listSchools', listSchools);

export default router;
