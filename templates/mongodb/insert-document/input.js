const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    MONGODB_CONNECTION_KEY: $env.MONGODB_CONNECTION_KEY, // Required
    collection: "collection-1", // Required

    key: "new",
    // otherKeys: 10051164
  };
};
