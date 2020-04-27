
import Nexmo from 'nexmo';
import dotenv from 'dotenv';

import randomize from 'randomatic';

dotenv.config();

const apiKey = process.env.NEXMO_API_KEY;
const apiSecret = process.env.NEXMO_API_SECRET;

// init Nexmo

const nexmo = new Nexmo({
  apiKey,
  apiSecret
}, { debug: true });

// start sending message
/**
 * validate number
 * @param {object} req number to be vatidated
 * @param {object} res number to be vatidated
 * @param {object} next number to be vatidated
 * @returns {string} boolean respomse of the test
 */
const sendText = (req, res, next) => {
  const phoneNumber = req.body.phoneNumber;
  const code = randomize('00000');
  console.log(`+25${phoneNumber}`);

  nexmo.message.sendSms(
    'LabourForce',
    `+25${phoneNumber}`,
    `Hi ${req.body.fullname}. Welcome to Labour Force App, your confirmation code: ${code}. Valid for 60 minutes`,
    { type: 'unicode' },
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
        req.userCode = code;
        next();
      }
    }
  );
};

export default sendText;
