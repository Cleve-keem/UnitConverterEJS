import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import homeRoutes from "./routes/viewRoutes/homeRoutes.js";
import tempRoutes from "./routes/viewRoutes/tempRoutes.js";
import weigthRoutes from "./routes/viewRoutes/weigthRoutes.js";

const app = express();

app.use(expressEjsLayouts);
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "layouts/index");

app.use(homeRoutes);
app.use(weigthRoutes);
app.use(tempRoutes);

app.listen(3000, () => console.log(`server listening on port=3000`));
