require('dotenv').load();
var routes = require("routes")(),
  db = require("monk")(process.env.MONGO_URI),
  questions = db.get("questions"),
  qRoutes = require("./routes/questions");

  routes.addRoute("/", qRoutes.landing);
  routes.addRoute("/questions.json", qRoutes.getQuestions);
  routes.addRoute("/:id.json", qRoutes.getAnswer);
  routes.addRoute("/public/*", qRoutes.publicFile);
  module.exports = routes;
