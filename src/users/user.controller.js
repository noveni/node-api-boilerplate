const jwt = require('jsonwebtoken');
const config = require( "../../config" );

const options = {
  expiresIn: "1h",
};


async function generateAccessToken(key) {
  try {
    // const payload = { email: email, id: userId };
    const token = await jwt.sign(key, config.tokenSecret);
    return { error: false, token: token };
  } catch (error) {
    return { error: true };
  }
  // return jwt.sign(username, config.tokenSecret);
}

exports.Login = async (req, res) => {
  try {
    const key = req.query['api-key'];

    if (!key) {
      return res.status(400).json({
        error: true,
        message: "api key required.",
      });
    }

    // key is invalid
    if (!~config.usersKey.indexOf(key)) {
      return res.status(401).json({
        error: true,
        message: "invalid api key.",
      });
    }

    //Generate Access token

    const { error, token } = await generateAccessToken(key);
    console.log(error, token);
    if (error) {
      console.log(error);
      return res.status(500).json({
        error: true,
        message: "Couldn't create access token. Please try again later",
      });
    }

    //Success
    return res.send({
      success: true,
      message: "User logged in successfully",
      accessToken: token,
    });
  } catch (err) {
    console.error("Login error", err);
    return res.status(500).json({
      error: true,
      message: "Couldn't login. Please try again later.",
    });
  }
};
