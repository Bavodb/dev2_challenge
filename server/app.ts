// import express, { Application, Request, Response } from "express";
// import path from "path";
// import routes from "./routes";
// const app: Application = express();
// app.use(express.static(path.join(__dirname, "/public")));
// const PORT: number = 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use("/", routes);

// app.listen(PORT, () => {
//   console.log(`Server draait op http://localhost:${PORT}`);
// });

import express, { Application } from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import routes from "./routes";

const app: Application = express();
const PORT : number = parseInt(<string>process.env.PORT, 10) || 3000;

// EJS als template-engine instellen
app.set("view engine", "ejs");
app.set("views", "./server/views");

// Middleware voor layouts
app.use(expressLayouts);
app.set("layout", "layouts/main");

// Middleware om statische bestanden te serveren
app.use(express.static(path.join(__dirname, "/public")));

// Middleware om formulierdata te verwerken
app.use(express.urlencoded({ extended: true }));

// Routes gebruiken
app.use("/", routes);

// Server starten
app.listen(PORT, (): void => {
  console.log(`Server draait op http://localhost:${PORT}`);
});