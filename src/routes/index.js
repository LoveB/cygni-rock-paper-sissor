import express from 'express';

const router = express.Router();

// GET api
router.get('/', (req, res) => {
  res.redirect('/api');
});

export default router;
