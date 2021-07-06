const express = require("express");
const router = express.Router();

const authenticateToken = require('../middlewares/authenticateToken');

router.use(authenticateToken);

router.get('/v2/hello', (req, res) => {
  return res.send({
    status: "Hello Connected",
  });
});


module.exports = router
