import { Router } from 'express';
import { addTraveller, getTravellers } from '../controllers/travellerController';

const router = Router();

router.post('/addtraveller', addTraveller);
router.get('/gettraveller', getTravellers);

export default router;
