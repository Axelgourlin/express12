const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "superSecretStringNowoneShouldKnowOrTheCanGenerateTokens";

const calculateToken = (userEmail = "", user_id = "") => {
  return jwt.sign({ userEmail: userEmail, user_id: user_id }, PRIVATE_KEY);
};

const decodeToken = (token) => {
  return jwt.decode(token);
};

module.exports = { calculateToken, decodeToken };
