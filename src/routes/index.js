import express from 'express';
var router = express.Router();

// GET api
router.get('/', function(req, res) {
    res.redirect('/api');
  });

  export default router;