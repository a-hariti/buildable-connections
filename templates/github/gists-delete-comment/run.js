const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_GITHUB_ACCESS_TOKEN, BUILDABLE_GITHUB_ACCOUNT_USERNAME, gist_id, comment_id } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "delete",
      url: `https://api.github.com/gists/${gist_id}/comments/${comment_id}`,
      auth: { password: BUILDABLE_GITHUB_ACCESS_TOKEN, username: BUILDABLE_GITHUB_ACCOUNT_USERNAME },
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
const verifyInput = ({
  BUILDABLE_GITHUB_ACCESS_TOKEN,
  BUILDABLE_GITHUB_ACCOUNT_USERNAME,
  gist_id,
  comment_id,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN:
      "A valid BUILDABLE_GITHUB_ACCESS_TOKEN field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_GITHUB_ACCOUNT_USERNAME:
      "A valid BUILDABLE_GITHUB_ACCOUNT_USERNAME field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_GIST_ID: "A valid gist_id field (string) was not provided in the input.",
    INVALID_COMMENT_ID: "A valid comment_id field (number) was not provided in the input.",
  };

  if (typeof BUILDABLE_GITHUB_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN);
  if (typeof BUILDABLE_GITHUB_ACCOUNT_USERNAME !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCOUNT_USERNAME);
  if (typeof gist_id !== "string") throw new Error(ERRORS.INVALID_GIST_ID);
  if (typeof comment_id !== "number") throw new Error(ERRORS.INVALID_COMMENT_ID);
};
