const expreess = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
app.use(express.JSON());
app.use(express.urlEncoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
