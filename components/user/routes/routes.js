import { Router } from 'express';
import apiResponse from '../../../libs/apiResponse.js';

const router = Router();
router.get('/data',(req, res) => {
		// const areas = await getEntity();
		return apiResponse.send(res, 200, null);
	}
);

export default router;
