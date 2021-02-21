let path = require("path");

module.exports = function (app) {
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats"));
  });

  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise"));
  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index"));
  });
};