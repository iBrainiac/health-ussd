module.exports = {
  index: async (req, res) => {
    try {
      const {
        // sessionId,
        // serviceCode,
        phoneNumber,
        text,
      } = req.body;

      let response = '';

      if (text === '') {
        /*
        * This is the main menu
        */
        response = `CON What would you like to check
      1. EMERGENCY
      2. CONSULTATION
      3. FIND NEAREST HEALTH FACILITY
      4. MENTAL HEALTH
      5. SUBSCRIPTIONS
      `;
      } else if (text === '1') {
        /*
        *  1. EMERGENCY
        */
        response = `CON Please confirm that you are in a state of emergency
      1. Confirm and accept call from operator`;
      } else if (text === '1*1') {
        /*
        *  1. EMERGENCY
        */
        response = 'END You will receive a call shortly';
      } else if (text === '2') {
        /*
        *  2. CONSULTATION
        */
        response = `END Your phone number is ${phoneNumber} by wahome`;
      } else if (text === '3') {
        /*
        * 3. FIND NEAREST HEALTH FACILITY
        */
        response = `CON The Nearest Health Facility is
        1.Nairobi
        2.Machakos
        3.Mombasa
        4.Nakuru
        5.Nyeri
        `;
      } else if (text === '3*1') {
        response = `CON 1. Feeling
        2. Feeling Uneasy`;
      } else if (text === '3*1*1') {
        response = 'END You might be depressed';
      } else if (text === '4') {
        /*
        *  4. MENTAL HEALTH
        */
        response = `CON
        1. Get Diagnosis based on

        2. Talk to an expert
        `;
      } else if (text === '4*1') {
        response = `CON 1. Feeling Tired
        2. Feeling Uneasy`;
      } else if (text === '4*1*1') {
        response = 'END You might be depressed';
      } else if (text === '4*1*2') {
        response = 'END You might be depressed';
      } else if (text === '1*1') {
        response = 'END Your account number is 123456';
      } else if (text === '4*2') {
        response = `CON Here are available dates...
        1. 12th
        2. 14th`;
      } else if (text === '4*2*1') {
        response = 'END (12th) You have an appointment at Nairobi hospital with doctor Wahosh at 12 o\'clock';
      } else if (text === '4*2*2') {
        response = 'END (14th) You have an appointment at Kenyatta hospital with doctor Washi at 12 o\'clock';

      }

      // Send the response back to the API
      res.set('Content-Type: text/plain');
      res.send(response);
      return response;
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
        data: error,
      });
    }
  },

};
