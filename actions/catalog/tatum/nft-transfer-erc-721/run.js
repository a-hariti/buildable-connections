const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    chain,
    to,
    tokenId,
    contractAddress,
    fromPrivateKey,
    testnetType,
    value,
    provenance,
    provenanceData,
    tokenPrice,
    nonce,
    fee,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/nft/transaction",
      headers: {
        "x-api-key": BUILDABLE_TATUM_API_KEY,
        ...(testnetType ? { "x-testnet-type": testnetType } : {}),
      },
      data: {
        chain,
        to,
        tokenId,
        contractAddress,
        fromPrivateKey,
        ...(value ? { value } : {}),
        ...(provenance ? { provenance } : {}),
        ...(provenanceData ? { provenanceData } : {}),
        ...(tokenPrice ? { tokenPrice } : {}),
        ...(nonce ? { nonce } : {}),
        ...(fee ? { fee } : {}),
      },
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
  BUILDABLE_TATUM_API_KEY,
  BUILDABLE_TATUM_API_URL,
  chain,
  to,
  tokenId,
  contractAddress,
  fromPrivateKey,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_CHAIN: "A valid chain field (string) was not provided in the input.",
    INVALID_TO: "A valid to field (string) was not provided in the input.",
    INVALID_TOKEN_ID: "A valid tokenId field (string) was not provided in the input.",
    INVALID_CONTRACT_ADDRESS:
      "A valid contractAddress field (string) was not provided in the input.",
    INVALID_FROM_PRIVATE_KEY:
      "A valid fromPrivateKey field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof chain !== "string") throw new Error(ERRORS.INVALID_CHAIN);
  if (typeof to !== "string") throw new Error(ERRORS.INVALID_TO);
  if (typeof tokenId !== "string") throw new Error(ERRORS.INVALID_TOKEN_ID);
  if (typeof contractAddress !== "string") throw new Error(ERRORS.INVALID_CONTRACT_ADDRESS);
  if (typeof fromPrivateKey !== "string") throw new Error(ERRORS.INVALID_FROM_PRIVATE_KEY);
};