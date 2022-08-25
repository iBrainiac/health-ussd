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
      2. Consultation
      3. Find the nearest health facility
      4. Mental health information
      5. Subscriptions
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
      } else if (text === '4*2') {
        response = `CON Here are available dates...
        1. 12th
        2. 14th`;
      } else if (text === '4*2*1') {
        response = 'END (12th) You have an appointment at Nairobi hospital with doctor Wahosh at 12 o\'clock';
      } else if (text === '4*2*2') {
        response = 'END (14th) You have an appointment at Kenyatta hospital with doctor Washi at 12 o\'clock';

      } else if (text === '5') {
        /*
        *  5. SUBSCRIPTIONS
        */
        response = `CON Subscribe to get more information
        1. Get regular updates on important health matters
        2. Reminders for appointments and medication
        3. Manage subscriptions
        4. Cancel all subscriptions
        `;
      } else if (text === '5*1') {
        response = `CON What updates would you like to subscribe to
        1. Vaccinations and health workshops
        2. Health newsletters
        `;
      } else if (text === '5*1*1') {
        response = `CON Would you like to subscribe to Vaccinations and health workshops?
        1. Confirm subscription to Vaccinations and health workshops
        `;
      } else if (text === '5*1*1*1') {
        response = `END You have successfully subscribed to information
        on Vaccinations and health workshops
        `;
      } else if (text === '5*1*2') {
        response = `CON Would you like to subscribe to Vaccinations and health workshops?
        1. Confirm subscription to health newsletters
        `;
      } else if (text === '5*1*2*1') {
        response = `END You have successfully subscribed to information
        on Health newsletters
        `;
      } else if (text === '5*2') {
        response = `CON Here is a list of all appointments you currently have. Kindly select the one you want a reminder of
        1. Appointment at Kenyatta University Teaching and Referral Hospital
        `;
      } else if (text === '5*2*1') {
        response = `END You will be reminded of your appointment at Kenyatta University Teaching and Referral Hospital via text
        `;
      } else if (text === '5*3') {
        response = `END Here are your subscriptions
        1. Reminder: Appointment at Kenyatta University Teaching and Referral Hospital
        `;
      } else if (text === '5*4') {
        response = `END You have successfully cancelled your subscriptions
        `;
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
