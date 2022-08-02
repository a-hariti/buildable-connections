const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    POSTGRESQL_CONNECTION_KEY: $env.POSTGRESQL_CONNECTION_KEY, // Required
    query: "SELECT id FROM table_name LIMIT 10;",
    maxLimit: 100
  };
};
