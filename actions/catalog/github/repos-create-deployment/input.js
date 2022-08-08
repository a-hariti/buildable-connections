const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    owner: "string", // Required
    repo: "string", // Required
    ref: "string", // Required

    // task: "deploy",
    // auto_merge: true,
    // required_contexts: ["string"],
    // payload: {},
    // environment: "production",
    // description: "",
    // transient_environment: false,
    // production_environment: true,
  };
};