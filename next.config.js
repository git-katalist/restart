const debug = process.env.NODE_ENV !== "production";

module.exports = {
  // basePath: /restart,
  basePath: !debug ? "/restart" : "",
};
