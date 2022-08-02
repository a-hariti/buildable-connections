const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_SLACK_ACCESS_TOKEN: $env.BUILDABLE_SLACK_ACCESS_TOKEN, // Required
    alias_for: "string", // Required
    name: "string", // Required
    token: "string", // Required
  };
};
