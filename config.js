"use strict";

const assert = require( "assert" );
const dotenv = require( "dotenv" );


// read in the .env file
dotenv.config();

// capture the environment variables the application needs
const { 
  PORT,
  HOST,
  HOST_URL,
  COOKIE_ENCRYPT_PWD,
  TOKEN_SECRET,
  USERS_KEY
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";
const usersKey = USERS_KEY;

// validate the required configuration information
assert( PORT, "PORT configuration is required." );
assert( HOST, "HOST configuration is required." );
assert( HOST_URL, "HOST_URL configuration is required." );
assert( COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD configuration is required." );
assert( TOKEN_SECRET, "TOKEN_SECRET configuration is required." );

// export the configuration information
module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  cookiePwd: COOKIE_ENCRYPT_PWD,
  tokenSecret: TOKEN_SECRET,
  usersKey: usersKey.split(';')
}
