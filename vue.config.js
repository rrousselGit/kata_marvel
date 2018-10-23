console.log("here", process.env.NODE_ENV);

module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/kata_marvel/" : "/",
};
