const axios = require("axios");
const inst = axios.create({
  baseURL: `http://localhost:3000/`
});

module.exports = inst;