const jwt = require('jsonwebtoken');
const config = require( "../config" );

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, config.tokenSecret, (err, decoded) => {
    console.log(err)

    if (err) {
      return res.status(403).json({
        error: true,
        message: "Unauthorize.",
      });
    }

    req.decoded = decoded

    next();

    
  })
}
