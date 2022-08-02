const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_TWILIO_ACCOUNT_SID, BUILDABLE_TWILIO_AUTH_TOKEN, sid } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "delete",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/ConnectApps/${sid}.json`,
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: error.response.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({ BUILDABLE_TWILIO_ACCOUNT_SID, BUILDABLE_TWILIO_AUTH_TOKEN, sid }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_SID: "A valid sid field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof sid !== "string") throw new Error(ERRORS.INVALID_SID);
};
