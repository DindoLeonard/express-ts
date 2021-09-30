import express, { Router } from 'express';

const router = express.Router();

router.get('/something', (req, res, next) => {
  res.json({ message: 'in the something route' });
});

export default router;
