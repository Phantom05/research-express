const path_env = `./.env`;
const result = require("dotenv").config({ path: path_env });
if (result.error) throw result.error;

const { parsed: envs } = result;

process.env.PORT = envs.port;
export default envs;
