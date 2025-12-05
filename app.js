import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import homeViewRoute from "./routes/views/home.js";
import tempViewRoute from "./routes/views/temp.js";
import weightViewRoute from "./routes/views/weight.js";
import convertRoute from "./routes/api/convert.js";

const app = express();

app.use(expressEjsLayouts);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "layouts/index");

app.use(homeViewRoute);
app.use(weightViewRoute);
app.use(tempViewRoute);

app.use("/api/convert", convertRoute);

app.listen(3000, () => console.log(`server listening on port=3000`));
