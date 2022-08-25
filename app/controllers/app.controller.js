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
        response = `CON Choose account information you want to view
      1. Account number`;
      } else if (text === '2') {
        /*
        *  2. CONSULTATION
        */
        response = `END Your phone number is ${phoneNumber} by wahome`;
      }  else if (text === '3') {
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
        response = `CON 
        1.Kenyatta University Teaching and Refferal Hospital
        2.Kenyatta National Hospital
        3.Guru Nanak Hospital
        `;
      } else if (text === '3*1*1') {
        response = `CON 
        1.Book Appointment
        `;
      } else if (text === '3*1*1*1') {
        response = `CON Choose Specialist
        1.Pediatrician
        2.Cardiologist
        3.Phsychiatrist
        `;
      }else if (text === '3*1*1*1*1') {
        response = `CON 25/8/2022 Please Select Time
        1.8am - 12pm
        2.2pm - 5pm
        `;
      }else if (text === '3*1*1*1*1*1') {
        response = `END Appointment Set for 25/8/2022 8am - 12pm with Pediatrician
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
      }else if (text === '4*1*2') {
        response = 'END You might be depressed';
      } else if (text === '1*1') {
        response = 'END Your account number is 123456';
      } else if (text === '4*2'){
        response = `CON Here are available dates... 
        1. 12th
        2. 14th`;
      }else if (text === '4*2*1') {
        response = `END (12th) You have an appointment at Nairobi hospital with doctor Wahosh at 12 o'clock`
      }else if (text === '4*2*2') {
        response = `END (14th) You have an appointment at Kenyatta hospital with doctor Washi at 12 o'clock`
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
