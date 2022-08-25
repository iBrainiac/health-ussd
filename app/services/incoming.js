/* eslint-disable no-console */
// Getting env file configs
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
require('dotenv').config();

// required libraries and express
const express = require('express');
const { VoiceResponse } = require('twilio').twiml;

const app = express();

// main function
app.post('/voice', (req, res) => {
  const twiml = new VoiceResponse();
  twiml.say('Hello From Twilio, Now everybody is happy');
  res.type('text/xml');
  res.send(twiml.toString());
});

// Server Port configs
const PORT = 1337;
app.get('/', (req, res) => {
  res.send(`Your server is running on port:${PORT}`);
});
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
