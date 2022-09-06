import { Router } from "express";
const router = Router();

import { getReference,getReferenceByID, createReference } from '../controllers/index.controller'

router.get('/reference', getReference)
router.get('/reference/:id', getReferenceByID)
router.post('/reference', createReference)
// router.put('/reference/:id', getreference)
// router.delete('/reference/:id', getreference)

//router.get('/test', (req, res) => res.send('hola wuuuuu'))

export default router;